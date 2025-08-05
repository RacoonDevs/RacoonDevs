// api/contact.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, projectType, budget, message, recaptchaToken } =
      req.body;

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({
        message: "Faltan campos requeridos",
      });
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({
        message: "Error de verificación reCAPTCHA",
      });
    }

    // Here you would typically send an email
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can integrate with email services like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Mailgun
    // etc.

    return res.status(200).json({
      message: "Formulario enviado exitosamente",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
}
