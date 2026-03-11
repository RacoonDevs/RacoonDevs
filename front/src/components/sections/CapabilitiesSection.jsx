import { motion } from "framer-motion";
import {
  Fingerprint,
  Layers,
  Smartphone,
  Gauge,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

const differentiators = [
  {
    icon: Fingerprint,
    title: "Proceso Altamente Personalizado",
    description:
      "Cada proyecto se aborda desde cero, entendiendo tu negocio, tus usuarios y tus objetivos antes de escribir una sola línea de código.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Layers,
    title: "Diseño + Ingeniería Integrados",
    description:
      "No separamos diseño de desarrollo. Nuestro equipo piensa en UI/UX y arquitectura al mismo tiempo, eliminando fricción y acelerando resultados.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Responsivo",
    description:
      "Diseñamos y construimos desde mobile hacia arriba, garantizando que tu producto se vea impecable en cualquier dispositivo.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Gauge,
    title: "Performance-Conscious",
    description:
      "Código optimizado, carga rápida, zero bloat. Tu producto no solo se ve bien, rinde bien.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Briefcase,
    title: "Entendemos Negocio",
    description:
      "No solo escribimos código. Entendemos conversión, retención, flujos de usuario y métricas que importan a tu operación.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Sistemas Preparados para el Futuro",
    description:
      "Arquitectura limpia, modular y documentada. Tu producto puede escalar, integrar nuevas features y mantenerse sin dolor.",
    className: "md:col-span-2 md:row-span-1",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="por-que" className="relative py-20 sm:py-24 lg:py-32">
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
              className="text-sm tracking-widest uppercase text-gray-500 mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Por qué Racoon Devs
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              No somos una fábrica de código.{" "}
              <span className="text-gray-400">
                Somos tu equipo de producto digital.
              </span>
            </h2>
          </motion.div>

          {/* Bento Grid — staggered */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-colors duration-500 ${item.className}`}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
