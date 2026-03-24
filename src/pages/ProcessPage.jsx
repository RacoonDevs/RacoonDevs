import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import ProcessSection from "../components/sections/ProcessSection";
import { cn } from "../utils/cn";
import { ease, staggerContainer, staggerChild } from "../utils/motion";
import { useNavigateToSection } from "../components/utils/NavigateToSection";
import {
  ArrowRight,
  Fingerprint,
  Layers,
  Smartphone,
  Gauge,
  Briefcase,
  ShieldCheck,
  Server,
  Blocks,
  RefreshCw,
  Cloud,
  Plug,
} from "lucide-react";

/* ── Mini visual compositions for bento cards ── */

const PersonalizedVisual = () => (
  <div className="flex items-center gap-2 mt-4">
    {["Discovery", "Design", "Build"].map((step, i) => (
      <div key={step} className="flex items-center gap-1.5">
        <div
          className={cn(
            "w-6 h-6 rounded-lg flex items-center justify-center text-[7px] font-semibold",
            i === 0
              ? "bg-gradient-to-br from-violet-500/20 to-purple-500/15 text-violet-600 dark:text-violet-400"
              : i === 1
                ? "bg-pink-500/[0.08] text-pink-500"
                : "bg-cyan-500/[0.08] text-cyan-500",
          )}
        >
          {i + 1}
        </div>
        <span className="text-[8px] text-txt-3">{step}</span>
        {i < 2 && <div className="w-4 h-px bg-primary/[0.12]" />}
      </div>
    ))}
  </div>
);

const DesignEngVisual = () => (
  <div className="mt-4 space-y-2">
    <div className="flex gap-2">
      <div className="flex-1 rounded-md border border-pink-500/[0.12] bg-pink-500/[0.04] p-1.5">
        <div className="text-[6px] text-pink-600 dark:text-pink-400 mb-1">
          UI Design
        </div>
        <div className="flex gap-0.5">
          <div className="w-3 h-5 rounded-sm bg-pink-500/10" />
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="h-1 bg-pink-500/[0.1] rounded-full" />
            <div className="h-1 w-3/4 bg-pink-500/[0.06] rounded-full" />
            <div className="h-2 bg-pink-500/[0.04] rounded-sm" />
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-md border border-cyan-500/[0.12] bg-cyan-500/[0.04] p-1.5">
        <div className="text-[6px] text-cyan-600 dark:text-cyan-400 mb-1">
          Code
        </div>
        <div className="space-y-0.5">
          {[
            { w: "w-full", c: "bg-cyan-500/[0.12]" },
            { w: "w-3/4", c: "bg-cyan-500/[0.09]" },
            { w: "w-5/6", c: "bg-cyan-500/[0.07]" },
            { w: "w-2/3", c: "bg-cyan-500/[0.05]" },
          ].map((line, i) => (
            <div key={i} className={`h-0.5 ${line.w} ${line.c} rounded-full`} />
          ))}
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center gap-1">
      <div className="h-px flex-1 bg-primary/[0.1]" />
      <div className="w-4 h-4 rounded-full border border-primary/15 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
      </div>
      <div className="h-px flex-1 bg-primary/[0.1]" />
    </div>
  </div>
);

const ResponsiveVisual = () => (
  <div className="mt-4 flex items-end gap-2 justify-center">
    <div className="w-16 h-10 rounded-md border border-violet-500/15 bg-violet-500/[0.04] p-0.5">
      <div className="w-full h-full flex gap-0.5">
        <div className="w-3 bg-violet-500/[0.1] rounded-sm" />
        <div className="flex-1 flex flex-col gap-0.5">
          <div className="h-1 bg-violet-500/[0.12] rounded-full" />
          <div className="flex-1 bg-violet-500/[0.06] rounded-sm" />
        </div>
      </div>
    </div>
    <div className="w-9 h-12 rounded-md border border-cyan-500/15 bg-cyan-500/[0.04] p-0.5">
      <div className="w-full h-full flex flex-col gap-0.5">
        <div className="h-1.5 bg-cyan-500/[0.1] rounded-sm" />
        <div className="flex-1 bg-cyan-500/[0.06] rounded-sm" />
        <div className="h-1 bg-cyan-500/[0.08] rounded-sm" />
      </div>
    </div>
    <div className="w-5 h-9 rounded-md border border-emerald-500/15 bg-emerald-500/[0.04] p-0.5">
      <div className="w-full h-full flex flex-col gap-0.5">
        <div className="h-1 bg-emerald-500/[0.1] rounded-sm" />
        <div className="flex-1 bg-emerald-500/[0.06] rounded-sm" />
      </div>
    </div>
  </div>
);

