const STORAGE_KEYS = {
  visitorId: "racoon_visitor_id",
  sessionId: "racoon_session_id",
};

const EVENT_TYPES = new Set([
  "page_view",
  "section_view",
  "cta_click",
  "form_submit",
  "form_success",
  "form_error",
]);

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

const parseBoolean = (value, fallback = true) => {
  const normalized = normalizeText(value).toLowerCase();
  if (!normalized) {
    return fallback;
  }

  return ["true", "1", "yes", "on"].includes(normalized);
};

const createRandomId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getOrCreateStorageId = (storageType, key) => {
  if (typeof window === "undefined") {
    return "";
  }

  const storage = storageType === "session" ? window.sessionStorage : window.localStorage;

  try {
    let value = normalizeText(storage.getItem(key));
    if (!value) {
      value = createRandomId();
      storage.setItem(key, value);
    }
    return value;
  } catch {
    return "";
  }
};

const getAnalyticsConfig = () => {
  const appwriteEndpoint = normalizeText(import.meta.env.VITE_APPWRITE_ENDPOINT).replace(/\/$/, "");
  const endpointRaw = appwriteEndpoint;
  const endpoint = endpointRaw.endsWith("/v1") ? endpointRaw : `${endpointRaw}/v1`;

  return {
    enabled: parseBoolean(import.meta.env.VITE_ANALYTICS_ENABLED, true),
    endpoint,
    projectId: normalizeText(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    functionId:
      normalizeText(import.meta.env.VITE_APPWRITE_ANALYTICS_FUNCTION_ID) || "analytics",
    site: normalizeText(import.meta.env.VITE_ANALYTICS_SITE_ID) || "racoondevs.com",
  };
};

const buildExecutionEndpoint = ({ endpoint, functionId }) =>
  `${endpoint}/functions/${functionId}/executions`;

const shouldTrack = () => {
  const config = getAnalyticsConfig();
  return (
    config.enabled &&
    Boolean(config.endpoint) &&
    Boolean(config.projectId) &&
    Boolean(config.functionId)
  );
};

const postExecution = async ({ payload }) => {
  const config = getAnalyticsConfig();
  const executionEndpoint = buildExecutionEndpoint(config);

  const requestBody = {
    async: true,
    path: "/analytics-track",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  await fetch(executionEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Appwrite-Project": config.projectId,
    },
    body: JSON.stringify(requestBody),
    keepalive: true,
  });
};

export const trackAnalyticsEvent = (eventType, input = {}) => {
  if (!EVENT_TYPES.has(eventType) || !shouldTrack()) {
    return;
  }

  const config = getAnalyticsConfig();
  const path = normalizeText(input.path) || window.location.pathname || "/";
  const payload = {
    site: config.site,
    eventType,
    path,
    visitorId: getOrCreateStorageId("local", STORAGE_KEYS.visitorId),
    sessionId: getOrCreateStorageId("session", STORAGE_KEYS.sessionId),
    section: normalizeText(input.section),
    elementId: normalizeText(input.elementId),
    label: normalizeText(input.label),
    referrer: normalizeText(document.referrer),
    occurredAt: new Date().toISOString(),
    metadata: input.metadata && typeof input.metadata === "object" ? input.metadata : {},
  };

  void postExecution({ payload }).catch(() => {});
};
