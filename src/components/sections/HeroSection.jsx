import { useRef, useEffect, Fragment } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ease } from "../../utils/motion";
import SectionBadge from "../ui/SectionBadge";
import Button from "../ui/Button";
import {
  Globe,
  Star,
  Code2,
  Smartphone,
  Zap,
  Terminal,
  Sparkles,
} from "lucide-react";
import heroBg from "../../assets/jdfuu8.webp";

/* ─── Word-by-word blur reveal ─── */
const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.25 } },
};

const wordVariant = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 14 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

/* ─── Hero-specific animated background ─── */
const HeroBackground = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    {/* Background image — LCP element, no lazy loading */}
    <img
      src={heroBg}
      alt="Fondo animado de servicios de desarrollo y creación de páginas web en Puerto Vallarta"
      width={1920}
      height={600}
      className="absolute inset-0 w-full h-full object-cover dark:opacity-15 opacity-70"
      fetchPriority="high"
      decoding="async"
    />

    {/* Tint overlay to blend with theme tokens */}
    <div className="absolute inset-0 bg-surface/40 dark:bg-surface/85" />

    {/* Subtle animated orbs on top of the photo */}
    <motion.div
      className="absolute -top-[30%] -right-[15%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl"
      animate={{ scale: [1, 1.2, 1], rotate: [0, 8, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-[25%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-secondary/12 via-secondary/4 to-transparent blur-3xl"
      animate={{ scale: [1, 1.15, 1], rotate: [0, -6, 0] }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    {/* Dot grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.035] dark:opacity-[0.02]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgb(var(--primary-rgb) / 0.35) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    {/* Floating geometric shapes to fill dead space */}
    <motion.div
      className="absolute top-[12%] left-[7%] w-16 h-16 rounded-2xl border border-primary/[0.08] bg-primary/[0.02] hidden lg:block"
      animate={{ y: [-8, 8, -8], rotate: [0, 6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[70%] left-[4%] w-10 h-10 rounded-full border border-secondary/[0.08] bg-secondary/[0.02] hidden lg:block"
      animate={{ y: [6, -6, 6] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute top-[8%] right-[12%] w-3 h-3 rounded-full bg-primary/20"
      animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[45%] left-[18%] w-2 h-2 rounded-full bg-secondary/25 hidden lg:block"
      animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.4, 0.15] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute bottom-[20%] right-[6%] w-2.5 h-2.5 rounded-full bg-accent/20"
      animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.4, 0.15] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />
    <motion.div
      className="absolute top-[55%] right-[45%] w-1.5 h-1.5 rounded-full bg-primary/15 hidden lg:block"
      animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.35, 0.1] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    />

    {/* Decorative lines — subtle connection feel */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.015] hidden lg:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10%"
        y1="20%"
        x2="45%"
        y2="50%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
      />
      <line
        x1="50%"
        y1="15%"
        x2="85%"
        y2="40%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-secondary"
      />
      <line
        x1="30%"
        y1="75%"
        x2="70%"
        y2="60%"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
      />
    </svg>
  </div>
);

/* ─── Code lines for the floating workspace ─── */
const codeLines = [
  { text: "const app = createApp({", color: "text-primary" },
  { text: '  name: "tu-proyecto",', color: "text-secondary" },
  { text: "  responsive: true,", color: "text-txt-2" },
  { text: "  seo: optimized,", color: "text-emerald-400" },
  { text: "  speed: blazing,", color: "text-amber-400" },
  { text: "});", color: "text-primary" },
];

/* ─── Floating Workspace — large interactive composition ─── */
const FloatingWorkspace = ({ springX, springY }) => {
  const rotateX = useTransform(springY, [-20, 20], [5, -5]);
  const rotateY = useTransform(springX, [-30, 30], [-5, 5]);

  return (
    <motion.div
      className="relative w-full max-w-[520px] xl:max-w-[580px] mx-auto lg:mx-0"
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
    >
      {/* ── Main browser window ── */}
      <motion.div
        className="relative glass-panel rounded-2xl border border-primary/[0.12] overflow-hidden shadow-2xl shadow-primary/[0.12]"
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: ease.out }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-primary/[0.08] bg-surface-alt/60">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
          <div className="ml-4 flex-1 h-7 bg-primary/[0.05] rounded-lg flex items-center px-3">
            <Globe className="w-3.5 h-3.5 text-txt-3 mr-2 flex-shrink-0" />
            <span className="text-xs text-txt-3 font-mono truncate">
              racoon.devs ~ tu-proyecto
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Split: Website preview + Code */}
        <div className="grid grid-cols-5">
          {/* Website preview panel */}
          <div className="col-span-3 p-4 sm:p-5 border-r border-primary/[0.06] space-y-3">
            {/* Mini navigation bar */}
            <div className="h-8 rounded-lg gradient-primary flex items-center px-3">
              <div className="w-14 h-2 bg-white/40 rounded" />
              <div className="ml-auto flex gap-2">
                <div className="w-7 h-1.5 bg-white/30 rounded" />
                <div className="w-7 h-1.5 bg-white/30 rounded" />
                <div className="w-7 h-1.5 bg-white/30 rounded hidden sm:block" />
              </div>
            </div>

            {/* Mini hero content */}
            <motion.div
              className="space-y-2 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="h-3 w-4/5 bg-txt/10 rounded" />
              <div className="h-3 w-3/5 bg-primary/20 rounded" />
              <div className="h-2 w-full bg-txt/[0.04] rounded mt-3" />
              <div className="h-2 w-5/6 bg-txt/[0.04] rounded" />
            </motion.div>

            {/* Mini CTA buttons */}
            <motion.div
              className="flex gap-2 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="h-5 w-16 sm:h-6 sm:w-20 rounded-full gradient-primary" />
              <div className="h-5 w-14 sm:h-6 sm:w-16 rounded-full border border-primary/20" />
            </motion.div>

            {/* Mini feature cards */}
            <motion.div
              className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-12 sm:h-14 rounded-lg bg-primary/[0.04] border border-primary/[0.08] p-1.5 sm:p-2"
                >
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded bg-primary/10 mb-1" />
                  <div className="w-full h-1.5 bg-txt/[0.04] rounded" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Code panel */}
          <div className="col-span-2 p-3 sm:p-4 bg-surface-deep/30 font-mono text-[10px] sm:text-[11px] space-y-1.5">
            <div className="flex items-center gap-1.5 mb-3">
              <Terminal className="w-3 h-3 text-primary" />
              <span className="text-[8px] sm:text-[9px] text-txt-3 uppercase tracking-wider">
                código
              </span>
            </div>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                className={`${line.color} opacity-80 truncate`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{
                  delay: 0.8 + i * 0.12,
                  duration: 0.4,
                  ease: ease.out,
                }}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.div
              className="flex items-center gap-1 mt-3 pt-2 border-t border-primary/[0.06]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
            >
              <span className="text-emerald-400">✓</span>
              <span className="text-emerald-400/70 text-[9px] sm:text-[10px]">
                Build exitoso
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom metrics bar — Lighthouse scores */}
        <motion.div
          className="flex items-center justify-around px-4 py-3 border-t border-primary/[0.06] bg-surface-alt/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          {[
            { label: "Performance", value: "98", color: "text-emerald-400" },
            { label: "SEO", value: "100", color: "text-primary" },
            { label: "Accesibilidad", value: "95", color: "text-secondary" },
            { label: "Best Practices", value: "100", color: "text-amber-400" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <p className={`text-sm sm:text-base font-bold ${metric.color}`}>
                {metric.value}
              </p>
              <p className="text-[7px] sm:text-[8px] text-txt-3 leading-tight mt-0.5">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Floating badges — larger and more prominent ── */}

      {/* Rating badge */}
      <motion.div
        className="absolute -bottom-6 -left-4 lg:-left-8 glass-panel rounded-xl px-4 py-3 border border-primary/[0.12] flex items-center gap-3 shadow-xl shadow-primary/[0.06]"
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: ease.out }}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
            />
          ))}
        </div>
        <div>
          <p className="text-sm font-bold text-txt leading-none">5.0</p>
          <p className="text-[10px] text-txt-3 leading-none mt-0.5">
            4 reseñas
          </p>
        </div>
      </motion.div>

      {/* New project badge */}
      <motion.div
        className="absolute -top-6 -right-2 lg:-right-6 xl:-right-8 glass-panel rounded-xl px-4 py-3 border border-primary/[0.12] flex items-center gap-2.5 shadow-xl shadow-primary/[0.06]"
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6, ease: ease.out }}
      >
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-txt leading-none">
            Nuevo proyecto
          </p>
          <p className="text-[10px] text-txt-3 leading-none mt-1">
            Puerto Vallarta
          </p>
        </div>
      </motion.div>

      {/* Tech stack badge */}
      <motion.div
        className="absolute top-[30%] -left-4 lg:-left-14 xl:-left-16 glass-panel rounded-xl px-3.5 py-2.5 border border-secondary/[0.15] shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5, ease: ease.out }}
      >
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-secondary flex-shrink-0" />
          <div className="flex gap-1">
            {["React", "Node"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-secondary/[0.1] text-[9px] text-secondary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile ready badge */}
      <motion.div
        className="absolute bottom-[28%] -right-3 lg:-right-8 xl:-right-10 glass-panel rounded-xl px-3.5 py-2.5 border border-primary/[0.12] flex items-center gap-2 shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.1, duration: 0.5, ease: ease.out }}
      >
        <Smartphone className="w-4 h-4 text-primary" />
        <span className="text-[10px] text-txt font-medium">Mobile Ready</span>
      </motion.div>

      {/* Speed badge */}
      <motion.div
        className="absolute top-[58%] -left-4 lg:-left-10 glass-panel rounded-full px-3 py-1.5 border border-emerald-400/[0.2] flex items-center gap-1.5"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5, ease: ease.out }}
      >
        <Zap className="w-3 h-3 text-emerald-400" />
        <span className="text-[9px] text-emerald-400 font-semibold">
          Ultra rápido
        </span>
      </motion.div>
    </motion.div>
  );
};

