import { trackAnalyticsEvent } from "./analyticsClient";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_FIELD_LENGTHS = {
  name: 100,
  email: 255,
  phone: 20,
  message: 2000,
};

const PROJECT_TYPE_OPTIONS = new Set([
  "web",
  "mobile",
  "ecommerce",
  "custom",
  "redesign",
  "other",
]);

const BUDGET_OPTIONS = new Set([
  "5k-15k",
  "15k-30k",
  "30k-50k",
  "50k+",
  "discuss",
]);

const PROJECT_TYPE_LABELS = {
  web: "Desarrollo Web",
  mobile: "App Mobile",
  ecommerce: "E-commerce",
  custom: "Desarrollo Custom",
  redesign: "Rediseno",
  other: "Otro",
};

const BUDGET_LABELS = {
  "5k-15k": "$5,000 - $15,000 MXN",
  "15k-30k": "$15,000 - $30,000 MXN",
  "30k-50k": "$30,000 - $50,000 MXN",
  "50k+": "$50,000+ MXN",
  discuss: "Prefiero discutirlo",
};

const CONTACT_SUCCESS_MESSAGE =
  "Mensaje enviado exitosamente. Te contactaremos pronto.";

const CONTACT_ERROR_MESSAGE =
  "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.";

const createContactFormError = (message, details = []) => {
  const error = new Error(message);
  error.name = "ContactFormError";
  error.details = details;
  return error;
};

const normalizeTextField = (value) =>
  typeof value === "string" ? value.trim() : "";

const normalizeOptionField = (value, allowedOptions) => {
  const normalized = normalizeTextField(value);
  return allowedOptions.has(normalized) ? normalized : "";
};

const sanitizeFormData = (formData = {}) => {
  const name = normalizeTextField(formData.name);
  const email = normalizeTextField(formData.email).toLowerCase();
  const phone = normalizeTextField(formData.phone);
  const projectType = normalizeOptionField(
    formData.projectType,
    PROJECT_TYPE_OPTIONS,
  );
  const budget = normalizeOptionField(formData.budget, BUDGET_OPTIONS);
  const message = normalizeTextField(formData.message);

  return { name, email, phone, projectType, budget, message };
};

const validateFormData = ({ formData, recaptchaToken }) => {
  const sanitizedData = sanitizeFormData(formData);
  const errors = [];

  if (!sanitizedData.name) {
    errors.push("El nombre es obligatorio.");
  }

  if (!sanitizedData.email) {
    errors.push("El email es obligatorio.");
  } else if (!EMAIL_PATTERN.test(sanitizedData.email)) {
    errors.push("El formato del email no es valido.");
  }

  if (!sanitizedData.message) {
    errors.push("El mensaje es obligatorio.");
  }

  if (sanitizedData.name.length > MAX_FIELD_LENGTHS.name) {
    errors.push("El nombre no debe superar 100 caracteres.");
  }

  if (sanitizedData.email.length > MAX_FIELD_LENGTHS.email) {
    errors.push("El email no debe superar 255 caracteres.");
  }

  if (
    sanitizedData.phone &&
    sanitizedData.phone.length > MAX_FIELD_LENGTHS.phone
  ) {
    errors.push("El telefono no debe superar 20 caracteres.");
  }

  if (sanitizedData.message.length > MAX_FIELD_LENGTHS.message) {
    errors.push("El mensaje no debe superar 2000 caracteres.");
  }

  if (!normalizeTextField(recaptchaToken)) {
    errors.push("No se pudo validar reCAPTCHA.");
  }

  return { sanitizedData, errors };
};

