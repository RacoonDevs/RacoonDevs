// services/emailService.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create transporter (you'll need to configure this with your email service)
const createTransporter = () => {
  // Option 1: Gmail (recommended for development)
  if (process.env.EMAIL_SERVICE === "gmail") {
    return nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });
  }

  // Option 2: SMTP (for custom email providers)
  if (process.env.EMAIL_SERVICE === "smtp") {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  // Option 3: SendGrid
  if (process.env.EMAIL_SERVICE === "sendgrid") {
    return nodemailer.createTransporter({
      service: "SendGrid",
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  // Fallback: Log emails to console (development only)
  return nodemailer.createTransporter({
    streamTransport: true,
    newline: "unix",
    buffer: true,
  });
};

const getProjectTypeLabel = (type) => {
  const types = {
    web: "Desarrollo Web",
    mobile: "App Mobile",
    ecommerce: "E-commerce",
    custom: "Desarrollo Custom",
    redesign: "Rediseño",
    other: "Otro",
  };
  return types[type] || type;
};

const getBudgetLabel = (budget) => {
  const budgets = {
    "5k-15k": "$5,000 - $15,000 USD",
    "15k-30k": "$15,000 - $30,000 USD",
    "30k-50k": "$30,000 - $50,000 USD",
    "50k+": "$50,000+ USD",
    discuss: "Prefiero discutirlo",
  };
  return budgets[budget] || budget;
};

export const sendContactEmail = async (emailData) => {
  try {
    const transporter = createTransporter();
    const { name, email, projectType, budget, message, timestamp, ip } =
      emailData;

    // Email to RacoonDevs team
    const teamEmailContent = {
      from: process.env.EMAIL_FROM || "noreply@racoondevs.com",
      to: process.env.EMAIL_TO || "hola@racoondevs.com",
      subject: `🚀 Nuevo Lead: ${name} - ${getProjectTypeLabel(projectType)}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4f46e5; }
            .value { margin-left: 10px; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
            .badge { display: inline-block; background: #06b6d4; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🦝 RacoonDevs - Nuevo Contacto</h1>
          </div>
          <div class="content">
            <h2>Información del Cliente</h2>
            <div class="field">
              <span class="label">👤 Nombre:</span>
              <span class="value">${name}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value">${email}</span>
            </div>
            <div class="field">
              <span class="label">💻 Tipo de Proyecto:</span>
              <span class="value"><span class="badge">${getProjectTypeLabel(
                projectType
              )}</span></span>
            </div>
            <div class="field">
              <span class="label">💰 Presupuesto:</span>
              <span class="value">${getBudgetLabel(budget)}</span>
            </div>
            <div class="field">
              <span class="label">💬 Mensaje:</span>
              <div class="value" style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 5px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <hr style="margin: 30px 0;">
            <h3>Información Técnica</h3>
            <div class="field">
              <span class="label">🕐 Fecha:</span>
              <span class="value">${new Date(timestamp).toLocaleString(
                "es-MX"
              )}</span>
            </div>
            <div class="field">
              <span class="label">🌐 IP:</span>
              <span class="value">${ip}</span>
            </div>
          </div>
          <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de RacoonDevs.com</p>
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to client
    const clientEmailContent = {
      from: process.env.EMAIL_FROM || "noreply@racoondevs.com",
      to: email,
      subject: "✨ ¡Hemos recibido tu mensaje! - RacoonDevs",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🦝 ¡Gracias por contactarnos!</h1>
          </div>
          <div class="content">
            <p>Hola <strong>${name}</strong>,</p>
            <p>Hemos recibido tu mensaje sobre tu proyecto de <strong>${getProjectTypeLabel(
              projectType
            )}</strong> y estamos emocionados de poder ayudarte.</p>
            <p>Nuestro equipo revisará tu solicitud y te contactaremos en las próximas <strong>24 horas</strong> para discutir los detalles de tu proyecto.</p>
            
            <h3>📋 Resumen de tu consulta:</h3>
            <ul>
              <li><strong>Proyecto:</strong> ${getProjectTypeLabel(
                projectType
              )}</li>
              <li><strong>Presupuesto:</strong> ${getBudgetLabel(budget)}</li>
            </ul>
            
            <p>Mientras tanto, te invitamos a:</p>
            <ul>
              <li>🌐 Visitar nuestro portfolio en <a href="https://racoondevs.com">racoondevs.com</a></li>
              <li>📱 Seguirnos en nuestras redes sociales</li>
              <li>📞 Llamarnos directamente al +52 322 265 2650</li>
            </ul>
            
            <a href="https://racoondevs.com" class="cta-button">Ver nuestro Portfolio</a>
          </div>
          <div class="footer">
            <p><strong>RacoonDevs</strong><br>
            🌎 Puerto Vallarta, Jalisco, México<br>
            📧 hola@racoondevs.com | 📞 +52 322 265 2650</p>
            <p style="font-size: 12px; color: #6b7280;">
              Si no solicitaste este correo, puedes ignorarlo de forma segura.
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    const emailPromises = [
      transporter.sendMail(teamEmailContent),
      transporter.sendMail(clientEmailContent),
    ];

    const results = await Promise.allSettled(emailPromises);

    // Check if at least the team email was sent successfully
    const teamEmailResult = results[0];
    if (teamEmailResult.status === "fulfilled") {
      console.log("✅ Team email sent successfully");

      const clientEmailResult = results[1];
      if (clientEmailResult.status === "fulfilled") {
        console.log("✅ Client confirmation email sent successfully");
      } else {
        console.log(
          "⚠️ Client email failed, but team email sent:",
          clientEmailResult.reason
        );
      }

      return true;
    } else {
      console.error("❌ Failed to send team email:", teamEmailResult.reason);
      return false;
    }
  } catch (error) {
    console.error("❌ Email service error:", error);
    return false;
  }
};