/* ─── Condensed mobile visual (shown below subtitle on small screens) ─── */
const MobileVisual = () => (
  <motion.div
    className="lg:hidden mt-8 relative mx-auto max-w-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.7, ease: ease.out }}
    aria-hidden="true"
  >
    <div className="glass-panel rounded-xl border border-primary/[0.12] overflow-hidden shadow-xl shadow-primary/[0.08]">
      {/* Mini chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/[0.08] bg-surface-alt/50">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="ml-3 flex-1 h-5 bg-primary/[0.05] rounded-md flex items-center px-2">
          <span className="text-[9px] text-txt-3 font-mono truncate">
            tu-proyecto.com
          </span>
        </div>
        <span className="flex items-center gap-1 text-[8px] text-emerald-400 font-semibold">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Metrics row */}
      <div className="flex items-center justify-around px-3 py-3">
        {[
          { label: "Performance", value: "98", color: "text-emerald-400" },
          { label: "SEO", value: "100", color: "text-primary" },
          { label: "Accesibilidad", value: "95", color: "text-secondary" },
          { label: "Best Pract.", value: "100", color: "text-amber-400" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className={`text-base font-bold ${m.color}`}>{m.value}</p>
            <p className="text-[7px] text-txt-3">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center justify-center gap-1.5 px-3 pb-3">
        {["React", "Tailwind", "Node.js", "PostgreSQL"].map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-primary/[0.07] border border-primary/[0.12] text-[9px] text-primary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Services ticker strip at bottom of hero ─── */
const tickerItems = [
  "Desarrollo Web",
  "Apps para Celular",
  "Tiendas en Línea",
  "Software a la Medida",
  "Diseño Profesional",
  "Paneles de Control",
  "Páginas de Venta",
  "Velocidad y Google",
  "Puerto Vallarta · MX",
];

const Ticker = () => (
  <div
    aria-hidden="true"
    className="absolute bottom-0 left-0 right-0 border-t border-primary/[0.06] overflow-hidden py-3 bg-surface/70 backdrop-blur-sm"
  >
    <div className="animate-ticker flex whitespace-nowrap w-max">
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-4 text-xs sm:text-sm text-txt-3 px-5"
        >
          {item}
          <span className="w-1 h-1 rounded-full bg-primary/25 flex-shrink-0" />
        </span>
      ))}
    </div>
  </div>
);

/* ─── Mini inline stat ─── */
const MiniStat = ({ value, label }) => (
  <div role="listitem">
    <p className="text-lg sm:text-xl font-bold font-[family-name:var(--font-display)] gradient-text leading-none">
      {value}
    </p>
    <p className="text-[11px] text-txt-3 mt-1 leading-none">{label}</p>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  /* Magnetic CTA */
  const ctaRef = useRef(null);
  const ctaX = useMotionValue(0);
  const ctaY = useMotionValue(0);
  const ctaSpringX = useSpring(ctaX, { stiffness: 150, damping: 15 });
  const ctaSpringY = useSpring(ctaY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(cx * 30);
      mouseY.set(cy * 20);

      if (ctaRef.current) {
        const r = ctaRef.current.getBoundingClientRect();
        const dist = Math.hypot(
          e.clientX - (r.left + r.width / 2),
          e.clientY - (r.top + r.height / 2),
        );
        if (dist < 120) {
          ctaX.set((e.clientX - (r.left + r.width / 2)) * 0.2);
          ctaY.set((e.clientY - (r.top + r.height / 2)) * 0.2);
        } else {
          ctaX.set(0);
          ctaY.set(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, ctaX, ctaY]);

  const headlineNormal = "Haz crecer tu negocio en Puerto Vallarta con una";
  const headlineGradient = "página web, app y marketing que venda.";

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-dvh -mt-16 sm:-mt-18 lg:-mt-20 pt-16 sm:pt-18 lg:pt-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Hero-specific animated background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-6 xl:gap-10 items-center pb-20">
          {/* LEFT: Text */}
          <div className="relative z-20 max-w-xl lg:max-w-none">
            {/* Geo badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: ease.out }}
            >
              <SectionBadge>Puerto Vallarta, Jalisco · México</SectionBadge>
            </motion.div>

            {/* H1 — word-blur reveal */}
            <motion.h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-bold font-[family-name:var(--font-display)] leading-[1.08] mt-4"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              {headlineNormal.split(" ").map((word, i, arr) => (
                <Fragment key={`n-${i}`}>
                  <motion.span
                    className="inline-block text-txt"
                    variants={wordVariant}
                  >
                    {word}
                  </motion.span>
                  {i < arr.length - 1 && " "}
                </Fragment>
              ))}
              <br className="hidden sm:block" />{" "}
              {headlineGradient.split(" ").map((word, i, arr) => (
                <Fragment key={`g-${i}`}>
                  <motion.span
                    className="inline-block gradient-text"
                    variants={wordVariant}
                  >
                    {word}
                  </motion.span>
                  {i < arr.length - 1 && " "}
                </Fragment>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-txt-2 mt-6 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: ease.out }}
            >
              Diseñamos y desarrollamos páginas web, aplicaciones móviles y estrategias de marketing digital que atraen clientes reales en Bahía de Banderas. Sin plantillas. Sin atajos.
            </motion.p>

            {/* Mobile visual — condensed workspace preview */}
            <MobileVisual />

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease: ease.out }}
            >
              <motion.div ref={ctaRef} style={{ x: ctaSpringX, y: ctaSpringY }}>
                <Button variant="cta" to="/cuentanos-tu-idea">
                  Iniciar un Proyecto
                </Button>
              </motion.div>
              <Button variant="outline" size="lg" to="/portafolio">
                Ver Portafolio
              </Button>
            </motion.div>

            {/* Mini stats row */}
            <motion.div
              className="flex items-center gap-7 mt-10 pt-8 border-t border-primary/[0.08]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.8 }}
              role="list"
              aria-label="Estadísticas clave"
            >
              <MiniStat value="15+" label="Proyectos" />
              <div
                className="w-px h-8 bg-primary/[0.1] flex-shrink-0"
                aria-hidden="true"
              />
              <MiniStat value="98%" label="Satisfacción" />
              <div
                className="w-px h-8 bg-primary/[0.1] flex-shrink-0"
                aria-hidden="true"
              />
              <MiniStat value="3+" label="Años" />
            </motion.div>
          </div>

          {/* RIGHT: Floating Workspace composition */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            style={{ x: springX, y: springY }}
            aria-hidden="true"
          >
            <FloatingWorkspace springX={springX} springY={springY} />
          </motion.div>
        </div>
      </div>

      {/* Bottom services ticker */}
      <Ticker />
    </motion.section>
  );
};

export default HeroSection;
