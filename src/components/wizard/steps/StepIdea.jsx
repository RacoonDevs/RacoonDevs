import { motion } from "framer-motion";
import { ease } from "../../../utils/motion";

const StepIdea = ({ data, onChange }) => (
  <div>
    <p className="text-txt-2 text-lg mb-8 text-center">
      Ayúdanos a entender mejor tu proyecto. No te preocupes por usar
      términos técnicos, cuéntanoslo con tus palabras.
    </p>

    <div className="space-y-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out }}
      >
        <label
          htmlFor="wizard-problema"
          className="block text-sm font-semibold text-txt mb-2"
        >
          ¿Qué problema quieres resolver o qué necesidad tienes?
        </label>
        <textarea
          id="wizard-problema"
          value={data.problema}
          onChange={(e) => onChange("problema", e.target.value)}
          placeholder='Ej: "Necesito que mis clientes puedan agendar citas en línea" o "Quiero vender mis productos por internet"'
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4 min-h-[120px] resize-y"
          maxLength={500}
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-txt-4">
            {data.problema.length}/500
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.1 }}
      >
        <label
          htmlFor="wizard-usuarios"
          className="block text-sm font-semibold text-txt mb-2"
        >
          ¿Quiénes van a usar esto?
        </label>
        <textarea
          id="wizard-usuarios"
          value={data.usuarios}
          onChange={(e) => onChange("usuarios", e.target.value)}
          placeholder='Ej: "Mis clientes que buscan servicios de belleza" o "Mi equipo de ventas para dar seguimiento a pedidos"'
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4 min-h-[100px] resize-y"
          maxLength={300}
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-txt-4">
            {data.usuarios.length}/300
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

export default StepIdea;
