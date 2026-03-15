// src/components/sections/PricingSection.jsx
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { useNavigateToSection } from "../utils/NavigateToSection";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

const plans = [
  {
    name: "Esencial",
    price: "Desde $8,000",
    currency: "MXN",
    description:
      "Ideal para lanzar tu presencia digital con una landing page o sitio web profesional.",
    features: [
      "Landing page o sitio hasta 5 páginas",
      "Diseño responsivo mobile-first",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Entrega en 2-3 semanas",
      "1 ronda de revisiones",
    ],
    cta: "Empezar Proyecto",
    accent: "secondary",
    gradient: "from-cyan-500 to-teal-600",
    border: "border-cyan-500/15 hover:border-cyan-500/30",
    shadow: "hover:shadow-cyan-500/10",
    popular: false,
  },
  {
    name: "Profesional",
    price: "Desde $25,000",
    currency: "MXN",
    description:
      "Para negocios que necesitan una plataforma web completa con funcionalidades avanzadas.",
    features: [
      "Aplicación web o eCommerce completo",
      "Panel de administración",
      "Integraciones (pagos, APIs, CRM)",
      "Diseño UI/UX personalizado",
      "Arquitectura escalable",
      "Entrega iterativa con demos",
      "Soporte post-lanzamiento 30 días",
    ],
    cta: "Solicitar Cotización",
    accent: "primary",
    gradient: "from-violet-500 to-purple-600",
    border: "border-violet-500/30 hover:border-violet-500/50",
    shadow: "hover:shadow-violet-500/15",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    currency: "",
    description:
      "Soluciones a la medida para operaciones complejas, múltiples sistemas o desarrollo continuo.",
    features: [
      "Software a la medida completo",
      "Arquitectura multi-servicio",
      "Integraciones enterprise (ERP, BI)",
      "Múltiples roles y permisos",
      "CI/CD y documentación técnica",
      "Soporte y mantenimiento continuo",
      "Equipo dedicado",
    ],
    cta: "Agendar Llamada",
    accent: "accent",
    gradient: "from-amber-500 to-orange-600",
    border: "border-amber-500/15 hover:border-amber-500/30",
    shadow: "hover:shadow-amber-500/10",
    popular: false,
  },
];

const PricingSection = () => {
  const navigateToSection = useNavigateToSection();

  return (
    <section
      id="precios"
      className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]"
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/[0.08] border border-accent/[0.15] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-accent font-medium">
                Precios
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-3xl mx-auto leading-tight">
              Planes claros,{" "}
              <span className="gradient-text">sin sorpresas.</span>
            </h2>
            <p className="text-txt-2 text-lg max-w-2xl mx-auto leading-relaxed">
              Cada proyecto es único. Estos rangos te dan una idea clara de
              inversión. Cotizamos sin compromiso.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            {...staggerContainer(0.12)}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={staggerChild}
                className={`group relative rounded-2xl bg-surface-alt/50 border ${plan.border} transition-all duration-500 shadow-sm hover:shadow-xl ${plan.shadow} overflow-hidden ${
                  plan.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className={`flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r ${plan.gradient} text-white text-xs font-semibold tracking-wider uppercase`}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Más popular
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Plan name */}
                  <h3 className="text-lg font-semibold text-txt mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-txt-2 text-sm mb-5 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-txt">
                      {plan.price}
                    </span>
                    {plan.currency && (
                      <span className="text-txt-3 text-sm ml-1.5">
                        {plan.currency}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-txt-2"
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            plan.popular ? "text-primary" : "text-txt-3"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    onClick={() => navigateToSection("#contacto")}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg shadow-primary/25 hover:shadow-primary/40`
                        : "border border-primary/15 text-txt hover:border-primary/30 hover:bg-primary/[0.04]"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            className="text-center text-txt-3 text-sm mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            ¿Proyecto especial? Todos los precios son orientativos.{" "}
            <button
              onClick={() => navigateToSection("#contacto")}
              className="text-primary hover:text-primary-light underline underline-offset-2 cursor-pointer"
            >
              Platiquemos sobre tu caso
            </button>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
