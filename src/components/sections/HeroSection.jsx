import { useRef, useEffect } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ease } from "../../utils/motion";
import SectionBadge from "../ui/SectionBadge";
import Button from "../ui/Button";
import { CheckCircle2, Globe, BellRing, Star } from "lucide-react";

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

/* ─── Deliverables for the CommandCard ─── */
const deliverables = [
  "Se ve perfecto en celular y computadora",
  "Velocidad de carga: 95+",
  "Posicionamiento Google: 98+",
  "Publicado y en línea",
];

/* ─── CommandCard — floating glass composition on the right ─── */
const CommandCard = ({ springX, springY }) => {
  const rotateX = useTransform(springY, [-20, 20], [8, -8]);
  const rotateY = useTransform(springX, [-30, 30], [-8, 8]);

  return (
    <motion.div
      className="relative w-full max-w-[340px] mx-auto lg:mx-0"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
    >
      {/* Main glass card */}
      <motion.div
        className="relative glass-panel rounded-2xl border border-primary/[0.12] overflow-hidden shadow-2xl shadow-primary/[0.08]"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.9, ease: ease.out }}
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-primary/[0.08] bg-surface-alt/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-4 flex-1 h-5 bg-primary/[0.05] rounded-md flex items-center px-2.5">
            <span className="text-[10px] text-txt-3 font-mono truncate">
              racoon.devs ~ tu-proyecto
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-semibold ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Card content */}
        <div className="p-5 space-y-3">
          {deliverables.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.9 + i * 0.1,
                duration: 0.45,
                ease: ease.out,
              }}
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-txt-2">{item}</span>
            </motion.div>
          ))}

          <motion.div
            className="pt-4 border-t border-primary/[0.06]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.5 }}
          >
            <p className="text-[10px] text-txt-3 uppercase tracking-widest mb-2.5">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["React", "Tailwind", "Node.js", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-primary/[0.07] border border-primary/[0.12] text-[10px] text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating badge — rating */}
      <motion.div
        className="absolute -bottom-5 -left-7 glass-panel rounded-xl px-3.5 py-2.5 border border-primary/[0.1] flex items-center gap-2.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.55, ease: ease.out }}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <div>
          <p className="text-[11px] font-bold text-txt leading-none">5.0</p>
          <p className="text-[9px] text-txt-3 leading-none mt-0.5">4 reseñas</p>
        </div>
      </motion.div>

      {/* Floating badge — new project */}
      <motion.div
        className="absolute -top-5 -right-6 glass-panel rounded-xl px-3.5 py-2.5 border border-primary/[0.1] flex items-center gap-2 shadow-lg"
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.55, ease: ease.out }}
      >
        <BellRing className="w-3.5 h-3.5 text-primary" />
        <div>
          <p className="text-[10px] font-semibold text-txt leading-none">
            Nuevo proyecto
          </p>
          <p className="text-[9px] text-txt-3 leading-none mt-0.5">
            Puerto Vallarta
          </p>
        </div>
      </motion.div>

      {/* Floating badge — location */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -right-10 glass-panel rounded-full px-3 py-1.5 border border-secondary/[0.2] flex items-center gap-1.5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.5, ease: ease.out }}
      >
        <Globe className="w-3 h-3 text-secondary" />
        <span className="text-[9px] text-secondary font-semibold">PV, MX</span>
      </motion.div>
    </motion.div>
  );
};

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
  <div>
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

  const headlineNormal = "Tu negocio en Puerto Vallarta merece un";
  const headlineGradient = "software que funcione de verdad.";

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100dvh-5rem)] flex flex-col justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pb-20">
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-display)] leading-[1.1] mt-4"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              {headlineNormal.split(" ").map((word, i) => (
                <motion.span
                  key={`n-${i}`}
                  className="inline-block text-txt mr-[0.28em]"
                  variants={wordVariant}
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />{" "}
              {headlineGradient.split(" ").map((word, i) => (
                <motion.span
                  key={`g-${i}`}
                  className="inline-block gradient-text mr-[0.28em]"
                  variants={wordVariant}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-txt-2 mt-6 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: ease.out }}
            >
              Diseñamos y desarrollamos software, apps y plataformas web en
              Puerto Vallarta que impulsan negocios reales. Sin plantillas. Sin
              atajos.
            </motion.p>

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

          {/* RIGHT: CommandCard composition */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            style={{ x: springX, y: springY }}
          >
            <CommandCard springX={springX} springY={springY} />
          </motion.div>
        </div>
      </div>

      {/* Bottom services ticker */}
      <Ticker />
    </motion.section>
  );
};

export default HeroSection;
