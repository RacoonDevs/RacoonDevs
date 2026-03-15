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
    gradient: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/20",
    border: "group-hover:border-violet-500/30",
    bg: "group-hover:bg-violet-500/[0.04]",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX Responsivo",
    description:
      "Interfaces que combinan estética premium con usabilidad real. Diseño mobile-first, sistemas de diseño y prototipado validado.",
    gradient: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/20",
    border: "group-hover:border-pink-500/30",
    bg: "group-hover:bg-pink-500/[0.04]",
  },
  {
    icon: BarChart3,
    title: "Landing Pages & Conversión",
    description:
      "Páginas de aterrizaje optimizadas para convertir. Copy estratégico, diseño orientado a acción y métricas claras.",
    gradient: "from-cyan-500 to-teal-600",
    glow: "group-hover:shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/30",
    bg: "group-hover:bg-cyan-500/[0.04]",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce & Funnels",
    description:
      "Tiendas en línea, catálogos digitales y embudos de venta que generan ingresos reales con experiencia de compra fluida.",
    gradient: "from-amber-500 to-orange-600",
    glow: "group-hover:shadow-amber-500/20",
    border: "group-hover:border-amber-500/30",
    bg: "group-hover:bg-amber-500/[0.04]",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Sistemas Internos",
    description:
      "Paneles de administración, CRMs, ERPs y herramientas internas que organizan y aceleran las operaciones de tu empresa.",
    gradient: "from-emerald-500 to-green-600",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
    bg: "group-hover:bg-emerald-500/[0.04]",
  },
  {
    icon: Workflow,
    title: "Integraciones & Automatización",
    description:
      "Conexión con APIs, pasarelas de pago, CRMs y servicios de terceros. Automatizamos procesos para que tu equipo se enfoque en lo importante.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/20",
    border: "group-hover:border-blue-500/30",
    bg: "group-hover:bg-blue-500/[0.04]",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={staggerChild}
      className={`group relative p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08] ${service.border} ${service.bg} transition-all duration-500 shadow-sm hover:shadow-xl ${service.glow} glass-panel`}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: ease.smooth } }}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-md`}
        >
          <service.icon className="w-5 h-5 text-white" />
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
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-primary font-medium">
                Servicios
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Todo lo que necesitas para{" "}
              <span className="gradient-text">
                lanzar, escalar y dominar tu presencia digital.
              </span>
            </h2>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
