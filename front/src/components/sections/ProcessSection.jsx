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
    color: "text-violet-500",
    lineColor: "bg-violet-500/40",
    numberBg: "bg-violet-500/10",
  },
  {
    number: "02",
    title: "Estrategia & UX",
    description:
      "Diseñamos la arquitectura de información, flujos de usuario y wireframes. Validamos la dirección antes de invertir en desarrollo.",
    color: "text-cyan-500",
    lineColor: "bg-cyan-500/40",
    numberBg: "bg-cyan-500/10",
  },
  {
    number: "03",
    title: "Diseño UI",
    description:
      "Creamos la interfaz visual con sistema de diseño, componentes reutilizables y prototipos interactivos en alta fidelidad.",
    color: "text-pink-500",
    lineColor: "bg-pink-500/40",
    numberBg: "bg-pink-500/10",
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Construimos con código limpio, arquitectura escalable, testing y entregas iterativas. Siempre alineados con lo diseñado.",
    color: "text-amber-500",
    lineColor: "bg-amber-500/40",
    numberBg: "bg-amber-500/10",
  },
  {
    number: "05",
    title: "Lanzamiento & Iteración",
    description:
      "Desplegamos, monitoreamos y mejoramos. Soporte continuo, actualizaciones y evolución basada en datos reales de uso.",
    color: "text-emerald-500",
    lineColor: "bg-emerald-500/40",
    numberBg: "bg-emerald-500/10",
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
      className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 sm:py-10 border-t border-primary/[0.08] first:border-t-0 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: ease.out }}
    >
      {/* Number with animated accent line */}
      <div className="relative">
        <span
          className={`text-2xl sm:text-3xl font-bold ${step.color} transition-colors duration-500`}
        >
          {step.number}
        </span>
        {/* Scroll-driven accent */}
        <motion.div
          className={`absolute -left-3 top-0 w-px ${step.lineColor} origin-top hidden md:block`}
          style={{ height: lineHeight }}
        />
      </div>

      {/* Content */}
      <div className="max-w-xl">
        <h3 className="text-xl sm:text-2xl font-semibold text-txt mb-3 group-hover:text-txt transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-txt-2 text-sm sm:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32 relative border-t border-primary/[0.08]"
      id="proceso"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
                Proceso
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Un proceso claro{" "}
              <span className="gradient-text">
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
