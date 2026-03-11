// src/components/sections/ProcessSection.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "../../utils/motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Entendemos tu negocio, tus usuarios y tus objetivos. Definimos alcance, prioridades y métricas de éxito antes de empezar.",
  },
  {
    number: "02",
    title: "Estrategia & UX",
    description:
      "Diseñamos la arquitectura de información, flujos de usuario y wireframes. Validamos la dirección antes de invertir en desarrollo.",
  },
  {
    number: "03",
    title: "Diseño UI",
    description:
      "Creamos la interfaz visual con sistema de diseño, componentes reutilizables y prototipos interactivos en alta fidelidad.",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Construimos con código limpio, arquitectura escalable, testing y entregas iterativas. Siempre alineados con lo diseñado.",
  },
  {
    number: "05",
    title: "Lanzamiento & Iteración",
    description:
      "Desplegamos, monitoreamos y mejoramos. Soporte continuo, actualizaciones y evolución basada en datos reales de uso.",
  },
];

const ProcessStep = ({ step, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 sm:py-10 border-t border-white/[0.06] first:border-t-0 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: ease.out }}
    >
      {/* Number with animated accent line */}
      <div className="relative">
        <span className="text-2xl sm:text-3xl font-bold text-gray-700 group-hover:text-gray-400 transition-colors duration-500">
          {step.number}
        </span>
        {/* Scroll-driven accent */}
        <motion.div
          className="absolute -left-3 top-0 w-px bg-white/30 origin-top hidden md:block"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Content */}
      <div className="max-w-xl">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32 relative border-t border-white/5"
      id="proceso"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
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
              Proceso
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
              Un proceso claro{" "}
              <span className="text-gray-400">
                para resultados predecibles.
              </span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
