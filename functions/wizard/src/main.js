import nodemailer from "nodemailer";

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

const ALLOWED_TIPO_PROYECTO = new Set([
  "pagina_web",
  "tienda_online",
  "app_movil",
  "sistema_interno",
  "rediseno",
  "no_se",
]);

const ALLOWED_ESTILO_VISUAL = new Set([
  "moderno",
  "corporativo",
  "creativo",
  "elegante",
  "no_se",
]);

const ALLOWED_TIMELINE = new Set(["urgente", "pronto", "normal", "flexible"]);

const ALLOWED_PRESUPUESTO = new Set([
  "5k-15k",
  "15k-30k",
  "30k-50k",
  "50k-100k",
  "100k+",
  "discuss",
]);

const TIPO_PROYECTO_LABELS = {
  pagina_web: "Página o sitio web",
  tienda_online: "Tienda en línea",
  app_movil: "App para celular",
  sistema_interno: "Sistema para mi negocio",
  rediseno: "Mejorar algo existente",
  no_se: "Aún no está seguro",
};

const ESTILO_VISUAL_LABELS = {
  moderno: "Moderno y minimalista",
  corporativo: "Profesional y corporativo",
  creativo: "Creativo y llamativo",
  elegante: "Elegante y premium",
  no_se: "Sin preferencia",
};

const TIMELINE_LABELS = {
  urgente: "Lo antes posible (1-2 semanas)",
  pronto: "En el próximo mes",
  normal: "En 2-3 meses",
  flexible: "Sin prisa",
};

const PRESUPUESTO_LABELS = {
  "5k-15k": "$5,000 - $15,000 MXN",
  "15k-30k": "$15,000 - $30,000 MXN",
  "30k-50k": "$30,000 - $50,000 MXN",
  "50k-100k": "$50,000 - $100,000 MXN",
  "100k+": "Más de $100,000 MXN",
  discuss: "Prefiere platicarlo",
};

const MARCA_LABELS = {
  si: "Sí, ya tiene logo y colores",
  no: "No, necesita ayuda",
  mejorar: "Tiene algo pero quiere mejorarlo",
};

const CONTACTO_LABELS = {
  whatsapp: "WhatsApp",
  email: "Email",
  llamada: "Llamada telefónica",
};

const normalizeTextField = (value) =>
  typeof value === "string" ? value.trim() : "";

const toSafeLog = (value) => {
  if (!value) return "";
  if (value.length <= 3) return "***";
  return `${value.slice(0, 3)}***`;
};

const parseBooleanEnv = (value, defaultValue = false) => {
  const normalized = normalizeTextField(value).toLowerCase();
  if (!normalized) return defaultValue;
  return ["true", "1", "yes", "on"].includes(normalized);
};

const parseAllowedOrigins = () => {
  const raw = normalizeTextField(process.env.CONTACT_ALLOWED_ORIGINS);
  if (!raw) return [];
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
};

const getRequestOrigin = (req) => {
  const headers = req?.headers || {};
  const origin =
    headers.origin ||
    headers.Origin ||
    headers["x-forwarded-host"] ||
    headers["X-Forwarded-Host"] ||
    "";
  return normalizeTextField(origin);
};

const getCorsOrigin = (req) => {
  const allowedOrigins = parseAllowedOrigins();
  const requestOrigin = getRequestOrigin(req);
  if (allowedOrigins.length === 0) return requestOrigin || "*";
  if (requestOrigin && allowedOrigins.includes(requestOrigin))
    return requestOrigin;
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
    if (typeof candidate === "object") return candidate;
    const parsed = parseJsonSafely(candidate);
    if (parsed && typeof parsed === "object") return parsed;
  }

  return {};
};

