import { motion } from "framer-motion";
import SelectableCard from "../SelectableCard";
import CurrencySelector from "../../ui/CurrencySelector";
import { cn } from "../../../utils/cn";
import {
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  formatBudgetWithCurrency,
} from "../../../data/wizardData";
import { useCurrency } from "../../../hooks/useCurrency";
import { ease, staggerContainer, staggerChild } from "../../../utils/motion";

const StepTiempoPresupuesto = ({ data, onChange }) => {
  const { currency, selectCurrency, convert, currencyInfo } = useCurrency();

  return (
    <div>
      <p className="text-txt-2 text-lg mb-8 text-center">
        Casi terminamos. Esto nos ayuda a proponerte la mejor opción para tu
        proyecto.
      </p>

      <div className="space-y-8 max-w-3xl mx-auto">
        <div>
          <h4 className="text-sm font-semibold text-txt mb-4">
            ¿Para cuándo lo necesitas?
          </h4>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            {...staggerContainer(0.05)}
          >
            {TIMELINE_OPTIONS.map((option) => (
              <motion.div key={option.value} variants={staggerChild}>
                <SelectableCard
                  icon={option.icon}
                  label={option.label}
                  description={option.description}
                  selected={data.timeline === option.value}
                  onClick={() => onChange("timeline", option.value)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease.out, delay: 0.15 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-txt">
              ¿Tienes un presupuesto en mente?{" "}
              <span className="text-txt-3 font-normal">(opcional)</span>
            </h4>
            <CurrencySelector
              currency={currency}
              onSelect={selectCurrency}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {BUDGET_OPTIONS.map((option) => {
              const label = formatBudgetWithCurrency(
                option.value,
                convert,
                currencyInfo,
              );
              return (
                <motion.button
                  key={option.value}
                  type="button"
                  layout
                  onClick={() =>
                    onChange(
                      "presupuesto",
                      data.presupuesto === option.value ? "" : option.value,
                    )
                  }
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 cursor-pointer text-center",
                    data.presupuesto === option.value
                      ? "gradient-primary text-white border-transparent shadow-md shadow-primary/20"
                      : "glass-panel border-white/[0.08] text-txt-2 hover:border-primary/20",
                  )}
                >
                  {label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease.out, delay: 0.25 }}
        >
          <label
            htmlFor="wizard-comentarios"
            className="block text-sm font-semibold text-txt mb-2"
          >
            ¿Algo más que quieras contarnos?{" "}
            <span className="text-txt-3 font-normal">(opcional)</span>
          </label>
          <textarea
            id="wizard-comentarios"
            value={data.comentariosExtra}
            onChange={(e) => onChange("comentariosExtra", e.target.value)}
            placeholder="Cualquier detalle adicional que consideres importante..."
            className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4 min-h-[80px] resize-y"
            maxLength={500}
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-txt-4">
              {data.comentariosExtra.length}/500
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StepTiempoPresupuesto;
