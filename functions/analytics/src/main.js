import { syncAnalyticsToCrm } from "./crmSync.js";
import { createHash } from "node:crypto";
import { isIP } from "node:net";

const ALLOWED_EVENT_TYPES = new Set([
  "page_view",
  "section_view",
  "cta_click",
  "form_submit",
  "form_success",
  "form_error",
]);

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");
const GEO_CACHE = new Map();
const CRAWLER_USER_AGENT_PATTERN =
  /(googlebot|bingbot|yandexbot|duckduckbot|baiduspider|petalbot|applebot|facebookexternalhit|linkedinbot|twitterbot|slackbot|telegrambot|whatsapp|ahrefsbot|semrushbot|mj12bot|dotbot|screaming frog)/i;
const AUTOMATION_USER_AGENT_PATTERN =
  /(headless|phantomjs|selenium|playwright|puppeteer|cypress|curl\/|wget\/|python-requests|go-http-client|node-fetch|axios\/)/i;
const DATACENTER_NETWORK_PATTERN =
  /(amazon|aws|google cloud|digitalocean|linode|ovh|hetzner|azure|microsoft|oracle|cloudflare|vultr|alibaba cloud)/i;

const parseBoolean = (value, fallback = false) => {
  const normalized = normalizeText(value).toLowerCase();
  if (!normalized) return fallback;
  return ["true", "1", "yes", "on"].includes(normalized);
};

const parseInteger = (value, fallback, min, max) => {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  if (Number.isNaN(parsed)) return fallback;
  if (parsed < min) return min;
  if (parsed > max) return max;
  return parsed;
};

const clampNumber = (value, min, max, fallback = 0) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  if (numeric < min) return min;
  if (numeric > max) return max;
  return numeric;
};

const readHeader = (headers, key) => {
  if (!headers || typeof headers !== "object") {
    return "";
  }

  const exact = headers[key];
  if (typeof exact === "string" && exact.length > 0) {
    return exact;
  }

  const lower = headers[key.toLowerCase()];
  return typeof lower === "string" ? lower : "";
};

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
    normalizeText(readHeader(headers, "origin")) ||
    normalizeText(readHeader(headers, "x-forwarded-host"))
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

const sanitizeMetadataValue = (value, depth = 0) => {
  if (depth > 4) return undefined;

  if (typeof value === "string") {
    return value.slice(0, 400);
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "boolean") {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .slice(0, 10)
      .map((item) => sanitizeMetadataValue(item, depth + 1))
      .filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    const output = {};
    Object.entries(value)
      .slice(0, 25)
      .forEach(([key, item]) => {
        const safeKey = normalizeText(key).slice(0, 80);
        if (!safeKey) return;
        const sanitized = sanitizeMetadataValue(item, depth + 1);
        if (sanitized !== undefined) {
          output[safeKey] = sanitized;
        }
      });
    return output;
  }

  return undefined;
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
      ? sanitizeMetadataValue(payload.metadata) || {}
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

const parseForwardedIp = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) return "";

  const match = normalized.match(/for=([^;,\s]+)/i);
  if (!match?.[1]) return "";

  return match[1];
};

const cleanupIpCandidate = (value) => {
  let candidate = normalizeText(value);
  if (!candidate) return "";

  if (candidate.includes(",")) {
    [candidate] = candidate.split(",");
    candidate = normalizeText(candidate);
  }

  candidate = candidate.replace(/^for=/i, "").replace(/^"|"$/g, "");

  if (candidate.startsWith("[")) {
    const closingIndex = candidate.indexOf("]");
    if (closingIndex > 0) {
      candidate = candidate.slice(1, closingIndex);
    }
  }

  if (candidate.startsWith("::ffff:")) {
    candidate = candidate.slice(7);
  }

  if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(candidate)) {
    [candidate] = candidate.split(":");
  }

  candidate = normalizeText(candidate).slice(0, 64);
  return isIP(candidate) ? candidate : "";
};