const sanitizePayload = (payload = {}) => ({
  tipoProyecto: normalizeTextField(payload.tipoProyecto),
  problema: normalizeTextField(payload.problema),
  usuarios: normalizeTextField(payload.usuarios),
  funcionalidades: Array.isArray(payload.funcionalidades)
    ? payload.funcionalidades
        .map((f) => normalizeTextField(f))
        .filter(Boolean)
    : [],
  funcionalidadesExtra: normalizeTextField(payload.funcionalidadesExtra),
  estiloVisual: normalizeTextField(payload.estiloVisual),
  referenciasVisuales: normalizeTextField(payload.referenciasVisuales),
  tieneMarca: normalizeTextField(payload.tieneMarca),
  timeline: normalizeTextField(payload.timeline),
  presupuesto: normalizeTextField(payload.presupuesto),
  comentariosExtra: normalizeTextField(payload.comentariosExtra),
  nombre: normalizeTextField(payload.nombre),
  email: normalizeTextField(payload.email).toLowerCase(),
  telefono: normalizeTextField(payload.telefono),
  contactoPreferido: normalizeTextField(payload.contactoPreferido),
  recaptchaToken: normalizeTextField(payload.recaptchaToken),
  source: normalizeTextField(payload.source) || "unknown",
  submittedAt: normalizeTextField(payload.submittedAt),
});

const validatePayload = (payload) => {
  const errors = [];

  if (!payload.tipoProyecto || !ALLOWED_TIPO_PROYECTO.has(payload.tipoProyecto)) {
    errors.push("Tipo de proyecto no válido.");
  }

  if (!payload.problema) {
    errors.push("La descripción del problema es obligatoria.");
  } else if (payload.problema.length > MAX_FIELD_LENGTHS.problema) {
    errors.push("El problema excede el límite de caracteres.");
  }

  if (!payload.usuarios) {
    errors.push("La descripción de usuarios es obligatoria.");
  } else if (payload.usuarios.length > MAX_FIELD_LENGTHS.usuarios) {
    errors.push("Los usuarios exceden el límite de caracteres.");
  }

  if (!payload.estiloVisual || !ALLOWED_ESTILO_VISUAL.has(payload.estiloVisual)) {
    errors.push("Estilo visual no válido.");
  }

  if (!payload.timeline || !ALLOWED_TIMELINE.has(payload.timeline)) {
    errors.push("Timeline no válido.");
  }

  if (payload.presupuesto && !ALLOWED_PRESUPUESTO.has(payload.presupuesto)) {
    errors.push("Presupuesto no válido.");
  }

  if (!payload.nombre) {
    errors.push("El nombre es obligatorio.");
  } else if (payload.nombre.length > MAX_FIELD_LENGTHS.nombre) {
    errors.push("El nombre excede el límite de caracteres.");
  }

  if (!payload.email) {
    errors.push("El email es obligatorio.");
  } else if (!EMAIL_PATTERN.test(payload.email)) {
    errors.push("El email no tiene un formato válido.");
  } else if (payload.email.length > MAX_FIELD_LENGTHS.email) {
    errors.push("El email excede el límite de caracteres.");
  }

  if (payload.telefono && payload.telefono.length > MAX_FIELD_LENGTHS.telefono) {
    errors.push("El teléfono excede el límite de caracteres.");
  }

  if (!payload.recaptchaToken) {
    errors.push("No se recibió token de reCAPTCHA.");
  }

  return errors;
};

const verifyRecaptcha = async (token) => {
  const secretKey = normalizeTextField(process.env.RECAPTCHA_SECRET_KEY);
  if (!secretKey) {
    throw new Error("Falta RECAPTCHA_SECRET_KEY en la configuración.");
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    },
  );

  const result = await response.json();
  return Boolean(result?.success);
};

