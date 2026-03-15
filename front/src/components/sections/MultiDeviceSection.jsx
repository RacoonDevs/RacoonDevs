// src/components/sections/MultiDeviceSection.jsx
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Watch, Tv, Globe } from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

const devices = [
  {
    icon: Monitor,
    label: "Desktop",
    description: "Interfaces completas y potentes para pantallas grandes.",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
    width: "w-32 sm:w-36",
    height: "h-20 sm:h-24",
    borderRadius: "rounded-lg",
  },
  {
    icon: Tablet,
    label: "Tablet",
    description: "Optimizado para interacción táctil y lectura cómoda.",
    gradient: "from-cyan-500 to-teal-600",
    glow: "shadow-cyan-500/20",
    width: "w-20 sm:w-24",
    height: "h-28 sm:h-32",
    borderRadius: "rounded-xl",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    description: "Mobile-first: rápido, ligero y siempre accesible.",
    gradient: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
    width: "w-14 sm:w-16",
    height: "h-24 sm:h-28",
    borderRadius: "rounded-2xl",
  },
  {
    icon: Watch,
    label: "Wearable",
    description: "Extensiones para dispositivos compactos e IoT.",
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
    width: "w-12 sm:w-14",
    height: "h-12 sm:h-14",
    borderRadius: "rounded-2xl",
  },
];

const highlights = [
  {
    icon: Globe,
    title: "PWA Instalable",
    description:
      "Apps que se instalan desde el navegador, sin tienda de aplicaciones.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/15",
  },
  {
    icon: Tv,
    title: "Pantallas Grandes",
    description:
      "Dashboards y paneles pensados para monitores grandes y smart TVs.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/15",
  },
  {
    icon: Smartphone,
    title: "Primero Mobile",
    description:
      "Diseñamos desde la pantalla más pequeña y escalamos hacia arriba.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/15",
  },
  {
    icon: Monitor,
    title: "Responsive Perfecto",
    description:
      "Cada breakpoint afinado para que la experiencia sea impecable.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/15",
  },
];

/* Mini device preview mockup */
const DevicePreview = ({ device, index }) => (
  <motion.div
    className="flex flex-col items-center gap-3"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6, ease: ease.out }}
  >
    <motion.div
      className={`${device.width} ${device.height} ${device.borderRadius} border-2 border-primary/[0.12] bg-surface-alt/80 relative overflow-hidden shadow-lg ${device.glow}`}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(124,58,237,0.3)",
        transition: { duration: 0.3, ease: ease.smooth },
      }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-0.5 px-1.5 py-1 border-b border-primary/[0.08]">
        <div className="w-1 h-1 rounded-full bg-red-400/50" />
        <div className="w-1 h-1 rounded-full bg-yellow-400/50" />
        <div className="w-1 h-1 rounded-full bg-green-400/50" />
      </div>
      {/* Content lines */}
      <div className="p-1.5 space-y-1">
        <div
          className={`h-1 w-3/4 rounded-full bg-gradient-to-r ${device.gradient} opacity-30`}
        />
        <div className="h-0.5 w-full bg-primary/[0.06] rounded-full" />
        <div className="h-0.5 w-2/3 bg-primary/[0.04] rounded-full" />
        <div
          className={`h-2 w-full rounded-sm bg-gradient-to-br ${device.gradient} opacity-10 mt-1`}
        />
      </div>
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${device.gradient} opacity-[0.04]`}
      />
    </motion.div>
    <div className="text-center">
      <device.icon
        className={`w-4 h-4 mx-auto mb-1 bg-gradient-to-br ${device.gradient} bg-clip-text`}
        style={{
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
        }}
      />
      <p className="text-sm font-semibold text-txt">{device.label}</p>
      <p className="text-[11px] text-txt-3 max-w-[120px]">
        {device.description}
      </p>
    </div>
  </motion.div>
);

const MultiDeviceSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]">
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
                Multi-Dispositivo
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-3xl mx-auto leading-tight">
              Una experiencia perfecta{" "}
              <span className="gradient-text">en cualquier pantalla.</span>
            </h2>
            <p className="text-txt-2 text-lg max-w-2xl mx-auto leading-relaxed">
              Diseñamos y desarrollamos aplicaciones que se adaptan a cada
              dispositivo — desde smartwatches hasta monitores de escritorio.
            </p>
          </motion.div>

          {/* Device mockups row */}
          <div className="flex items-end justify-center gap-6 sm:gap-10 lg:gap-14 mb-16 sm:mb-20">
            {devices.map((device, i) => (
              <DevicePreview key={device.label} device={device} index={i} />
            ))}
          </div>

          {/* Highlights grid */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={`group relative p-5 sm:p-6 rounded-xl bg-surface-alt/50 border ${item.border} hover:shadow-lg transition-all duration-500`}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-base font-semibold text-txt mb-1.5">
                  {item.title}
                </h3>
                <p className="text-txt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiDeviceSection;
