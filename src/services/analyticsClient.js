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

const clampNumber = (value, min, max, fallback = 0) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  if (numeric < min) return min;
  if (numeric > max) return max;
  return numeric;
};

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

const getDeviceType = () => {
  if (typeof window === "undefined") {
    return "unknown";
  }

  const viewportWidth = clampNumber(window.innerWidth, 0, 12000, 0);
  if (viewportWidth > 0 && viewportWidth < 768) return "mobile";
  if (viewportWidth < 1024) return "tablet";
  return "desktop";
};

const collectClientSignals = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const nav = window.navigator || {};
  const screen = window.screen || {};
  const language = normalizeText(nav.language).slice(0, 24);
  const languages = Array.isArray(nav.languages)
    ? nav.languages
        .map((entry) => normalizeText(entry).slice(0, 24))
        .filter(Boolean)
        .slice(0, 5)
    : [];

  return {
    userAgent: normalizeText(nav.userAgent).slice(0, 600),
    language,
    languages,
    platform: normalizeText(nav.platform).slice(0, 80),
    vendor: normalizeText(nav.vendor).slice(0, 80),
    timezone: normalizeText(
      Intl.DateTimeFormat?.().resolvedOptions?.().timeZone || "",
    ).slice(0, 80),
    webdriver: Boolean(nav.webdriver),
    doNotTrack: normalizeText(nav.doNotTrack || window.doNotTrack).slice(0, 20),
    cookieEnabled: Boolean(nav.cookieEnabled),
    hardwareConcurrency: clampNumber(nav.hardwareConcurrency, 0, 64, 0),
    deviceMemory: clampNumber(nav.deviceMemory, 0, 64, 0),
    touchPoints: clampNumber(nav.maxTouchPoints, 0, 20, 0),
    viewport: {
      width: clampNumber(window.innerWidth, 0, 12000, 0),
      height: clampNumber(window.innerHeight, 0, 12000, 0),
    },
    screen: {
      width: clampNumber(screen.width, 0, 12000, 0),
      height: clampNumber(screen.height, 0, 12000, 0),
      colorDepth: clampNumber(screen.colorDepth, 0, 64, 0),
      pixelRatio: clampNumber(window.devicePixelRatio, 0, 8, 1),
    },
    deviceType: getDeviceType(),
  };
};

const sanitizeMetadataObject = (input) => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {};
  }

  const entries = Object.entries(input).slice(0, 20);
  const output = {};

  entries.forEach(([key, value]) => {
    const safeKey = normalizeText(key).slice(0, 80);
    if (!safeKey) return;

    if (typeof value === "string") {
      output[safeKey] = value.slice(0, 400);
      return;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      output[safeKey] = value;
      return;
    }

    if (typeof value === "boolean") {
      output[safeKey] = value;
      return;
    }

    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = Object.fromEntries(
        Object.entries(value)
          .slice(0, 8)
          .map(([nestedKey, nestedValue]) => [
            normalizeText(nestedKey).slice(0, 40),
            typeof nestedValue === "string"
              ? nestedValue.slice(0, 120)
              : typeof nestedValue === "number" && Number.isFinite(nestedValue)
                ? nestedValue
                : typeof nestedValue === "boolean"
                  ? nestedValue
                  : null,
          ])
          .filter(([nestedKey, nestedValue]) => Boolean(nestedKey) && nestedValue !== null),
      );

      output[safeKey] = nested;
      return;
    }
  });

  return output;
};

const buildBaseMetadata = () => {
  const locationPath =
    typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/";

  return {
    source: "web",
    trackingVersion: "v2",
    page: {
      path: locationPath.slice(0, 512),
      title:
        typeof document !== "undefined"
          ? normalizeText(document.title).slice(0, 160)
          : "",
    },
    client: collectClientSignals(),
  };
};

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
    metadata: {
      ...buildBaseMetadata(),
      event: sanitizeMetadataObject(input.metadata),
    },
  };

  void postExecution({ payload }).catch(() => {});
};
