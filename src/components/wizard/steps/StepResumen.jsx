import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import GlassCard from "../../ui/GlassCard";
import {
  getProjectTypeLabel,
  getEstiloVisualLabel,
  getTimelineLabel,
  getBudgetLabel,
  getMarcaLabel,
  getContactoPreferidoLabel,
} from "../../../data/wizardData";
import { ease } from "../../../utils/motion";

const SummaryCard = ({ title, onEdit, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: ease.out, delay }}
  >
    <GlassCard hover={false} className="relative">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-primary uppercase tracking-wider">
          {title}
        </h4>
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1.5 text-xs font-medium text-txt-3 hover:text-primary transition-colors cursor-pointer"
        >
          <Pencil className="w-3.5 h-3.5" />
          Editar
        </button>
      </div>
      {children}
    </GlassCard>
  </motion.div>
);

const Field = ({ label, value }) =>
  value ? (
    <p className="text-sm text-txt-2 mb-1.5">
      <span className="font-semibold text-txt">{label}:</span> {value}
    </p>
  ) : null;

const StepResumen = ({ data, onGoToStep }) => (
  <div>
    <p className="text-txt-2 text-lg mb-8 text-center">
      Revisa que todo esté bien. Si necesitas cambiar algo, usa el botón
      &quot;Editar&quot; en cada sección.
    </p>

    <div className="space-y-4 max-w-2xl mx-auto">
      <SummaryCard
        title="Tipo de proyecto"
        onEdit={() => onGoToStep(0)}
        delay={0}
      >
        <p className="text-txt font-medium">
          {getProjectTypeLabel(data.tipoProyecto)}
        </p>
      </SummaryCard>

      <SummaryCard
        title="Tu idea"
        onEdit={() => onGoToStep(1)}
        delay={0.05}
      >
        <Field label="Problema o necesidad" value={data.problema} />
        <Field label="Usuarios" value={data.usuarios} />
      </SummaryCard>

      <SummaryCard
        title="Funcionalidades"
        onEdit={() => onGoToStep(2)}
        delay={0.1}
      >
        {data.funcionalidades.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {data.funcionalidades.map((f) => (
              <span
                key={f}
                className="px-3 py-1 rounded-full text-xs font-medium gradient-primary text-white"
              >
                {f}
              </span>
            ))}
          </div>
        )}
        <Field label="Extra" value={data.funcionalidadesExtra} />
      </SummaryCard>

      <SummaryCard
        title="Estilo visual"
        onEdit={() => onGoToStep(3)}
        delay={0.15}
      >
        <Field
          label="Estilo"
          value={getEstiloVisualLabel(data.estiloVisual)}
        />
        <Field label="Referencias" value={data.referenciasVisuales} />
        {data.tieneMarca && (
          <Field label="Marca" value={getMarcaLabel(data.tieneMarca)} />
        )}
      </SummaryCard>

      <SummaryCard
        title="Tiempo y presupuesto"
        onEdit={() => onGoToStep(4)}
        delay={0.2}
      >
        <Field label="Timeline" value={getTimelineLabel(data.timeline)} />
        {data.presupuesto && (
          <Field
            label="Presupuesto"
            value={getBudgetLabel(data.presupuesto)}
          />
        )}
        <Field label="Comentarios" value={data.comentariosExtra} />
      </SummaryCard>

      <SummaryCard
        title="Datos de contacto"
        onEdit={() => onGoToStep(5)}
        delay={0.25}
      >
        <Field label="Nombre" value={data.nombre} />
        <Field label="Email" value={data.email} />
        <Field label="Teléfono" value={data.telefono} />
        {data.contactoPreferido && (
          <Field
            label="Medio preferido"
            value={getContactoPreferidoLabel(data.contactoPreferido)}
          />
        )}
      </SummaryCard>
    </div>
  </div>
);

export default StepResumen;
