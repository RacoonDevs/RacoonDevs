import { motion } from "framer-motion";
import SelectableCard from "../SelectableCard";
import { cn } from "../../../utils/cn";
import { ESTILO_VISUAL_OPTIONS, MARCA_OPTIONS } from "../../../data/wizardData";
import { ease, staggerContainer, staggerChild } from "../../../utils/motion";

const StepEstiloVisual = ({ data, onChange }) => (
  <div>
    <p className="text-txt-2 text-lg mb-8 text-center">
      El estilo visual es importante. Cuéntanos tus preferencias para diseñar
      algo que te encante.
    </p>

    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h4 className="text-sm font-semibold text-txt mb-4">
          ¿Qué estilo te atrae más?
        </h4>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          {...staggerContainer(0.05)}
        >
          {ESTILO_VISUAL_OPTIONS.map((option) => (
            <motion.div key={option.value} variants={staggerChild}>
              <SelectableCard
                icon={option.icon}
                label={option.label}
                description={option.description}
                selected={data.estiloVisual === option.value}
                onClick={() => onChange("estiloVisual", option.value)}
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
        <label
          htmlFor="wizard-referencias"
          className="block text-sm font-semibold text-txt mb-2"
        >
          ¿Hay algún sitio web o app que te guste y quieras usar como
          referencia?
        </label>
        <textarea
          id="wizard-referencias"
          value={data.referenciasVisuales}
          onChange={(e) => onChange("referenciasVisuales", e.target.value)}
          placeholder='Ej: "Me gusta cómo se ve la página de Apple" o "Vi una tienda en línea que me gustó: www.ejemplo.com"'
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4 min-h-[80px] resize-y"
          maxLength={500}
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-txt-4">
            {data.referenciasVisuales.length}/500
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.25 }}
      >
        <p className="text-sm font-semibold text-txt mb-3">
          ¿Tienes logotipo y colores de tu marca?
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {MARCA_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange("tieneMarca", option.value)}
              className={cn(
                "flex-1 px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 cursor-pointer text-center",
                data.tieneMarca === option.value
                  ? "gradient-primary text-white border-transparent shadow-md shadow-primary/20"
                  : "glass-panel border-white/[0.08] text-txt-2 hover:border-primary/20",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default StepEstiloVisual;
