import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { CONTACTO_PREFERIDO_OPTIONS } from "../../../data/wizardData";
import { ease } from "../../../utils/motion";

const StepContacto = ({ data, onChange }) => (
  <div>
    <p className="text-txt-2 text-lg mb-8 text-center">
      Por último, déjanos tus datos para ponernos en contacto contigo y
      platicar sobre tu proyecto.
    </p>

    <div className="space-y-5 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out }}
      >
        <label
          htmlFor="wizard-nombre"
          className="block text-sm font-semibold text-txt mb-2"
        >
          Tu nombre
        </label>
        <input
          id="wizard-nombre"
          type="text"
          value={data.nombre}
          onChange={(e) => onChange("nombre", e.target.value)}
          placeholder="¿Cómo te llamas?"
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4"
          maxLength={100}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.08 }}
      >
        <label
          htmlFor="wizard-email"
          className="block text-sm font-semibold text-txt mb-2"
        >
          Tu email
        </label>
        <input
          id="wizard-email"
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="correo@ejemplo.com"
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4"
          maxLength={255}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.16 }}
      >
        <label
          htmlFor="wizard-telefono"
          className="block text-sm font-semibold text-txt mb-2"
        >
          Tu teléfono{" "}
          <span className="text-txt-3 font-normal">
            (opcional - para contactarte por WhatsApp)
          </span>
        </label>
        <input
          id="wizard-telefono"
          type="tel"
          value={data.telefono}
          onChange={(e) => onChange("telefono", e.target.value)}
          placeholder="33 1234 5678"
          className="glass-input w-full rounded-xl px-4 py-3 text-txt placeholder:text-txt-4"
          maxLength={20}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.24 }}
      >
        <p className="text-sm font-semibold text-txt mb-3">
          ¿Cómo prefieres que te contactemos?{" "}
          <span className="text-txt-3 font-normal">(opcional)</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {CONTACTO_PREFERIDO_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                onChange(
                  "contactoPreferido",
                  data.contactoPreferido === option.value ? "" : option.value,
                )
              }
              className={cn(
                "flex-1 px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 cursor-pointer text-center",
                data.contactoPreferido === option.value
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

export default StepContacto;
