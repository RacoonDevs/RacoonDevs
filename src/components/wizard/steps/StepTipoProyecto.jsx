import { motion } from "framer-motion";
import SelectableCard from "../SelectableCard";
import { PROJECT_TYPE_OPTIONS } from "../../../data/wizardData";
import { staggerContainer, staggerChild } from "../../../utils/motion";

const StepTipoProyecto = ({ data, onChange }) => (
  <div>
    <p className="text-txt-2 text-lg mb-8 text-center">
      Primero lo primero. ¿Qué tipo de proyecto te gustaría crear?
    </p>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      {...staggerContainer(0.06)}
    >
      {PROJECT_TYPE_OPTIONS.map((option) => (
        <motion.div key={option.value} variants={staggerChild}>
          <SelectableCard
            icon={option.icon}
            label={option.label}
            description={option.description}
            selected={data.tipoProyecto === option.value}
            onClick={() => onChange("tipoProyecto", option.value)}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default StepTipoProyecto;
