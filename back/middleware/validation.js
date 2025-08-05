// middleware/validation.js
export const validateContactForm = (req, res, next) => {
  const { name, email, message, recaptchaToken } = req.body;
  const errors = [];

  // Required fields validation
  if (!name || name.trim().length === 0) {
    errors.push("Name is required");
  }

  if (!email || email.trim().length === 0) {
    errors.push("Email is required");
  }

  if (!message || message.trim().length === 0) {
    errors.push("Message is required");
  }

  if (!recaptchaToken) {
    errors.push("reCAPTCHA verification is required");
  }

  // Email format validation
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Invalid email format");
  }

  // Length validations
  if (name && name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  if (email && email.length > 255) {
    errors.push("Email must be less than 255 characters");
  }

  if (message && message.length > 2000) {
    errors.push("Message must be less than 2000 characters");
  }

  // Sanitize inputs
  if (name) req.body.name = name.trim();
  if (email) req.body.email = email.trim().toLowerCase();
  if (message) req.body.message = message.trim();

  if (errors.length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      message: "Por favor corrige los errores en el formulario",
      details: errors,
    });
  }

  next();
};
