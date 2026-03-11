// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { submitContactForm } from "../../services/contactFormClient";
import { ease } from "../../utils/motion";

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return null;
    try {
      return await executeRecaptcha("contact_form_submit");
    } catch {
      return null;
    }
  }, [executeRecaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    const recaptchaToken = await handleReCaptchaVerify();
    if (!recaptchaToken) {
      setSubmitStatus("error");
      setSubmitMessage(
        "No se pudo validar reCAPTCHA. Recarga la página e intenta de nuevo.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitContactForm({ formData, recaptchaToken });
      setSubmitStatus("success");
      setSubmitMessage(response.message);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      const detailMessage =
        Array.isArray(error?.details) && error.details.length > 0
          ? ` ${error.details.join(" ")}`
          : "";
      setSubmitMessage(
        `${error?.message || "Error al enviar el mensaje. Por favor, intenta de nuevo."}${detailMessage}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "admin@racoondevs.com",
      href: "mailto:admin@racoondevs.com",
    },
    {
      icon: Phone,
      label: "+52 322 265 2650",
      href: "tel:+523222652650",
    },
    {
      icon: MapPin,
      label: "Puerto Vallarta, Jalisco, MX",
      href: null,
    },
  ];

  const inputClass =
    "w-full px-4 py-3 bg-ink/[0.03] border border-ink/10 rounded-xl text-txt placeholder-txt-4 focus:border-ink/25 focus:bg-ink/[0.05] focus:ring-0 focus:outline-none transition-all duration-300 glass-input";

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234b5563' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: "right 12px center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "16px",
  };

  return (
    <section
      className="py-20 sm:py-24 lg:py-32 relative border-t border-ink/5"
      id="contacto"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.p
              className="text-sm tracking-widest uppercase text-txt-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Hablemos
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-2xl mx-auto leading-tight">
              Construyamos algo <span className="text-txt-2">a tu medida.</span>
            </h2>
            <p className="text-txt-2 text-lg max-w-xl mx-auto leading-relaxed">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24
              horas con una propuesta inicial.
            </p>
          </motion.div>

          {/* Form + Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2, duration: 0.7, ease: ease.out }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: ease.out }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-400 text-sm">
                      {submitMessage ||
                        "Mensaje enviado. Te contactaremos pronto."}
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: ease.out }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-red-400 text-sm">
                      {submitMessage || "Error al enviar. Intenta de nuevo."}
                    </span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-txt-2 text-sm mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-txt-2 text-sm mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-txt-2 text-sm mb-2"
                    >
                      Tipo de Proyecto
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={`${inputClass} [&>option]:bg-surface-alt [&>option]:text-txt appearance-none`}
                      style={selectStyle}
                    >
                      <option value="">Selecciona</option>
                      <option value="web">Desarrollo Web</option>
                      <option value="mobile">App Mobile</option>
                      <option value="ecommerce">eCommerce</option>
                      <option value="custom">Software a la Medida</option>
                      <option value="redesign">Rediseño</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-txt-2 text-sm mb-2"
                    >
                      Presupuesto Estimado
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`${inputClass} [&>option]:bg-surface-alt [&>option]:text-txt appearance-none`}
                      style={selectStyle}
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="5k-15k">$5,000 - $15,000 MXN</option>
                      <option value="15k-30k">$15,000 - $30,000 MXN</option>
                      <option value="30k-50k">$30,000 - $50,000 MXN</option>
                      <option value="50k+">$50,000+ MXN</option>
                      <option value="discuss">Prefiero discutirlo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-txt-2 text-sm mb-2"
                  >
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tu proyecto, objetivos, timeline estimado..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-ink-inv rounded-full font-semibold text-base overflow-hidden disabled:bg-txt-4 disabled:text-txt-2 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {/* Hover shimmer */}
                  {!isSubmitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  )}
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.3, duration: 0.7, ease: ease.out }}
            >
              <div>
                <h3 className="text-txt font-semibold text-lg mb-6">
                  Contacto directo
                </h3>
                <div className="space-y-4">
                  {contactDetails.map((detail) => {
                    const Wrapper = detail.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={detail.label}
                        {...(detail.href && { href: detail.href })}
                        className="flex items-center gap-3 text-txt-2 hover:text-txt transition-colors duration-300 group"
                      >
                        <detail.icon className="w-4 h-4 text-txt-3 group-hover:text-txt transition-colors duration-300" />
                        <span className="text-sm">{detail.label}</span>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="p-6 rounded-2xl bg-ink/[0.02] border border-ink/[0.06] hover:border-ink/15 transition-colors duration-500"
                whileHover={{
                  y: -2,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                <h4 className="text-txt font-semibold mb-3">
                  ¿Prefieres una llamada?
                </h4>
                <p className="text-txt-2 text-sm mb-4 leading-relaxed">
                  Agenda una videollamada de 30 minutos para discutir tu
                  proyecto en detalle.
                </p>
                <a
                  href="tel:+523222652650"
                  className="inline-flex items-center gap-2 text-txt text-sm font-medium hover:text-txt-2 transition-colors duration-300 group"
                >
                  Agendar Llamada
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

              <div>
                <p className="text-txt-3 text-sm leading-relaxed">
                  Respondemos en menos de 24 horas. Sin compromiso. Primera
                  consulta gratuita.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