const createTransporter = () => {
  const emailService = normalizeTextField(
    process.env.EMAIL_SERVICE,
  ).toLowerCase();

  if (emailService === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: normalizeTextField(process.env.EMAIL_USER),
        pass: normalizeTextField(process.env.EMAIL_PASS),
      },
    });
  }

  if (emailService === "sendgrid") {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey",
        pass: normalizeTextField(process.env.SENDGRID_API_KEY),
      },
    });
  }

  if (emailService === "smtp" || !emailService) {
    return nodemailer.createTransport({
      host: normalizeTextField(process.env.SMTP_HOST),
      port: Number.parseInt(process.env.SMTP_PORT || "587", 10),
      secure: parseBooleanEnv(process.env.SMTP_SECURE, false),
      auth: {
        user: normalizeTextField(process.env.EMAIL_USER),
        pass: normalizeTextField(process.env.EMAIL_PASS),
      },
    });
  }

  if (emailService === "console") {
    return nodemailer.createTransport({
      streamTransport: true,
      newline: "unix",
      buffer: true,
    });
  }

  throw new Error(
    "EMAIL_SERVICE no válido. Usa smtp, gmail, sendgrid o console.",
  );
};

const getLabel = (map, value, fallback = "Sin especificar") =>
  map[value] || value || fallback;

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const buildTeamEmail = (payload) => {
  const emailFrom =
    normalizeTextField(process.env.EMAIL_FROM) || "noreply@racoondevs.com";
  const emailTo =
    normalizeTextField(process.env.EMAIL_TO) || "admin@racoondevs.com";

  const funcionalidadesList =
    payload.funcionalidades.length > 0
      ? payload.funcionalidades
          .map((f) => `<li>${escapeHtml(f)}</li>`)
          .join("")
      : "<li>Ninguna seleccionada</li>";

  return {
    from: emailFrom,
    to: emailTo,
    subject: `Nueva idea de proyecto: ${getLabel(TIPO_PROYECTO_LABELS, payload.tipoProyecto)} - ${payload.nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">Nueva idea de proyecto desde el Wizard</h2>

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">Datos de contacto</h3>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Teléfono:</strong> ${payload.telefono ? escapeHtml(payload.telefono) : "No proporcionado"}</p>
        <p><strong>Contacto preferido:</strong> ${getLabel(CONTACTO_LABELS, payload.contactoPreferido)}</p>

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">Tipo de proyecto</h3>
        <p>${getLabel(TIPO_PROYECTO_LABELS, payload.tipoProyecto)}</p>

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">La idea</h3>
        <p><strong>Problema o necesidad:</strong></p>
        <p>${escapeHtml(payload.problema).replace(/\n/g, "<br>")}</p>
        <p><strong>Usuarios objetivo:</strong></p>
        <p>${escapeHtml(payload.usuarios).replace(/\n/g, "<br>")}</p>

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">Funcionalidades</h3>
        <ul>${funcionalidadesList}</ul>
        ${payload.funcionalidadesExtra ? `<p><strong>Extras:</strong> ${escapeHtml(payload.funcionalidadesExtra).replace(/\n/g, "<br>")}</p>` : ""}

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">Estilo visual</h3>
        <p><strong>Estilo:</strong> ${getLabel(ESTILO_VISUAL_LABELS, payload.estiloVisual)}</p>
        ${payload.referenciasVisuales ? `<p><strong>Referencias:</strong> ${escapeHtml(payload.referenciasVisuales).replace(/\n/g, "<br>")}</p>` : ""}
        <p><strong>Marca:</strong> ${getLabel(MARCA_LABELS, payload.tieneMarca)}</p>

        <h3 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 8px;">Tiempo y presupuesto</h3>
        <p><strong>Timeline:</strong> ${getLabel(TIMELINE_LABELS, payload.timeline)}</p>
        <p><strong>Presupuesto:</strong> ${getLabel(PRESUPUESTO_LABELS, payload.presupuesto)}</p>
        ${payload.comentariosExtra ? `<p><strong>Comentarios:</strong> ${escapeHtml(payload.comentariosExtra).replace(/\n/g, "<br>")}</p>` : ""}

        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;"><strong>Fuente:</strong> ${escapeHtml(payload.source)}</p>
        <p style="color: #999; font-size: 12px;"><strong>Enviado:</strong> ${payload.submittedAt || "N/A"}</p>
      </div>
    `,
  };
};

