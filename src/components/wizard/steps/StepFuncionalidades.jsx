import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { FUNCIONALIDADES_GROUPS } from "../../../data/wizardData";
import { ease, staggerContainer, staggerChild } from "../../../utils/motion";

const StepFuncionalidades = ({ data, onChange }) => {
  const toggleFuncionalidad = (item) => {
    const current = data.funcionalidades;
    const updated = current.includes(item)
      ? current.filter((f) => f !== item)
      : [...current, item];
    onChange("funcionalidades", updated);
  };

  return (
    <div>
      <p className="text-txt-2 text-lg mb-8 text-center">
        Selecciona las cosas que te gustaría que tenga tu proyecto. No te
        preocupes si no estás seguro, es solo para darnos una idea.
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {FUNCIONALIDADES_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: ease.out,
              delay: groupIndex * 0.08,
            }}
          >
            <h4 className="text-sm font-semibold text-txt-2 mb-3 uppercase tracking-wider">
              {group.category}
            </h4>
            <motion.div
              className="flex flex-wrap gap-2"
              {...staggerContainer(0.03)}
            >
              {group.items.map((item) => {
                const isSelected = data.funcionalidades.includes(item);
                return (
                  <motion.button
                    key={item}
                    type="button"
                    variants={staggerChild}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFuncionalidad(item)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer",
                      isSelected
                        ? "gradient-primary text-white border-transparent shadow-md shadow-primary/20"
                        : "glass-panel border-white/[0.08] text-txt-2 hover:border-primary/20 hover:text-txt",
                    )}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: ease.out,
            delay: FUNCIONALIDADES_GROUPS.length * 0.08,
          }}
        >
          <label
            htmlFor="wizard-funcionalidades-extra"
            className="block text-sm font-semibold text-txt mb-2"
          >
            ¿Algo más que necesites?
          </label>
          <textarea
            id="wizard-funcionalidades-extra"
            value={data.funcionalidadesExtra}
            onChange={(e) => onChange("funcionalidadesExtra", e.target.value)}
            placeholder="Describe cualquier otra funcionalidad que tengas en mente..."
            className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4 min-h-[80px] resize-y"
            maxLength={500}
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-txt-4">
              {data.funcionalidadesExtra.length}/500
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StepFuncionalidades;
