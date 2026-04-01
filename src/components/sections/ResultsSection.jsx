import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";
import { staggerContainer, staggerChild } from "../../utils/motion";

const stats = [
  { value: 95, suffix: "%", label: "Satisfacción del cliente" },
  { value: 3, suffix: "x", label: "Más conversiones" },
  { value: 40, suffix: "%", label: "Reducción de costos operativos" },
  { value: 24, suffix: "h", prefix: "<", label: "Tiempo de respuesta" },
];

const valuePoints = [
  "Presencia digital fortalecida",
  "Mejor experiencia de usuario",
  "Procesos internos optimizados",
  "Sistemas escalables",
  "Presencia moderna y profesional",
];

const ResultsSection = () => (
  <SectionWrapper id="resultados">
    <SectionHeading
      badge="Resultados"
      title="El impacto que generamos"
      gradient="impacto"
      subtitle="Números reales que respaldan nuestro trabajo."
    />

    {/* Big horizontal stats row */}
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-0"
      {...staggerContainer(0.1)}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={staggerChild}
          className={[
            "flex flex-col items-center py-10 px-6 text-center",
            i < stats.length - 1 ? "border-b lg:border-b-0 lg:border-r border-primary/8" : "",
            i % 2 === 0 && i < 2 ? "border-r lg:border-r-0" : "",
          ].join(" ")}
        >
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix || ""}
            className="gradient-text text-5xl sm:text-6xl lg:text-7xl"
          />
          <p className="text-sm text-txt-3 mt-3 leading-snug tracking-wide uppercase font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* Value proposition chips */}
    <motion.div
      className="flex flex-wrap justify-center gap-2.5 mt-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {valuePoints.map((point) => (
        <span
          key={point}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/8 text-sm text-txt-2"
        >
          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
          {point}
        </span>
      ))}
    </motion.div>
  </SectionWrapper>
);

export default ResultsSection;