const getRequestIpInfo = (req) => {
  const headers = req?.headers || {};
  const forwardedIp = parseForwardedIp(readHeader(headers, "forwarded"));

  const candidates = [
    { source: "cf-connecting-ip", value: readHeader(headers, "cf-connecting-ip") },
    { source: "x-real-ip", value: readHeader(headers, "x-real-ip") },
    { source: "x-forwarded-for", value: readHeader(headers, "x-forwarded-for") },
    { source: "forwarded", value: forwardedIp },
    { source: "true-client-ip", value: readHeader(headers, "true-client-ip") },
    { source: "x-client-ip", value: readHeader(headers, "x-client-ip") },
    { source: "req-ip", value: req?.ip },
  ];

  for (const candidate of candidates) {
    const ip = cleanupIpCandidate(candidate.value);
    if (ip) {
      return { ip, source: candidate.source };
    }
  }

  return { ip: "", source: "unknown" };
};

const isPrivateIpv4 = (ip) => {
  const chunks = ip.split(".").map((entry) => Number.parseInt(entry, 10));
  if (chunks.length !== 4 || chunks.some((entry) => Number.isNaN(entry))) {
    return false;
  }

  const [a, b] = chunks;

  if (a === 10 || a === 127) return true;
  if (a === 192 && b === 168) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 169 && b === 254) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;

  return false;
};

const isPrivateIp = (ip) => {
  const version = isIP(ip);
  if (version === 4) {
    return isPrivateIpv4(ip);
  }

  if (version === 6) {
    const normalized = ip.toLowerCase();
    return (
      normalized === "::1" ||
      normalized.startsWith("fc") ||
      normalized.startsWith("fd") ||
      normalized.startsWith("fe80")
    );
  }

  return true;
};

const maskIp = (ip) => {
  if (!ip) return "";

  const version = isIP(ip);
  if (version === 4) {
    const chunks = ip.split(".");
    if (chunks.length === 4) {
      return `${chunks[0]}.${chunks[1]}.${chunks[2]}.0`;
    }
  }

  if (version === 6) {
    const chunks = ip.split(":").filter(Boolean);
    return `${chunks.slice(0, 4).join(":")}::`;
  }

  return "";
};

const hashIp = (ip) => {
  if (!ip) return "";
  const salt = normalizeText(process.env.ANALYTICS_IP_HASH_SALT);
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 24);
};

const buildGeoConfig = () => ({
  enabled: parseBoolean(process.env.ANALYTICS_GEOIP_ENABLED, true),
  timeoutMs: parseInteger(process.env.ANALYTICS_GEOIP_TIMEOUT_MS, 1800, 300, 10000),
  cacheTtlMs: parseInteger(
    process.env.ANALYTICS_GEOIP_CACHE_TTL_MS,
    30 * 60 * 1000,
    60 * 1000,
    24 * 60 * 60 * 1000,
  ),
  cacheMaxEntries: parseInteger(process.env.ANALYTICS_GEOIP_CACHE_MAX, 500, 50, 5000),
  urlTemplate:
    normalizeText(process.env.ANALYTICS_GEOIP_URL_TEMPLATE) || "https://ipwho.is/{ip}",
});

const getCachedGeo = (ip) => {
  const now = Date.now();
  const cached = GEO_CACHE.get(ip);

  if (!cached) return null;
  if (cached.expiresAt <= now) {
    GEO_CACHE.delete(ip);
    return null;
  }
  return cached.value;
};

const setCachedGeo = (ip, value, maxEntries, ttlMs) => {
  if (!ip) return;

  if (GEO_CACHE.size >= maxEntries) {
    const oldestKey = GEO_CACHE.keys().next().value;
    if (oldestKey) {
      GEO_CACHE.delete(oldestKey);
    }
  }

  GEO_CACHE.set(ip, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
};

const asNumberOrNull = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return null;
  }
  return numeric;
};

const readTextCandidate = (payload, keys = []) => {
  for (const key of keys) {
    const value = normalizeText(payload?.[key]);
    if (value) return value;
  }
  return "";
};