const buildClientEmail = (payload) => {
  const emailFrom =
    normalizeTextField(process.env.EMAIL_FROM) || "noreply@racoondevs.com";

  return {
    from: emailFrom,
    to: payload.email,
    subject: "Recibimos tu idea de proyecto - RacoonDevs",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">Recibimos tu idea</h2>
        <p>Hola ${escapeHtml(payload.nombre)},</p>
        <p>Gracias por compartir tu idea con nosotros. Recibimos tu propuesta sobre <strong>${getLabel(TIPO_PROYECTO_LABELS, payload.tipoProyecto)}</strong> y nuestro equipo la revisará pronto.</p>
        <p>Te contactaremos en menos de 24 horas para platicar sobre tu proyecto.</p>
        <br>
        <p>Saludos,<br><strong>Equipo RacoonDevs</strong></p>
      </div>
    `,
  };
};

const sendWizardEmails = async (payload, log) => {
  const transporter = createTransporter();
  const teamEmail = buildTeamEmail(payload);
  const clientEmail = buildClientEmail(payload);
  const shouldSendClientEmail = parseBooleanEnv(
    process.env.WIZARD_SEND_CLIENT_CONFIRMATION,
    true,
  );

  if (
    normalizeTextField(process.env.EMAIL_SERVICE).toLowerCase() === "console"
  ) {
    log("EMAIL_SERVICE=console: simulando envío");
    log(`Destino equipo: ${teamEmail.to}`);
    log(`Destino cliente: ${clientEmail.to}`);
    return true;
  }

  const promises = [transporter.sendMail(teamEmail)];
  if (shouldSendClientEmail) {
    promises.push(transporter.sendMail(clientEmail));
  }

  const results = await Promise.allSettled(promises);
  return results[0].status === "fulfilled";
};

const successResponse = (res, body, headers = {}) =>
  res.json({ success: true, ...body }, 200, headers);

const errorResponse = (res, message, details = [], status = 400, headers = {}) =>
  res.json({ success: false, message, details }, status, headers);

export default async ({ req, res, log, error }) => {
  const requestMethod = (req?.method || "GET").toUpperCase();
  const corsHeaders = getCorsHeaders(req);

  log(`Método: ${requestMethod}`);

  if (requestMethod === "OPTIONS") {
    return res.empty(204, corsHeaders);
  }

  if (requestMethod !== "POST") {
    return errorResponse(res, "Método no permitido.", [], 405, corsHeaders);
  }

  const payload = sanitizePayload(getRequestBody(req));
  const payloadErrors = validatePayload(payload);

  if (payloadErrors.length > 0) {
    return errorResponse(
      res,
      "Por favor corrige los datos del formulario.",
      payloadErrors,
      400,
      corsHeaders,
    );
  }

  try {
    const recaptchaValid = await verifyRecaptcha(payload.recaptchaToken);
    if (!recaptchaValid) {
      return errorResponse(
        res,
        "No se pudo validar reCAPTCHA. Intenta nuevamente.",
        [],
        400,
        corsHeaders,
      );
    }

    const sent = await sendWizardEmails(payload, log);
    if (!sent) {
      return errorResponse(
        res,
        "No se pudo enviar el correo al equipo. Intenta de nuevo.",
        [],
        500,
        corsHeaders,
      );
    }

    return successResponse(
      res,
      {
        message:
          "Tu idea fue enviada exitosamente. Te contactaremos pronto.",
      },
      corsHeaders,
    );
  } catch (caughtError) {
    error(
      `wizard-function failed for ${toSafeLog(payload.email)}: ${
        caughtError?.message || "unknown error"
      }`,
    );

    return errorResponse(
      res,
      "Error interno al procesar el formulario.",
      [],
      500,
      corsHeaders,
    );
  }
};