const parseJsonSafely = (value) => {
  if (typeof value !== "string") {
    return value ?? null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const getFunctionResponseBody = (executionData) => {
  const parsedBody = parseJsonSafely(executionData?.responseBody);

  if (parsedBody) {
    return parsedBody;
  }

  if (typeof executionData?.responseBody === "string") {
    return { message: executionData.responseBody };
  }

  return null;
};

const getMissingAppwriteEnvVars = () => {
  const requiredVars = [
    "VITE_APPWRITE_ENDPOINT",
    "VITE_APPWRITE_PROJECT_ID",
    "VITE_APPWRITE_CONTACT_FUNCTION_ID",
  ];

  return requiredVars.filter(
    (name) => !normalizeTextField(import.meta.env[name]),
  );
};

const getExecutionEndpoint = () => {
  const rawEndpoint = normalizeTextField(
    import.meta.env.VITE_APPWRITE_ENDPOINT,
  ).replace(/\/$/, "");
  const endpoint = rawEndpoint.endsWith("/v1")
    ? rawEndpoint
    : `${rawEndpoint}/v1`;
  const functionId = normalizeTextField(
    import.meta.env.VITE_APPWRITE_CONTACT_FUNCTION_ID,
  );

  return `${endpoint}/functions/${functionId}/executions`;
};

const buildFunctionPayload = ({ formData, recaptchaToken }) => {
  const payload = {
    ...formData,
    projectType: formData.projectType || null,
    budget: formData.budget || null,
    projectTypeLabel: PROJECT_TYPE_LABELS[formData.projectType] || null,
    budgetLabel: BUDGET_LABELS[formData.budget] || null,
    recaptchaToken,
    source: "racoondevs-landing",
    submittedAt: new Date().toISOString(),
  };

  return payload;
};

export const submitContactForm = async ({ formData, recaptchaToken }) => {
  const { sanitizedData, errors } = validateFormData({
    formData,
    recaptchaToken,
  });

  if (errors.length > 0) {
    throw createContactFormError("Formulario invalido.", errors);
  }

  const missingEnvVars = getMissingAppwriteEnvVars();
  if (missingEnvVars.length > 0) {
    throw createContactFormError(
      "Configuracion incompleta de Appwrite en frontend.",
      missingEnvVars,
    );
  }

  const requestBody = {
    async: false,
    path: "/contact",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      buildFunctionPayload({
        formData: sanitizedData,
        recaptchaToken: normalizeTextField(recaptchaToken),
      }),
    ),
  };

  let response;
  trackAnalyticsEvent("form_submit", {
    path: "/contacto",
    section: "contacto",
    elementId: "contact-form",
    label: "contact form submit",
  });

  try {
    response = await fetch(getExecutionEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Project": import.meta.env.VITE_APPWRITE_PROJECT_ID,
      },
      body: JSON.stringify(requestBody),
    });
  } catch {
    trackAnalyticsEvent("form_error", {
      path: "/contacto",
      section: "contacto",
      elementId: "contact-form",
      label: "network error",
    });
    throw createContactFormError(CONTACT_ERROR_MESSAGE);
  }

  const executionData = await response
    .json()
    .catch(() => ({ message: CONTACT_ERROR_MESSAGE }));

  if (!response.ok) {
    trackAnalyticsEvent("form_error", {
      path: "/contacto",
      section: "contacto",
      elementId: "contact-form",
      label: "execution request failed",
      metadata: { status: response.status || 0 },
    });
    throw createContactFormError(
      executionData?.message || executionData?.type || CONTACT_ERROR_MESSAGE,
    );
  }

  const responseBody = getFunctionResponseBody(executionData);
  const statusCode = executionData?.responseStatusCode;
  const details = Array.isArray(responseBody?.details)
    ? responseBody.details
    : [];

  if (typeof statusCode === "number" && statusCode >= 400) {
    trackAnalyticsEvent("form_error", {
      path: "/contacto",
      section: "contacto",
      elementId: "contact-form",
      label: "function response error",
      metadata: { statusCode },
    });
    throw createContactFormError(
      responseBody?.message || CONTACT_ERROR_MESSAGE,
      details,
    );
  }

  trackAnalyticsEvent("form_success", {
    path: "/contacto",
    section: "contacto",
    elementId: "contact-form",
    label: "contact form success",
  });

  return {
    message: responseBody?.message || CONTACT_SUCCESS_MESSAGE,
    details,
    executionId: executionData?.$id ?? null,
  };
};
