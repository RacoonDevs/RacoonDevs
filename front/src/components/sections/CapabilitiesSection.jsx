import { motion } from "framer-motion";
import {
  Fingerprint,
  Layers,
  Smartphone,
  Gauge,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

/* ─── Mini visual compositions for bento cards ─── */

const PersonalizedVisual = () => (
  <div className="flex items-center gap-2 mt-4">
    {/* Workflow steps */}
    {["Discovery", "Design", "Build"].map((step, i) => (
      <div key={step} className="flex items-center gap-1.5">
        <div
          className={`w-6 h-6 rounded-lg flex items-center justify-center text-[7px] font-semibold ${
            i === 0 ? "bg-white/12 text-white" : "bg-white/[0.04] text-gray-500"
          }`}
        >
          {i + 1}
        </div>
        <span className="text-[8px] text-gray-500">{step}</span>
        {i < 2 && <div className="w-4 h-px bg-white/[0.08]" />}
      </div>
    ))}
  </div>
);

const DesignEngVisual = () => (
  <div className="mt-4 space-y-2">
    {/* Layered UI/code representation */}
    <div className="flex gap-2">
      <div className="flex-1 rounded-md border border-white/[0.08] bg-white/[0.03] p-1.5">
        <div className="text-[6px] text-gray-500 mb-1">UI Design</div>
        <div className="flex gap-0.5">
          <div className="w-3 h-5 rounded-sm bg-white/10" />
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="h-1 bg-white/[0.08] rounded-full" />
            <div className="h-1 w-3/4 bg-white/[0.05] rounded-full" />
            <div className="h-2 bg-white/[0.04] rounded-sm" />
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-md border border-white/[0.08] bg-white/[0.03] p-1.5">
        <div className="text-[6px] text-gray-500 mb-1">Code</div>
        <div className="space-y-0.5">
          {[
            { w: "w-full", c: "bg-white/[0.08]" },
            { w: "w-3/4", c: "bg-white/[0.06]" },
            { w: "w-5/6", c: "bg-white/[0.05]" },
            { w: "w-2/3", c: "bg-white/[0.04]" },
          ].map((line, i) => (
            <div key={i} className={`h-0.5 ${line.w} ${line.c} rounded-full`} />
          ))}
        </div>
      </div>
    </div>
    {/* Connector */}
    <div className="flex items-center justify-center gap-1">
      <div className="h-px flex-1 bg-white/[0.06]" />
      <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
      </div>
      <div className="h-px flex-1 bg-white/[0.06]" />
    </div>
  </div>
);

const ResponsiveVisual = () => (
  <div className="mt-4 flex items-end gap-2 justify-center">
    {/* Desktop */}
    <div className="w-16 h-10 rounded-md border border-white/[0.1] bg-white/[0.03] p-0.5">
      <div className="w-full h-full flex gap-0.5">
        <div className="w-3 bg-white/[0.06] rounded-sm" />
        <div className="flex-1 flex flex-col gap-0.5">
          <div className="h-1 bg-white/[0.08] rounded-full" />
          <div className="flex-1 bg-white/[0.04] rounded-sm" />
        </div>
      </div>
    </div>
    {/* Tablet */}
    <div className="w-9 h-12 rounded-md border border-white/[0.1] bg-white/[0.03] p-0.5">
      <div className="w-full h-full flex flex-col gap-0.5">
        <div className="h-1.5 bg-white/[0.06] rounded-sm" />
        <div className="flex-1 bg-white/[0.04] rounded-sm" />
        <div className="h-1 bg-white/[0.05] rounded-sm" />
      </div>
    </div>
    {/* Mobile */}
    <div className="w-5 h-9 rounded-md border border-white/[0.1] bg-white/[0.03] p-0.5">
      <div className="w-full h-full flex flex-col gap-0.5">
        <div className="h-1 bg-white/[0.06] rounded-sm" />
        <div className="flex-1 bg-white/[0.04] rounded-sm" />
      </div>
    </div>
  </div>
);

const PerformanceVisual = () => (
  <div className="mt-4">
    {/* Performance meters */}
    <div className="space-y-1.5">
      {[
        { label: "Lighthouse", score: "98", pct: 98 },
        { label: "LCP", score: "1.1s", pct: 92 },
        { label: "FID", score: "8ms", pct: 96 },
      ].map((m) => (
        <div key={m.label} className="flex items-center gap-2">
          <span className="text-[7px] text-gray-500 w-12">{m.label}</span>
          <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/20 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${m.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: ease.out }}
            />
          </div>
          <span className="text-[7px] text-white/60 w-6 text-right">
            {m.score}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ScalableVisual = () => (
  <div className="mt-4 flex items-center gap-3">
    {/* Architecture blocks */}
    <div className="flex flex-col gap-1 items-center">
      <div className="w-8 h-5 rounded border border-white/[0.1] bg-white/[0.04] flex items-center justify-center">
        <span className="text-[5px] text-gray-500">Frontend</span>
      </div>
      <div className="w-px h-2 bg-white/[0.08]" />
      <div className="w-8 h-5 rounded border border-white/[0.1] bg-white/[0.04] flex items-center justify-center">
        <span className="text-[5px] text-gray-500">API</span>
      </div>
      <div className="w-px h-2 bg-white/[0.08]" />
      <div className="w-8 h-5 rounded border border-white/[0.1] bg-white/[0.04] flex items-center justify-center">
        <span className="text-[5px] text-gray-500">DB</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-0.5 text-[6px] text-gray-600">
      <span>→ Modular</span>
      <span>→ Documentado</span>
      <span>→ Testeable</span>
      <span>→ CI/CD Ready</span>
    </div>
  </div>
);

const differentiators = [
  {
    icon: Fingerprint,
    title: "Proceso Altamente Personalizado",
    description:
      "Cada proyecto se aborda desde cero, entendiendo tu negocio, tus usuarios y tus objetivos antes de escribir una sola línea de código.",
    className: "md:col-span-2 md:row-span-1",
    visual: PersonalizedVisual,
  },
  {
    icon: Layers,
    title: "Diseño + Ingeniería Integrados",
    description:
      "No separamos diseño de desarrollo. Nuestro equipo piensa en UI/UX y arquitectura al mismo tiempo, eliminando fricción y acelerando resultados.",
    className: "md:col-span-1 md:row-span-2",
    visual: DesignEngVisual,
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Responsivo",
    description:
      "Diseñamos y construimos desde mobile hacia arriba, garantizando que tu producto se vea impecable en cualquier dispositivo.",
    className: "md:col-span-1 md:row-span-1",
    visual: ResponsiveVisual,
  },
  {
    icon: Gauge,
    title: "Performance-Conscious",
    description:
      "Código optimizado, carga rápida, zero bloat. Tu producto no solo se ve bien, rinde bien.",
    className: "md:col-span-1 md:row-span-1",
    visual: PerformanceVisual,
  },
  {
    icon: Briefcase,
    title: "Entendemos Negocio",
    description:
      "No solo escribimos código. Entendemos conversión, retención, flujos de usuario y métricas que importan a tu operación.",
    className: "md:col-span-1 md:row-span-1",
    visual: null,
  },
  {
    icon: ShieldCheck,
    title: "Sistemas Preparados para el Futuro",
    description:
      "Arquitectura limpia, modular y documentada. Tu producto puede escalar, integrar nuevas features y mantenerse sin dolor.",
    className: "md:col-span-2 md:row-span-1",
    visual: ScalableVisual,
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="por-que" className="relative py-20 sm:py-24 lg:py-32">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.p
              className="text-sm tracking-widest uppercase text-gray-500 mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Por qué Racoon Devs
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              No somos una fábrica de código.{" "}
              <span className="text-gray-400">
                Somos tu equipo de producto digital.
              </span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-colors duration-500 ${item.className}`}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  {/* Visual composition */}
                  {item.visual && <item.visual />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
