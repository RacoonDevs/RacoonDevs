const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

const parseBoolean = (value, fallback = false) => {
  const normalized = normalizeText(value).toLowerCase();
  if (!normalized) {
    return fallback;
  }

  return ["true", "1", "yes", "on"].includes(normalized);
};

const toBudgetReference = (budgetCode) => {
  const budgetMap = {
    "5k-15k": 10000,
    "15k-30k": 22500,
    "30k-50k": 40000,
    "50k+": 75000,
  };

  return budgetMap[budgetCode] ?? null;
};

const ensureV1Endpoint = (endpoint) => {
  const clean = normalizeText(endpoint).replace(/\/$/, "");
  return clean.endsWith("/v1") ? clean : `${clean}/v1`;
};

const toCrmLeadPayload = (contactPayload) => {
  const projectType = contactPayload.projectTypeLabel || contactPayload.projectType || "Sin especificar";
  const budget = contactPayload.budgetLabel || contactPayload.budget || "Sin especificar";

  const messageParts = [
    `Proyecto: ${projectType}`,
    `Presupuesto: ${budget}`,
    "",
    "Mensaje:",
    contactPayload.message || "No especificado",
  ];

  return {
    name: normalizeText(contactPayload.name),
    email: normalizeText(contactPayload.email).toLowerCase(),
    phone: normalizeText(contactPayload.phone),
    company: "",
    source: "web",
    status: "new",
    message: messageParts.join("\n").slice(0, 5000),
    budget: toBudgetReference(contactPayload.budget),
    metadata: {
      externalSource: "racoondevs-contact",
      projectType: contactPayload.projectType || null,
      projectTypeLabel: contactPayload.projectTypeLabel || null,
      budgetCode: contactPayload.budget || null,
      budgetLabel: contactPayload.budgetLabel || null,
      submittedAt: contactPayload.submittedAt || new Date().toISOString(),
    },
  };
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

export const syncLeadToCrm = async (contactPayload, log) => {
  const enabled = parseBoolean(process.env.CRM_SYNC_ENABLED, true);
  if (!enabled) {
    return { synced: false, skipped: true, reason: "CRM_SYNC_ENABLED=false" };
  }

  const endpoint = normalizeText(process.env.CRM_SYNC_ENDPOINT);
  const projectId = normalizeText(process.env.CRM_SYNC_PROJECT_ID);
  const functionId = normalizeText(process.env.CRM_SYNC_FUNCTION_ID) || "create-lead";
  const apiKey = normalizeText(process.env.CRM_SYNC_API_KEY);
  const required = parseBoolean(process.env.CRM_SYNC_REQUIRED, true);

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
    async: false,
    path: "/contact-crm-sync",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(toCrmLeadPayload(contactPayload)),
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
    throw new Error(execution?.message || "CRM sync execution request failed.");
  }

  const { statusCode, payload } = parseExecutionBody(execution);
  if (statusCode >= 400 || payload?.success === false) {
    const detailMessage = normalizeText(payload?.error?.details?.[0]?.message);
    const errorMessage =
      payload?.error?.message || payload?.message || "CRM create-lead returned an error.";
    const normalized = `${errorMessage} ${detailMessage}`.toLowerCase();
    const looksLikeDuplicate =
      normalized.includes("already exists") ||
      normalized.includes("duplicate") ||
      normalized.includes("unique");

    if (looksLikeDuplicate) {
      if (log) {
        log("CRM sync detected duplicated lead. Continuing without hard failure.");
      }

      return {
        synced: true,
        duplicate: true,
        leadId: null,
      };
    }

    throw new Error(errorMessage);
  }

  const leadId = payload?.data?.leadId || null;
  if (log) {
    log(`CRM sync completed. leadId=${leadId || "unknown"}`);
  }

  return {
    synced: true,
    leadId,
  };
};