const normalizeGeoPayload = (payload) => {
  const timezoneRaw = payload?.timezone;
  const timezone =
    typeof timezoneRaw === "string"
      ? normalizeText(timezoneRaw)
      : normalizeText(timezoneRaw?.id || timezoneRaw?.name || "");

  const country = readTextCandidate(payload, ["country", "country_name"]);
  const countryCode = readTextCandidate(payload, ["country_code", "countryCode"]).toUpperCase();
  const region = readTextCandidate(payload, ["region", "region_name", "state_prov"]);
  const city = readTextCandidate(payload, ["city"]);
  const isp =
    readTextCandidate(payload, ["isp", "org"]) ||
    readTextCandidate(payload?.connection, ["isp", "org"]);
  const asn =
    readTextCandidate(payload, ["asn"]) ||
    readTextCandidate(payload?.connection, ["asn"]);
  const latitude =
    asNumberOrNull(payload?.latitude) ?? asNumberOrNull(payload?.lat) ?? asNumberOrNull(payload?.location?.lat);
  const longitude =
    asNumberOrNull(payload?.longitude) ??
    asNumberOrNull(payload?.lon) ??
    asNumberOrNull(payload?.location?.lng);

  const networkFingerprint = `${isp} ${asn}`.toLowerCase();
  const networkType = DATACENTER_NETWORK_PATTERN.test(networkFingerprint)
    ? "datacenter"
    : "residential_or_unknown";

  return {
    country: country.slice(0, 80),
    countryCode: countryCode.slice(0, 8),
    region: region.slice(0, 80),
    city: city.slice(0, 80),
    timezone: timezone.slice(0, 80),
    latitude: latitude === null ? null : clampNumber(latitude, -90, 90, 0),
    longitude: longitude === null ? null : clampNumber(longitude, -180, 180, 0),
    isp: isp.slice(0, 120),
    asn: asn.slice(0, 80),
    networkType,
  };
};

const resolveGeoByIp = async (ip, log) => {
  const geoConfig = buildGeoConfig();
  if (!geoConfig.enabled) {
    return { resolved: false, reason: "geoip_disabled" };
  }

  if (!ip) {
    return { resolved: false, reason: "ip_missing" };
  }

  if (isPrivateIp(ip)) {
    return { resolved: false, reason: "ip_private" };
  }

  const cached = getCachedGeo(ip);
  if (cached) {
    return cached;
  }

  const endpoint = geoConfig.urlTemplate.replace("{ip}", encodeURIComponent(ip));
  const abortController = new AbortController();
  const timeoutHandle = setTimeout(() => abortController.abort(), geoConfig.timeoutMs);

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: abortController.signal,
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok || !payload || payload?.success === false) {
      const failed = {
        resolved: false,
        reason: "geo_provider_failed",
      };
      setCachedGeo(ip, failed, geoConfig.cacheMaxEntries, geoConfig.cacheTtlMs);
      return failed;
    }

    const normalized = normalizeGeoPayload(payload);
    const resolved = Boolean(normalized.country || normalized.countryCode || normalized.city);
    const value = resolved
      ? {
          resolved: true,
          provider: endpoint.split("/")[2] || "geo-provider",
          ...normalized,
        }
      : {
          resolved: false,
          reason: "geo_provider_empty",
        };

    setCachedGeo(ip, value, geoConfig.cacheMaxEntries, geoConfig.cacheTtlMs);
    return value;
  } catch (caughtError) {
    if (log) {
      log(`GeoIP lookup failed: ${caughtError?.message || "unknown"}`);
    }

    return {
      resolved: false,
      reason: "geo_lookup_error",
    };
  } finally {
    clearTimeout(timeoutHandle);
  }
};

