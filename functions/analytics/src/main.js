import { syncAnalyticsToCrm } from "./crmSync.js";

const ALLOWED_EVENT_TYPES = new Set([
  "page_view",
  "section_view",
  "cta_click",
  "form_submit",
  "form_success",
  "form_error",
]);

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

const parseAllowedOrigins = () => {
  const raw = normalizeText(process.env.ANALYTICS_ALLOWED_ORIGINS);
  if (!raw) return [];
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
};

const getRequestOrigin = (req) => {
  const headers = req?.headers || {};
  return (
    normalizeText(headers.origin) ||
    normalizeText(headers.Origin) ||
    normalizeText(headers["x-forwarded-host"]) ||
    normalizeText(headers["X-Forwarded-Host"])
  );
};

const getCorsOrigin = (req) => {
  const allowedOrigins = parseAllowedOrigins();
  const requestOrigin = getRequestOrigin(req);

  if (allowedOrigins.length === 0) {
    return requestOrigin || "*";
  }

  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    return requestOrigin;
  }

  return allowedOrigins[0];
};

const getCorsHeaders = (req) => ({
  "Access-Control-Allow-Origin": getCorsOrigin(req),
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Max-Age": "86400",
});

const parseJsonSafely = (rawValue) => {
  if (typeof rawValue !== "string") return null;
  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
};

const getRequestBody = (req) => {
  const candidates = [
    req?.body,
    req?.bodyRaw,
    req?.payload,
    req?.data,
    req?.rawBody,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;

    if (typeof candidate === "object") {
      return candidate;
    }

    const parsed = parseJsonSafely(candidate);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  }

  return {};
};

const sanitizePayload = (payload = {}) => ({
  site: normalizeText(payload.site || "racoondevs.com").slice(0, 120),
  eventType: normalizeText(payload.eventType).toLowerCase(),
  path: normalizeText(payload.path || "/").slice(0, 512),
  visitorId: normalizeText(payload.visitorId).slice(0, 80),
  sessionId: normalizeText(payload.sessionId).slice(0, 80),
  section: normalizeText(payload.section).slice(0, 120),
  elementId: normalizeText(payload.elementId).slice(0, 120),
  label: normalizeText(payload.label).slice(0, 180),
  referrer: normalizeText(payload.referrer).slice(0, 1024),
  occurredAt: normalizeText(payload.occurredAt) || new Date().toISOString(),
  metadata:
    payload.metadata && typeof payload.metadata === "object" && !Array.isArray(payload.metadata)
      ? payload.metadata
      : {},
});

const validatePayload = (payload) => {
  const errors = [];

  if (!ALLOWED_EVENT_TYPES.has(payload.eventType)) {
    errors.push("Tipo de evento no permitido.");
  }

  if (!payload.path) {
    errors.push("El path es obligatorio.");
  }

  if (!payload.visitorId) {
    errors.push("visitorId es obligatorio.");
  }

  if (!payload.sessionId) {
    errors.push("sessionId es obligatorio.");
  }

  return errors;
};

const successResponse = (res, body, headers = {}) =>
  res.json(
    {
      success: true,
      ...body,
    },
    202,
    headers,
  );

const errorResponse = (
  res,
  message,
  details = [],
  status = 400,
  headers = {},
) =>
  res.json(
    {
      success: false,
      message,
      details,
    },
    status,
    headers,
  );

export default async ({ req, res, log, error }) => {
  const requestMethod = (req?.method || "GET").toUpperCase();
  const corsHeaders = getCorsHeaders(req);

  if (requestMethod === "OPTIONS") {
    return res.empty(204, corsHeaders);
  }

  if (requestMethod !== "POST") {
    return errorResponse(res, "Metodo no permitido.", [], 405, corsHeaders);
  }

  const payload = sanitizePayload(getRequestBody(req));
  const payloadErrors = validatePayload(payload);

  if (payloadErrors.length > 0) {
    return errorResponse(
      res,
      "Evento invalido.",
      payloadErrors,
      400,
      corsHeaders,
    );
  }

  try {
    const syncResult = await syncAnalyticsToCrm(payload, log);
    if (syncResult?.skipped) {
      log(`CRM analytics sync skipped: ${syncResult.reason || "unknown reason"}`);
    }

    return successResponse(
      res,
      {
        message: "Evento recibido.",
      },
      corsHeaders,
    );
  } catch (caughtError) {
    error(
      `analytics-function failed for event=${payload.eventType}: ${
        caughtError?.message || "unknown error"
      }`,
    );

    return errorResponse(
      res,
      "Error interno al procesar analitica.",
      [],
      500,
      corsHeaders,
    );
  }
};
