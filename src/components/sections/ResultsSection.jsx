import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
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
      subtitle="Números reales que respaldan nuestro compromiso con la calidad y los resultados."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Left: Stats Grid */}
      <motion.div
        className="grid grid-cols-2 gap-4 sm:gap-6"
        {...staggerContainer(0.12)}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerChild}>
            <GlassCard className="text-center" hover={false}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ""}
                className="gradient-text"
              />
              <p className="text-sm sm:text-base text-txt-2 mt-2 leading-snug">
                {stat.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Right: Value Propositions */}
      <motion.div className="space-y-5" {...staggerContainer(0.08)}>
        <motion.h3
          variants={staggerChild}
          className="text-xl sm:text-2xl font-semibold text-txt font-[family-name:var(--font-display)] mb-6"
        >
          Lo que logras al trabajar con nosotros
        </motion.h3>

        {valuePoints.map((point) => (
          <motion.div
            key={point}
            variants={staggerChild}
            className="flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-base sm:text-lg text-txt-2 leading-relaxed">
              {point}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ResultsSection;
