import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { cn } from "../../utils/cn";
import { staggerContainer, staggerChild, ease } from "../../utils/motion";
import { PHONE_PRIMARY, EMAIL, WHATSAPP_URL } from "../../utils/constants";

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
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    proyecto: "",
    presupuesto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    setFormData({
      nombre: "",
      email: "",
      proyecto: "",
      presupuesto: "",
      mensaje: "",
    });
  };

  return (
    <SectionWrapper id="contacto">
      <SectionHeading
        badge="Contacto"
        title="Construyamos algo a tu medida"
        gradient="a tu medida"
        subtitle="Cuéntanos tu idea y te ayudamos a convertirla en realidad."
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
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
                className="w-full gradient-primary text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar mensaje
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
                      "w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0",
                      card.accentBg,
                    )}
                  >
                    <Icon className={cn("w-5 h-5", card.accent)} />
                  </div>
                  <div>
                    <p className="text-xs text-txt-3 font-medium uppercase tracking-wider mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-medium text-txt">{card.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-txt-3 ml-auto flex-shrink-0" />
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
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
