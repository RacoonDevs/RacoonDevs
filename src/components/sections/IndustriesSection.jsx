import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Tag from "../ui/Tag";
import { cn } from "../../utils/cn";
import { staggerContainer, staggerChild } from "../../utils/motion";
import { industries } from "../../data/industriesData";

const IndustriesSection = () => (
  <SectionWrapper id="industrias">
    <SectionHeading
      badge="Industrias"
      title="Soluciones para cada tipo de negocio"
      gradient="cada tipo"
      subtitle="Experiencia real en múltiples sectores nos permite entender tu negocio desde el primer día."
    />

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
      {...staggerContainer(0.07)}
    >
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <motion.div
            key={industry.name}
            variants={staggerChild}
            className={cn(industry.large && "sm:col-span-2")}
          >
            <GlassCard className="h-full group">
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                  industry.gradient,
                )}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-txt mb-2 font-[family-name:var(--font-display)]">
                {industry.name}
              </h3>

              <p className="text-sm text-txt-2 leading-relaxed mb-4">
                {industry.description}
              </p>

              <Tag variant="neutral">Ej: {industry.example}</Tag>
            </GlassCard>
          </motion.div>
        );
      })}
    </motion.div>
  </SectionWrapper>
);

export default IndustriesSection;
