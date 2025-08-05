// services/recaptchaService.js
import dotenv from "dotenv";
dotenv.config();

export const verifyRecaptcha = async (token) => {
  try {
    if (!token) {
      console.log("❌ No reCAPTCHA token provided");
      return false;
    }

    const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error(
        "❌ reCAPTCHA secret key not found in environment variables"
      );
      return false;
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log("✅ reCAPTCHA verification successful");
      return true;
    } else {
      console.log("❌ reCAPTCHA verification failed:", data["error-codes"]);
      return false;
    }
  } catch (error) {
    console.error("❌ reCAPTCHA verification error:", error);
    return false;
  }
};
