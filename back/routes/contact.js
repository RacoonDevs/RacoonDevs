// routes/contact.js
import express from "express";
import { sendContactEmail } from "../services/emailService.js";
import { verifyRecaptcha } from "../services/recaptchaService.js";
import { validateContactForm } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validateContactForm, async (req, res) => {
  try {
    const { name, email, projectType, budget, message, recaptchaToken } =
      req.body;

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaValid) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed",
        message: "Por favor completa la verificación reCAPTCHA",
      });
    }

    // Prepare email data
    const emailData = {
      name,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress,
    };

    // Send email
    const emailSent = await sendContactEmail(emailData);

    if (!emailSent) {
      return res.status(500).json({
        error: "Failed to send email",
        message: "Error al enviar el mensaje. Por favor intenta de nuevo.",
      });
    }

    // Log successful submission (you might want to save to database here)
    console.log("📧 Contact form submission:", {
      name,
      email,
      projectType,
      budget,
      timestamp: emailData.timestamp,
      ip: emailData.ip,
    });

    res.status(200).json({
      success: true,
      message: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Error interno del servidor. Por favor intenta de nuevo.",
    });
  }
});

export default router;
