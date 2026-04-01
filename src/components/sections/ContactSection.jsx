import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { cn } from "../../utils/cn";
import { staggerContainer, staggerChild, ease } from "../../utils/motion";
import { PHONE_PRIMARY, EMAIL, WHATSAPP_URL } from "../../utils/constants";
import { submitContactForm } from "../../services/contactFormClient";

const projectTypes = [
  { value: "", label: "Selecciona el tipo de proyecto" },
  { value: "web", label: "Sitio Web" },
  { value: "mobile", label: "App Móvil" },
  { value: "ecommerce", label: "eCommerce / Tienda en línea" },
  { value: "custom", label: "Software a la medida" },
  { value: "redesign", label: "Rediseño de sitio existente" },
  { value: "other", label: "Otro" },
];

const budgetRanges = [
  { value: "", label: "Selecciona tu presupuesto" },
  { value: "5k-15k", label: "$5,000 — $15,000 MXN" },
  { value: "15k-30k", label: "$15,000 — $30,000 MXN" },
  { value: "30k-50k", label: "$30,000 — $50,000 MXN" },
  { value: "50k+", label: "$50,000+ MXN" },
  { value: "discuss", label: "Prefiero discutirlo" },
];

const contactCards = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Escríbenos directo",
    href: WHATSAPP_URL,
    accent: "text-green-400",
    accentBg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    accent: "text-primary",
    accentBg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: PHONE_PRIMARY,
    href: `tel:${PHONE_PRIMARY.replace(/\s/g, "")}`,
    accent: "text-primary",
    accentBg: "bg-primary/10 border-primary/20",
  },
];

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    proyecto: "",
    presupuesto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState({
    open: false,
    status: "success",
    message: "",
    details: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      if (!executeRecaptcha) {
        throw new Error(
          "No se pudo inicializar reCAPTCHA. Recarga la pagina e intenta de nuevo.",
        );
      }

      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      const response = await submitContactForm({
        formData: {
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          projectType: formData.proyecto,
          budget: formData.presupuesto,
          message: formData.mensaje,
        },
        recaptchaToken,
      });

      setFeedbackModal({
        open: true,
        status: "success",
        message:
          response.message ||
          "Mensaje enviado con éxito. Te contactaremos muy pronto.",
        details: [],
      });

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        proyecto: "",
        presupuesto: "",
        mensaje: "",
      });
    } catch (error) {
      const details = Array.isArray(error?.details) ? error.details : [];
      setFeedbackModal({
        open: true,
        status: "error",
        message:
          error?.message ||
          "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.",
        details,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SectionWrapper id="contacto" noBorder noTopPadding>
        <SectionHeading
          as="h1"
          badge="Contacto"
          title="Hablemos de tu proyecto en Puerto Vallarta"
          gradient="Puerto Vallarta"
          subtitle="Cuéntanos tu idea y te ayudamos a convertirla en realidad. Respondemos en menos de 24 horas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: Form (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            <GlassCard hover={false} className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt placeholder:text-txt-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt placeholder:text-txt-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                {/* Teléfono (opcional) */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Teléfono{" "}
                    <span className="text-txt-3 font-normal">(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 55 1234 5678"
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt placeholder:text-txt-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                {/* Tipo de Proyecto */}
                <div>
                  <label
                    htmlFor="proyecto"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="proyecto"
                    name="proyecto"
                    required
                    value={formData.proyecto}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                  >
                    {projectTypes.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={!opt.value}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Presupuesto */}
                <div>
                  <label
                    htmlFor="presupuesto"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Presupuesto estimado
                  </label>
                  <select
                    id="presupuesto"
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                  >
                    {budgetRanges.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={!opt.value}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-txt mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, tus objetivos y cualquier detalle relevante..."
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-txt placeholder:text-txt-3 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right: Contact Cards (2 cols) */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            {...staggerContainer(0.1)}
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  variants={staggerChild}
                  className="block"
                >
                  <GlassCard className="flex items-center gap-4 hover:border-primary/20 transition-all duration-300">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center border shrink-0",
                        card.accentBg,
                      )}
                    >
                      <Icon className={cn("w-5 h-5", card.accent)} />
                    </div>
                    <div>
                      <p className="text-xs text-txt-3 font-medium uppercase tracking-wider mb-0.5">
                        {card.label}
                      </p>
                      <p className="text-sm font-medium text-txt">
                        {card.value}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-txt-3 ml-auto shrink-0" />
                  </GlassCard>
                </motion.a>
              );
            })}

            {/* Extra info card */}
            <motion.div variants={staggerChild}>
              <GlassCard hover={false} className="mt-2">
                <p className="text-sm text-txt-2 leading-relaxed">
                  <span className="font-semibold text-txt">
                    Respuesta rápida:
                  </span>{" "}
                  Contestamos en menos de 24 horas. Si tu proyecto es urgente,
                  escríbenos por WhatsApp para atención inmediata.
                </p>
              </GlassCard>
            </motion.div>

            {/* Wizard cross-reference */}
            <motion.div variants={staggerChild}>
              <Link to="/cuentanos-tu-idea" className="block group">
                <GlassCard className="mt-2 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-txt mb-1">
                        ¿No sabes por dónde empezar?
                      </p>
                      <p className="text-xs text-txt-3 leading-relaxed">
                        Prueba nuestro asistente de proyectos. Te guiamos paso a
                        paso para definir lo que necesitas.
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-txt-3 mt-1 shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {createPortal(
        <AnimatePresence>
          {feedbackModal.open && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/45 backdrop-blur-sm"
                onClick={() =>
                  setFeedbackModal((prev) => ({ ...prev, open: false }))
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.25, ease: ease.out }}
              >
                <GlassCard hover={false} className="p-6 sm:p-7">
                  <button
                    type="button"
                    onClick={() =>
                      setFeedbackModal((prev) => ({ ...prev, open: false }))
                    }
                    className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    aria-label="Cerrar modal"
                  >
                    <X className="w-4 h-4 text-txt-2" />
                  </button>

                  <div className="pr-8">
                    <div className="flex items-center gap-3 mb-4">
                      {feedbackModal.status === "success" ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-500" />
                      )}
                      <h3 className="text-lg font-semibold text-txt">
                        {feedbackModal.status === "success"
                          ? "Mensaje enviado"
                          : "No se pudo enviar"}
                      </h3>
                    </div>

                    <p className="text-sm text-txt-2 leading-relaxed mb-4">
                      {feedbackModal.message}
                    </p>

                    {feedbackModal.details.length > 0 && (
                      <ul className="mb-5 space-y-1.5">
                        {feedbackModal.details.map((detail) => (
                          <li key={detail} className="text-xs text-txt-3">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() =>
                          setFeedbackModal((prev) => ({ ...prev, open: false }))
                        }
                      >
                        Entendido
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ContactSection;
