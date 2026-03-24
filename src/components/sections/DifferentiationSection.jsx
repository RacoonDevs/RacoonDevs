import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GradientOrb from "../ui/GradientOrb";
import { Gem, Code2, Smartphone, Target, HeadphonesIcon } from "lucide-react";

const differentiators = [
  {
    icon: Gem,
    title: "Diseño de Clase Mundial",
    description: "Interfaces que impresionan y convierten.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Code2,
    title: "Código de Alta Calidad",
    description: "Arquitectura limpia y escalable.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Perfecto en cada dispositivo.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada decisión orientada al negocio.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Continuo",
    description: "Estamos contigo después del lanzamiento.",
    gradient: "from-amber-500 to-orange-600",
  },
];

const DifferentiationSection = () => (
  <SectionWrapper id="por-que-nosotros">
    <SectionHeading badge="Por Qué Racoon Devs" align="left" />

    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Decorative orb */}
      <GradientOrb
        color="primary"
        size={500}
        className="-top-32 -left-48 opacity-20"
      />

      {/* ─── Left: Editorial text (3/5) ───────────────────────── */}
      <motion.div
        className="lg:col-span-3 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: ease.out }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-txt leading-tight">
          No creamos sitios web genéricos.
          <br />
          Creamos productos digitales
          <br className="hidden sm:block" /> con{" "}
          <span className="gradient-text">propósito.</span>
        </h2>

        <div className="mt-8 space-y-5 max-w-xl">
          <motion.p
            className="text-lg text-txt-2 leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: ease.out }}
          >
            Cada proyecto que tomamos pasa por un proceso riguroso de
            investigación, estrategia y diseño antes de escribir una sola línea
            de código. Entendemos que detrás de cada software hay un negocio con
            metas claras.
          </motion.p>
          <motion.p
            className="text-lg text-txt-2 leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: ease.out }}
          >
            No usamos plantillas ni soluciones genéricas. Construimos desde
            cero, con código limpio y escalable, interfaces que enamoran y una
            arquitectura preparada para crecer contigo. Tu inversión merece
            calidad profesional.
          </motion.p>
        </div>
      </motion.div>

      {/* ─── Right: Feature points (2/5) ──────────────────────── */}
      <div className="lg:col-span-2 relative z-10 flex flex-col justify-center gap-6">
        {differentiators.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: ease.out,
              }}
            >
              {/* Small gradient icon circle */}
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                  item.gradient,
                )}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div>
                <h4 className="font-bold text-txt font-[family-name:var(--font-display)] text-base">
                  {item.title}
                </h4>
                <p className="text-sm text-txt-3 mt-0.5">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </SectionWrapper>
);

export default DifferentiationSection;
