const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

const parseBoolean = (value, fallback = false) => {
  const normalized = normalizeText(value).toLowerCase();
  if (!normalized) {
    return fallback;
  }

  return ["true", "1", "yes", "on"].includes(normalized);
};

const ensureV1Endpoint = (endpoint) => {
  const clean = normalizeText(endpoint).replace(/\/$/, "");
  return clean.endsWith("/v1") ? clean : `${clean}/v1`;
};

const parseExecutionBody = (execution) => {
  if (!execution || typeof execution !== "object") {
    return { statusCode: 500, payload: null };
  }

  const statusCode = Number(execution.responseStatusCode || 0);
  const responseBody = normalizeText(execution.responseBody);

  if (!responseBody) {
    return { statusCode, payload: null };
  }

  try {
    return { statusCode, payload: JSON.parse(responseBody) };
  } catch {
    return { statusCode, payload: null };
  }
};

export const syncAnalyticsToCrm = async (analyticsPayload, log) => {
  const enabled = parseBoolean(process.env.CRM_SYNC_ENABLED, true);
  if (!enabled) {
    return { synced: false, skipped: true, reason: "CRM_SYNC_ENABLED=false" };
  }

  const endpoint = normalizeText(process.env.CRM_SYNC_ENDPOINT);
  const projectId = normalizeText(process.env.CRM_SYNC_PROJECT_ID);
  const functionId =
    normalizeText(process.env.CRM_SYNC_FUNCTION_ID) || "track-analytics-event";
  const apiKey = normalizeText(process.env.CRM_SYNC_API_KEY);
  const required = parseBoolean(process.env.CRM_SYNC_REQUIRED, false);

  if (!endpoint || !projectId || !functionId) {
    const reason =
      "CRM sync variables are missing (CRM_SYNC_ENDPOINT / CRM_SYNC_PROJECT_ID / CRM_SYNC_FUNCTION_ID).";

    if (required) {
      throw new Error(reason);
    }

    return { synced: false, skipped: true, reason };
  }

  const executionEndpoint = `${ensureV1Endpoint(endpoint)}/functions/${functionId}/executions`;
  const body = {
    async: true,
    path: "/analytics-crm-sync",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(analyticsPayload),
  };

  const headers = {
    "Content-Type": "application/json",
    "X-Appwrite-Project": projectId,
  };

  if (apiKey) {
    headers["X-Appwrite-Key"] = apiKey;
  }

  const response = await fetch(executionEndpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const execution = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(execution?.message || "CRM analytics sync execution failed.");
  }

  const { statusCode, payload } = parseExecutionBody(execution);
  if (statusCode >= 400 || payload?.success === false) {
    const errorMessage =
      payload?.error?.message || payload?.message || "CRM analytics function returned an error.";
    throw new Error(errorMessage);
  }

  if (log) {
    log("CRM analytics sync completed.");
  }

  return { synced: true };
};
