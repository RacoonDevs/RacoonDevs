import {
  PROJECT_TYPE_VALUES,
  ESTILO_VISUAL_VALUES,
  TIMELINE_VALUES,
  BUDGET_VALUES,
  ALL_FUNCIONALIDADES,
  getProjectTypeLabel,
  getEstiloVisualLabel,
  getTimelineLabel,
  getBudgetLabel,
  getMarcaLabel,
  getContactoPreferidoLabel,
} from "../data/wizardData";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_FIELD_LENGTHS = {
  nombre: 100,
  email: 255,
  telefono: 20,
  problema: 500,
  usuarios: 300,
  funcionalidadesExtra: 500,
  referenciasVisuales: 500,
  comentariosExtra: 500,
};

const WIZARD_SUCCESS_MESSAGE =
  "Tu idea fue enviada exitosamente. Te contactaremos pronto.";

const WIZARD_ERROR_MESSAGE =
  "No se pudo enviar tu idea. Intenta de nuevo en unos minutos.";

const createWizardFormError = (message, details = []) => {
  const error = new Error(message);
  error.name = "WizardFormError";
  error.details = details;
  return error;
};

const normalizeTextField = (value) =>
  typeof value === "string" ? value.trim() : "";

const sanitizeWizardData = (data = {}) => ({
  tipoProyecto: normalizeTextField(data.tipoProyecto),
  problema: normalizeTextField(data.problema),
  usuarios: normalizeTextField(data.usuarios),
  funcionalidades: Array.isArray(data.funcionalidades)
    ? data.funcionalidades.filter((f) => ALL_FUNCIONALIDADES.has(f))
    : [],
  funcionalidadesExtra: normalizeTextField(data.funcionalidadesExtra),
  estiloVisual: normalizeTextField(data.estiloVisual),
  referenciasVisuales: normalizeTextField(data.referenciasVisuales),
  tieneMarca: normalizeTextField(data.tieneMarca),
  timeline: normalizeTextField(data.timeline),
  presupuesto: normalizeTextField(data.presupuesto),
  comentariosExtra: normalizeTextField(data.comentariosExtra),
  nombre: normalizeTextField(data.nombre),
  email: normalizeTextField(data.email).toLowerCase(),
  telefono: normalizeTextField(data.telefono),
  contactoPreferido: normalizeTextField(data.contactoPreferido),
});

const validateWizardData = ({ formData, recaptchaToken }) => {
  const sanitized = sanitizeWizardData(formData);
  const errors = [];

  if (!sanitized.tipoProyecto || !PROJECT_TYPE_VALUES.has(sanitized.tipoProyecto)) {
    errors.push("Selecciona un tipo de proyecto válido.");
  }

  if (!sanitized.problema || sanitized.problema.length < 10) {
    errors.push("Describe el problema o necesidad (mínimo 10 caracteres).");
  }
  if (sanitized.problema.length > MAX_FIELD_LENGTHS.problema) {
    errors.push(`El problema no debe superar ${MAX_FIELD_LENGTHS.problema} caracteres.`);
  }

  if (!sanitized.usuarios || sanitized.usuarios.length < 10) {
    errors.push("Describe quiénes usarán tu proyecto (mínimo 10 caracteres).");
  }
  if (sanitized.usuarios.length > MAX_FIELD_LENGTHS.usuarios) {
    errors.push(`Los usuarios no deben superar ${MAX_FIELD_LENGTHS.usuarios} caracteres.`);
  }

  if (
    sanitized.funcionalidades.length === 0 &&
    !sanitized.funcionalidadesExtra
  ) {
    errors.push("Selecciona al menos una funcionalidad o describe lo que necesitas.");
  }

  if (!sanitized.estiloVisual || !ESTILO_VISUAL_VALUES.has(sanitized.estiloVisual)) {
    errors.push("Selecciona un estilo visual válido.");
  }

  if (!sanitized.timeline || !TIMELINE_VALUES.has(sanitized.timeline)) {
    errors.push("Selecciona cuándo necesitas tu proyecto.");
  }

  if (sanitized.presupuesto && !BUDGET_VALUES.has(sanitized.presupuesto)) {
    errors.push("Selecciona un rango de presupuesto válido.");
  }

  if (!sanitized.nombre) {
    errors.push("El nombre es obligatorio.");
  }
  if (sanitized.nombre.length > MAX_FIELD_LENGTHS.nombre) {
    errors.push(`El nombre no debe superar ${MAX_FIELD_LENGTHS.nombre} caracteres.`);
  }

  if (!sanitized.email) {
    errors.push("El email es obligatorio.");
  } else if (!EMAIL_PATTERN.test(sanitized.email)) {
    errors.push("El formato del email no es válido.");
  }
  if (sanitized.email.length > MAX_FIELD_LENGTHS.email) {
    errors.push(`El email no debe superar ${MAX_FIELD_LENGTHS.email} caracteres.`);
  }

  if (sanitized.telefono && sanitized.telefono.length > MAX_FIELD_LENGTHS.telefono) {
    errors.push(`El teléfono no debe superar ${MAX_FIELD_LENGTHS.telefono} caracteres.`);
  }

  if (!normalizeTextField(recaptchaToken)) {
    errors.push("No se pudo validar reCAPTCHA.");
  }

  return { sanitizedData: sanitized, errors };
};

