import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import { WIZARD_STEPS } from "../../data/wizardData";

const WizardProgress = ({ currentStep }) => {
  const totalSteps = WIZARD_STEPS.length;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full mb-10">
      {/* Mobile: compact progress */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-txt-2">
            Paso {currentStep + 1} de {totalSteps}
          </span>
          <span className="text-sm font-semibold text-primary">
            {WIZARD_STEPS[currentStep].title}
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-primary/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-primary"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Desktop: step indicators */}
      <div className="hidden sm:flex items-center justify-center gap-0">
        {WIZARD_STEPS.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isFuture = index > currentStep;

          return (
            <div key={step.key} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300",
                    isCompleted &&
                      "gradient-primary border-transparent text-white",
                    isCurrent &&
                      "gradient-primary border-transparent text-white shadow-lg shadow-primary/30",
                    isFuture &&
                      "border-primary/20 text-txt-3 bg-transparent",
                  )}
                  animate={
                    isCurrent
                      ? {
                          scale: [1, 1.08, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                      : { scale: 1 }
                  }
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </motion.div>
                <span
                  className={cn(
                    "text-xs mt-1.5 font-medium whitespace-nowrap",
                    isCurrent && "text-primary",
                    isCompleted && "text-txt-2",
                    isFuture && "text-txt-3",
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={cn(
                    "w-8 lg:w-12 h-0.5 mx-1 mt-[-18px] rounded-full transition-colors duration-300",
                    index < currentStep
                      ? "bg-primary/60"
                      : "bg-primary/10",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardProgress;