const PerformanceVisual = () => (
  <div className="mt-4">
    <div className="space-y-1.5">
      {[
        {
          label: "Lighthouse",
          score: "98",
          pct: 98,
          color: "bg-gradient-to-r from-emerald-400 to-emerald-500",
        },
        {
          label: "LCP",
          score: "1.1s",
          pct: 92,
          color: "bg-gradient-to-r from-cyan-400 to-cyan-500",
        },
        {
          label: "FID",
          score: "8ms",
          pct: 96,
          color: "bg-gradient-to-r from-violet-400 to-violet-500",
        },
      ].map((m) => (
        <div key={m.label} className="flex items-center gap-2">
          <span className="text-[7px] text-txt-3 w-12">{m.label}</span>
          <div className="flex-1 h-1 bg-primary/[0.06] rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${m.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${m.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: ease.out }}
            />
          </div>
          <span className="text-[7px] text-txt-3 w-6 text-right">
            {m.score}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ScalableVisual = () => (
  <div className="mt-4 flex items-center gap-3">
    <div className="flex flex-col gap-1 items-center">
      {[
        { label: "Frontend", color: "border-cyan-500/15 bg-cyan-500/[0.06]" },
        { label: "API", color: "border-violet-500/15 bg-violet-500/[0.06]" },
        { label: "DB", color: "border-emerald-500/15 bg-emerald-500/[0.06]" },
      ].map((block, i) => (
        <div key={block.label}>
          <div
            className={`w-8 h-5 rounded border ${block.color} flex items-center justify-center`}
          >
            <span className="text-[5px] text-txt-3">{block.label}</span>
          </div>
          {i < 2 && <div className="w-px h-2 bg-primary/[0.12] mx-auto" />}
        </div>
      ))}
    </div>
    <div className="flex-1 flex flex-col gap-0.5 text-[6px] text-txt-3">
      <span className="text-cyan-600 dark:text-cyan-400">→ Modular</span>
      <span className="text-violet-600 dark:text-violet-400">
        → Documentado
      </span>
      <span className="text-emerald-600 dark:text-emerald-400">
        → Testeable
      </span>
      <span className="text-amber-600 dark:text-amber-400">→ CI/CD Ready</span>
    </div>
  </div>
);

/* ── Data ── */

const differentiators = [
  {
    icon: Fingerprint,
    title: "Proceso Altamente Personalizado",
    description:
      "Cada proyecto se aborda desde cero, entendiendo tu negocio, tus usuarios y tus objetivos antes de escribir una sola linea de codigo.",
    className: "md:col-span-2 md:row-span-1",
    visual: PersonalizedVisual,
    accent: "violet",
  },
  {
    icon: Layers,
    title: "Diseno + Ingenieria Integrados",
    description:
      "No separamos diseno de desarrollo. Nuestro equipo piensa en UI/UX y arquitectura al mismo tiempo, eliminando friccion y acelerando resultados.",
    className: "md:col-span-1 md:row-span-2",
    visual: DesignEngVisual,
    accent: "pink",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Responsivo",
    description:
      "Disenamos y construimos desde mobile hacia arriba, garantizando que tu producto se vea impecable en cualquier dispositivo.",
    className: "md:col-span-1 md:row-span-1",
    visual: ResponsiveVisual,
    accent: "cyan",
  },
  {
    icon: Gauge,
    title: "Performance-Conscious",
    description:
      "Codigo optimizado, carga rapida, zero bloat. Tu producto no solo se ve bien, rinde bien.",
    className: "md:col-span-1 md:row-span-1",
    visual: PerformanceVisual,
    accent: "emerald",
  },
  {
    icon: Briefcase,
    title: "Entendemos Negocio",
    description:
      "No solo escribimos codigo. Entendemos conversion, retencion, flujos de usuario y metricas que importan a tu operacion.",
    className: "md:col-span-1 md:row-span-1",
    visual: null,
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Sistemas Preparados para el Futuro",
    description:
      "Arquitectura limpia, modular y documentada. Tu producto puede escalar, integrar nuevas features y mantenerse sin dolor.",
    className: "md:col-span-2 md:row-span-1",
    visual: ScalableVisual,
    accent: "blue",
  },
];

const accentStyles = {
  violet: {
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    border: "hover:border-violet-500/20",
    shadow: "hover:shadow-violet-500/10",
  },
  pink: {
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    border: "hover:border-pink-500/20",
    shadow: "hover:shadow-pink-500/10",
  },
  cyan: {
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
    border: "hover:border-cyan-500/20",
    shadow: "hover:shadow-cyan-500/10",
  },
  emerald: {
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    border: "hover:border-emerald-500/20",
    shadow: "hover:shadow-emerald-500/10",
  },
  amber: {
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    border: "hover:border-amber-500/20",
    shadow: "hover:shadow-amber-500/10",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    border: "hover:border-blue-500/20",
    shadow: "hover:shadow-blue-500/10",
  },
};

const techFeatures = [
  {
    icon: Blocks,
    title: "Arquitectura Modular",
    description:
      "Componentes reutilizables y separacion de responsabilidades que facilitan mantenimiento y evolucion.",
    gradient: "from-violet-500 to-purple-600",
    border: "hover:border-violet-500/20",
    shadow: "hover:shadow-violet-500/10",
  },
  {
    icon: Server,
    title: "Backend Escalable",
    description:
      "APIs RESTful robustas, bases de datos optimizadas y servicios que crecen con tu demanda.",
    gradient: "from-cyan-500 to-teal-600",
    border: "hover:border-cyan-500/20",
    shadow: "hover:shadow-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "Frontend Responsivo",
    description:
      "Interfaces que se adaptan a cada dispositivo con rendimiento optimo y carga progresiva.",
    gradient: "from-pink-500 to-rose-600",
    border: "hover:border-pink-500/20",
    shadow: "hover:shadow-pink-500/10",
  },
  {
    icon: Plug,
    title: "Integraciones & APIs",
    description:
      "Conectamos tu producto con pasarelas de pago, CRMs, ERPs, servicios de terceros y herramientas internas.",
    gradient: "from-amber-500 to-orange-600",
    border: "hover:border-amber-500/20",
    shadow: "hover:shadow-amber-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready",
    description:
      "Deploys automatizados, contenedores y configuraciones listas para escalar en la nube.",
    gradient: "from-emerald-500 to-green-600",
    border: "hover:border-emerald-500/20",
    shadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: RefreshCw,
    title: "Codigo Mantenible",
    description:
      "Testing, documentacion, CI/CD y buenas practicas para que tu equipo pueda continuar el desarrollo.",
    gradient: "from-blue-500 to-indigo-600",
    border: "hover:border-blue-500/20",
    shadow: "hover:shadow-blue-500/10",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Appwrite",
  "AWS",
  "Vercel",
];

const stackColors = [
  "border-cyan-500/15 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]",
  "border-violet-500/15 hover:border-violet-500/30 hover:bg-violet-500/[0.06]",
  "border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/[0.06]",
  "border-emerald-500/15 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]",
  "border-amber-500/15 hover:border-amber-500/30 hover:bg-amber-500/[0.06]",
  "border-pink-500/15 hover:border-pink-500/30 hover:bg-pink-500/[0.06]",
  "border-indigo-500/15 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]",
  "border-teal-500/15 hover:border-teal-500/30 hover:bg-teal-500/[0.06]",
  "border-red-500/15 hover:border-red-500/30 hover:bg-red-500/[0.06]",
  "border-cyan-500/15 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]",
  "border-violet-500/15 hover:border-violet-500/30 hover:bg-violet-500/[0.06]",
  "border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/[0.06]",
  "border-emerald-500/15 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]",
  "border-pink-500/15 hover:border-pink-500/30 hover:bg-pink-500/[0.06]",
  "border-amber-500/15 hover:border-amber-500/30 hover:bg-amber-500/[0.06]",
  "border-indigo-500/15 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]",
];

/* ── Page Component ── */

const ProcessPage = () => {
  const navigateToSection = useNavigateToSection();

  return (
    <PageLayout>
      <SEOHead
        title="Nuestro Proceso | Racoon Devs"
        description="Conoce nuestro proceso de desarrollo: descubrimiento, estrategia, diseno, desarrollo y lanzamiento."
        canonical="https://racoondevs.com/proceso"
      />

      {/* ── Hero ── */}
      <section className="relative py-20 sm:py-24 lg:py-32">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-6"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: ease.out }}
              >
                <span className="text-sm tracking-widest uppercase text-primary font-medium">
                  Nuestro Enfoque
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-txt leading-tight mb-6">
                Como convertimos{" "}
                <span className="gradient-text">
                  ideas en productos digitales.
                </span>
              </h1>
              <p className="text-txt-2 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Nuestro proceso combina estrategia, diseno y tecnologia para
                crear productos que realmente funcionan. Cada decision tiene un
                proposito.
              </p>
              <motion.button
                onClick={() => navigateToSection("/#contacto")}
                className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-full font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Iniciar un Proyecto
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <ProcessSection />

      {/* ── Capabilities / Por qué Racoon Devs ── */}
      <section className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.06]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
            <motion.div
              className="mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-4"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: ease.out }}
              >
                <span className="text-sm tracking-widest uppercase text-primary font-medium">
                  Por que Racoon Devs
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-2xl leading-tight">
                No somos una fabrica de codigo.{" "}
                <span className="gradient-text">
                  Somos tu equipo de producto digital.
                </span>
              </h2>
            </motion.div>

            <motion.div
              {...staggerContainer(0.1)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
            >
              {differentiators.map((item) => {
                const colors = accentStyles[item.accent];
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerChild}
                    className={cn(
                      "group relative p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08] transition-all duration-500 shadow-sm hover:shadow-xl",
                      colors.border,
                      colors.shadow,
                      item.className,
                    )}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: ease.smooth },
                    }}
                  >
                    <div className="relative z-10">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center mb-5 shadow-lg",
                          colors.iconBg,
                        )}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-txt mb-3">
                        {item.title}
                      </h3>
                      <p className="text-txt-2 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                      {item.visual && <item.visual />}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Technology & Scalability ── */}
      <section className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
            <motion.div
              className="text-center mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/[0.08] border border-secondary/[0.15] mb-4 mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: ease.out }}
              >
                <span className="text-sm tracking-widest uppercase text-secondary font-medium">
                  Tecnologia & Escalabilidad
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-3xl mx-auto leading-tight">
                Construimos productos que{" "}
                <span className="gradient-text">escalan con tu negocio</span>
              </h2>
              <p className="text-txt-2 text-lg max-w-2xl mx-auto leading-relaxed">
                Cada decision tecnica esta orientada a que tu producto sea
                rapido, mantenible y preparado para crecer.
              </p>
            </motion.div>

            <motion.div
              {...staggerContainer(0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            >
              {techFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerChild}
                  className={cn(
                    "group relative p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08] transition-all duration-500 shadow-sm hover:shadow-xl",
                    feature.border,
                    feature.shadow,
                  )}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.3, ease: ease.smooth },
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg",
                        feature.gradient,
                      )}
                    >
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-txt mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-txt-2 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stack Bar */}
            <motion.div
              className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: ease.out }}
            >
              <p className="text-sm text-txt-3 tracking-widest uppercase mb-6 text-center">
                Stack que dominamos
              </p>
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4, ease: ease.out },
                      },
                    }}
                    className={cn(
                      "px-3 py-1.5 rounded-lg border bg-surface-alt/50 text-txt-2 text-sm font-medium hover:text-txt transition-all duration-300",
                      stackColors[i],
                    )}
                    whileHover={{ scale: 1.06 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-24 lg:py-32 border-t border-primary/[0.06]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-txt-2 text-lg mb-8 max-w-lg mx-auto">
                Cuentanos tu idea y diseñamos la solucion perfecta para tu
                negocio.
              </p>
              <motion.button
                onClick={() => navigateToSection("/#contacto")}
                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white rounded-full font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProcessPage;
