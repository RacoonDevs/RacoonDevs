import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  BarChart3,
  ShoppingCart,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

const services = [
  {
    icon: Code2,
    title: "Software a la Medida",
    description:
      "Plataformas web, sistemas internos, portales de clientes y herramientas operativas desarrolladas específicamente para tu negocio.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX Responsivo",
    description:
      "Interfaces que combinan estética premium con usabilidad real. Diseño mobile-first, sistemas de diseño y prototipado validado.",
  },
  {
    icon: BarChart3,
    title: "Landing Pages & Conversión",
    description:
      "Páginas de aterrizaje optimizadas para convertir. Copy estratégico, diseño orientado a acción y métricas claras.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce & Funnels",
    description:
      "Tiendas en línea, catálogos digitales y embudos de venta que generan ingresos reales con experiencia de compra fluida.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Sistemas Internos",
    description:
      "Paneles de administración, CRMs, ERPs y herramientas internas que organizan y aceleran las operaciones de tu empresa.",
  },
  {
    icon: Workflow,
    title: "Integraciones & Automatización",
    description:
      "Conexión con APIs, pasarelas de pago, CRMs y servicios de terceros. Automatizamos procesos para que tu equipo se enfoque en lo importante.",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={staggerChild}
      className="group relative p-6 sm:p-8 rounded-2xl bg-ink/[0.02] border border-ink/[0.06] hover:border-ink/15 hover:bg-ink/[0.04] transition-colors duration-500 glass-panel"
      whileHover={{ y: -4, transition: { duration: 0.3, ease: ease.smooth } }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-ink/5 border border-ink/10 flex items-center justify-center mb-5 group-hover:border-ink/20 group-hover:bg-ink/[0.08] transition-all duration-300">
          <service.icon className="w-5 h-5 text-txt-2 group-hover:text-txt transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-semibold text-txt mb-3">
          {service.title}
        </h3>
        <p className="text-txt-2 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-20 sm:py-24 lg:py-32">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.p
              className="text-sm tracking-widest uppercase text-txt-3 mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Servicios
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Todo lo que necesitas para{" "}
              <span className="text-txt-2">
                lanzar, escalar y dominar tu presencia digital.
              </span>
            </h2>
          </motion.div>

          {/* Services Grid — staggered */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
