import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { cn } from "../../utils/cn";
import { staggerContainer, staggerChild, ease } from "../../utils/motion";
import { processSteps } from "../../data/processData";

const ProcessSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="proceso">
      <SectionHeading
        badge="Proceso"
        title="Un proceso claro para resultados predecibles"
        gradient="resultados predecibles"
        subtitle="Cada proyecto sigue nuestra metodología probada. Sin improvisaciones."
      />

      <div ref={timelineRef} className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-primary/[0.08]">
          <motion.div
            className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Steps */}
        <motion.div className="space-y-8" {...staggerContainer(0.1)}>
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={staggerChild}
                className="relative pl-16 sm:pl-20"
              >
                {/* Step dot */}
                <div
                  className={cn(
                    "absolute left-3.5 sm:left-5.5 top-6 w-5 h-5 rounded-full border-2 border-surface bg-gradient-to-br flex items-center justify-center z-10",
                    step.color,
                  )}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <GlassCard className="group">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center",
                        step.color,
                      )}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary/60 tracking-widest">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold text-txt font-[family-name:var(--font-display)]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-txt-2 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/[0.06] border border-primary/[0.1] text-txt-3"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProcessSection;