const buildBotAssessment = ({ userAgent, metadata, geo, path }) => {
  const reasons = [];
  let score = 0;

  const normalizedUserAgent = normalizeText(userAgent);
  const userAgentLower = normalizedUserAgent.toLowerCase();
  const clientSignals =
    metadata?.client && typeof metadata.client === "object" ? metadata.client : {};

  if (!normalizedUserAgent) {
    score += 30;
    reasons.push("missing_user_agent");
  }

  if (CRAWLER_USER_AGENT_PATTERN.test(userAgentLower)) {
    score += 90;
    reasons.push("known_crawler_user_agent");
  } else if (AUTOMATION_USER_AGENT_PATTERN.test(userAgentLower)) {
    score += 45;
    reasons.push("automation_user_agent");
  }

  if (clientSignals.webdriver === true) {
    score += 45;
    reasons.push("webdriver_enabled");
  }

  const languages = Array.isArray(clientSignals.languages)
    ? clientSignals.languages.filter((entry) => normalizeText(String(entry)))
    : [];

  if (languages.length === 0 && !normalizeText(clientSignals.language)) {
    score += 12;
    reasons.push("missing_languages");
  }

  const viewportWidth = Number(clientSignals?.viewport?.width || 0);
  const viewportHeight = Number(clientSignals?.viewport?.height || 0);
  if (viewportWidth <= 0 || viewportHeight <= 0) {
    score += 15;
    reasons.push("invalid_viewport");
  }

  const deviceType = normalizeText(clientSignals.deviceType).toLowerCase();
  const touchPoints = Number(clientSignals.touchPoints || 0);
  if (deviceType === "mobile" && touchPoints === 0) {
    score += 12;
    reasons.push("mobile_without_touch");
  }

  if (geo?.networkType === "datacenter") {
    score += 18;
    reasons.push("datacenter_network");
  }

  if (/\/wp-admin|\/xmlrpc|\/phpmyadmin/i.test(path)) {
    score += 35;
    reasons.push("suspicious_path");
  }

  const normalizedScore = clampNumber(score, 0, 100, 0);
  const classification =
    normalizedScore >= 80
      ? "likely_bot"
      : normalizedScore >= 45
        ? "suspicious"
        : "likely_human";

  return {
    score: normalizedScore,
    classification,
    isLikelyBot: classification !== "likely_human",
    reasonCodes: reasons.slice(0, 12),
    model: "heuristic-v1",
  };
};

const buildEnrichedMetadata = ({
  req,
  payload,
  ipInfo,
  geo,
  botAssessment,
  userAgent,
}) => ({
  ...payload.metadata,
  trackingVersion: "v2",
  server: {
    receivedAt: new Date().toISOString(),
    requestOrigin: getRequestOrigin(req).slice(0, 120),
    ipMasked: maskIp(ipInfo.ip),
    ipHash: hashIp(ipInfo.ip),
    ipSource: ipInfo.source,
    userAgent: normalizeText(userAgent).slice(0, 600),
  },
  geo: geo?.resolved
    ? {
        provider: normalizeText(geo.provider).slice(0, 80),
        country: normalizeText(geo.country).slice(0, 80),
        countryCode: normalizeText(geo.countryCode).slice(0, 8),
        region: normalizeText(geo.region).slice(0, 80),
        city: normalizeText(geo.city).slice(0, 80),
        timezone: normalizeText(geo.timezone).slice(0, 80),
        latitude: typeof geo.latitude === "number" ? geo.latitude : null,
        longitude: typeof geo.longitude === "number" ? geo.longitude : null,
        isp: normalizeText(geo.isp).slice(0, 120),
        asn: normalizeText(geo.asn).slice(0, 80),
        networkType: normalizeText(geo.networkType).slice(0, 40),
        resolved: true,
      }
    : {
        resolved: false,
        reason: normalizeText(geo?.reason || "").slice(0, 80),
      },
  bot: botAssessment,
});

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
    const userAgent = readHeader(req?.headers || {}, "user-agent");
    const ipInfo = getRequestIpInfo(req);
    const geo = await resolveGeoByIp(ipInfo.ip, log);
    const botAssessment = buildBotAssessment({
      userAgent,
      metadata: payload.metadata,
      geo,
      path: payload.path,
    });

    const enrichedPayload = {
      ...payload,
      metadata: buildEnrichedMetadata({
        req,
        payload,
        ipInfo,
        geo,
        botAssessment,
        userAgent,
      }),
    };

    const syncResult = await syncAnalyticsToCrm(enrichedPayload, log);
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