const parseJsonSafely = (value) => {
  if (typeof value !== "string") return value ?? null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const getFunctionResponseBody = (executionData) => {
  const parsedBody = parseJsonSafely(executionData?.responseBody);
  if (parsedBody) return parsedBody;
  if (typeof executionData?.responseBody === "string") {
    return { message: executionData.responseBody };
  }
  return null;
};

const getMissingAppwriteEnvVars = () => {
  const requiredVars = [
    "VITE_APPWRITE_ENDPOINT",
    "VITE_APPWRITE_PROJECT_ID",
    "VITE_APPWRITE_WIZARD_FUNCTION_ID",
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
    import.meta.env.VITE_APPWRITE_WIZARD_FUNCTION_ID,
  );
  return `${endpoint}/functions/${functionId}/executions`;
};

const buildFunctionPayload = ({ formData, recaptchaToken, presupuestoLabel }) => ({
  ...formData,
  tipoProyectoLabel: getProjectTypeLabel(formData.tipoProyecto),
  estiloVisualLabel: getEstiloVisualLabel(formData.estiloVisual),
  timelineLabel: getTimelineLabel(formData.timeline),
  presupuestoLabel: presupuestoLabel || (formData.presupuesto
    ? getBudgetLabel(formData.presupuesto)
    : null),
  tieneMarcaLabel: formData.tieneMarca
    ? getMarcaLabel(formData.tieneMarca)
    : null,
  contactoPreferidoLabel: formData.contactoPreferido
    ? getContactoPreferidoLabel(formData.contactoPreferido)
    : null,
  recaptchaToken,
  source: "racoondevs-wizard",
  submittedAt: new Date().toISOString(),
});

export const submitWizardForm = async ({ formData, recaptchaToken, presupuestoLabel }) => {
  const { sanitizedData, errors } = validateWizardData({
    formData,
    recaptchaToken,
  });

  if (errors.length > 0) {
    throw createWizardFormError("Formulario inválido.", errors);
  }

  const missingEnvVars = getMissingAppwriteEnvVars();
  if (missingEnvVars.length > 0) {
    throw createWizardFormError(
      "Configuración incompleta de Appwrite en frontend.",
      missingEnvVars,
    );
  }

  const requestBody = {
    async: false,
    path: "/wizard",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      buildFunctionPayload({
        formData: sanitizedData,
        recaptchaToken: normalizeTextField(recaptchaToken),
        presupuestoLabel,
      }),
    ),
  };

  let response;

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
    throw createWizardFormError(WIZARD_ERROR_MESSAGE);
  }

  const executionData = await response
    .json()
    .catch(() => ({ message: WIZARD_ERROR_MESSAGE }));

  if (!response.ok) {
    throw createWizardFormError(
      executionData?.message || executionData?.type || WIZARD_ERROR_MESSAGE,
    );
  }

  const responseBody = getFunctionResponseBody(executionData);
  const statusCode = executionData?.responseStatusCode;
  const details = Array.isArray(responseBody?.details)
    ? responseBody.details
    : [];

  if (typeof statusCode === "number" && statusCode >= 400) {
    throw createWizardFormError(
      responseBody?.message || WIZARD_ERROR_MESSAGE,
      details,
    );
  }

  return {
    message: responseBody?.message || WIZARD_SUCCESS_MESSAGE,
    details,
    executionId: executionData?.$id ?? null,
  };
};
