import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_FIELD_LENGTHS = {
  name: 100,
  email: 255,
  phone: 20,
  message: 2000,
};

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

const validateOrigin = (req) => {
  const allowedOrigins = parseAllowedOrigins();
  if (allowedOrigins.length === 0) {
    return { valid: true };
  }

  const requestOrigin =
    normalizeTextField(req?.headers?.origin) ||
    normalizeTextField(req?.headers?.Origin);

  if (!requestOrigin || !allowedOrigins.includes(requestOrigin)) {
    return {
      valid: false,
      error: "Origen no permitido para este endpoint.",
    };
  }

  return { valid: true };
};

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

const sanitizePayload = (payload = {}) => {
  const name = normalizeTextField(payload.name);
  const email = normalizeTextField(payload.email).toLowerCase();
  const phone = normalizeTextField(payload.phone);
  const projectType = normalizeTextField(payload.projectType);
  const budget = normalizeTextField(payload.budget);
  const message = normalizeTextField(payload.message);
  const recaptchaToken = normalizeTextField(payload.recaptchaToken);
  const source = normalizeTextField(payload.source) || "unknown";
  const submittedAt = normalizeTextField(payload.submittedAt);

  return {
    name,
    email,
    phone,
    projectType,
    budget,
    message,
    recaptchaToken,
    source,
    submittedAt,
  };
};

const validatePayload = (payload) => {
  const errors = [];

  if (!payload.name) {
    errors.push("El nombre es obligatorio.");
  }

  if (!payload.email) {
    errors.push("El email es obligatorio.");
  } else if (!EMAIL_PATTERN.test(payload.email)) {
    errors.push("El email no tiene un formato valido.");
  }

  if (!payload.message) {
    errors.push("El mensaje es obligatorio.");
  }

  if (!payload.recaptchaToken) {
    errors.push("No se recibio token de reCAPTCHA.");
  }

  if (payload.name.length > MAX_FIELD_LENGTHS.name) {
    errors.push("El nombre excede el limite de caracteres.");
  }

  if (payload.email.length > MAX_FIELD_LENGTHS.email) {
    errors.push("El email excede el limite de caracteres.");
  }

  if (payload.phone && payload.phone.length > MAX_FIELD_LENGTHS.phone) {
    errors.push("El telefono excede el limite de caracteres.");
  }

  if (payload.message.length > MAX_FIELD_LENGTHS.message) {
    errors.push("El mensaje excede el limite de caracteres.");
  }

  return errors;
};

const verifyRecaptcha = async (token) => {
  const secretKey = normalizeTextField(process.env.RECAPTCHA_SECRET_KEY);
  if (!secretKey) {
    throw new Error("Falta RECAPTCHA_SECRET_KEY en la configuracion.");
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(
        token,
      )}`,
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
    "EMAIL_SERVICE no valido. Usa smtp, gmail, sendgrid o console.",
  );
};

const getProjectTypeLabel = (value) =>
  PROJECT_TYPE_LABELS[value] || value || "Sin especificar";

const getBudgetLabel = (value) =>
  BUDGET_LABELS[value] || value || "Sin especificar";

const buildTeamEmail = (payload) => {
  const emailFrom =
    normalizeTextField(process.env.EMAIL_FROM) || "noreply@racoondevs.com";
  const emailTo =
    normalizeTextField(process.env.EMAIL_TO) || "admin@racoondevs.com";

  return {
    from: emailFrom,
    to: emailTo,
    subject: `Nuevo lead: ${payload.name} - ${getProjectTypeLabel(
      payload.projectType,
    )}`,
    html: `
      <h2>Nuevo contacto desde RacoonDevs</h2>
      <p><strong>Nombre:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Tel\u00e9fono:</strong> ${payload.phone || "No proporcionado"}</p>
      <p><strong>Proyecto:</strong> ${getProjectTypeLabel(payload.projectType)}</p>
      <p><strong>Presupuesto:</strong> ${getBudgetLabel(payload.budget)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><strong>Fuente:</strong> ${payload.source}</p>
      <p><strong>SubmittedAt:</strong> ${payload.submittedAt || "No enviado"}</p>
    `,
  };
};

const buildClientEmail = (payload) => {
  const emailFrom =
    normalizeTextField(process.env.EMAIL_FROM) || "noreply@racoondevs.com";

  return {
    from: emailFrom,
    to: payload.email,
    subject: "Recibimos tu mensaje - RacoonDevs",
    html: `
      <h2>Gracias por contactarnos</h2>
      <p>Hola ${payload.name},</p>
      <p>Recibimos tu mensaje sobre ${getProjectTypeLabel(
        payload.projectType,
      )}. Te responderemos en menos de 24 horas.</p>
      <p><strong>Resumen:</strong> ${getBudgetLabel(payload.budget)}</p>
    `,
  };
};

const sendContactEmails = async (payload, log) => {
  const transporter = createTransporter();
  const teamEmail = buildTeamEmail(payload);
  const clientEmail = buildClientEmail(payload);
  const shouldSendClientEmail = parseBooleanEnv(
    process.env.CONTACT_SEND_CLIENT_CONFIRMATION,
    true,
  );

  if (
    normalizeTextField(process.env.EMAIL_SERVICE).toLowerCase() === "console"
  ) {
    log("EMAIL_SERVICE=console: simulando envio");
    log(`Destino equipo: ${teamEmail.to}`);
    log(`Destino cliente: ${clientEmail.to}`);
    return true;
  }

  const promises = [transporter.sendMail(teamEmail)];
  if (shouldSendClientEmail) {
    promises.push(transporter.sendMail(clientEmail));
  }

  const results = await Promise.allSettled(promises);
  const teamResult = results[0];

  if (teamResult.status !== "fulfilled") {
    return false;
  }

  return true;
};

const successResponse = (res, body) =>
  res.json(
    {
      success: true,
      ...body,
    },
    200,
  );

const errorResponse = (res, message, details = [], status = 400) =>
  res.json(
    {
      success: false,
      message,
      details,
    },
    status,
  );

export default async ({ req, res, log, error }) => {
  const requestMethod = (req?.method || "GET").toUpperCase();

  if (requestMethod !== "POST") {
    return errorResponse(res, "Metodo no permitido.", [], 405);
  }

  const originValidation = validateOrigin(req);
  if (!originValidation.valid) {
    return errorResponse(res, originValidation.error, [], 403);
  }

  const payload = sanitizePayload(getRequestBody(req));
  const payloadErrors = validatePayload(payload);

  if (payloadErrors.length > 0) {
    return errorResponse(
      res,
      "Por favor corrige los datos del formulario.",
      payloadErrors,
      400,
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
      );
    }

    const sent = await sendContactEmails(payload, log);
    if (!sent) {
      return errorResponse(
        res,
        "No se pudo enviar el correo al equipo. Intenta de nuevo.",
        [],
        500,
      );
    }

    return successResponse(res, {
      message: "Mensaje enviado exitosamente. Te contactaremos pronto.",
    });
  } catch (caughtError) {
    error(
      `contact-form-function failed for ${toSafeLog(payload.email)}: ${
        caughtError?.message || "unknown error"
      }`,
    );

    return errorResponse(
      res,
      "Error interno al procesar el formulario.",
      [],
      500,
    );
  }
};
