import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";
import SectionBadge from "../ui/SectionBadge";
import FloatingCard from "../ui/FloatingCard";
import GradientOrb from "../ui/GradientOrb";
import Button from "../ui/Button";
import {
  TrendingUp,
  CalendarCheck,
  Activity,
  Users,
  ArrowDown,
  BarChart3,
  ShoppingCart,
  Clock,
  ChevronRight,
} from "lucide-react";

/* ─── word-by-word blur reveal variants ───────────────────────────── */
const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 14 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.55, ease: ease.out },
  },
};

/* ─── Mini chart for dashboard ───────────────────────────────────── */
const MiniChart = ({ data, color = "#a78bfa", height = 40 }) => {
  const max = Math.max(...data);
  const points = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * 100},${height - (v / max) * height}`,
    )
    .join(" ");

  return (
    <svg
      viewBox={`0 0 100 ${height}`}
      className="w-full"
      preserveAspectRatio="none"
      style={{ height }}
    >
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,${height} ${points} 100,${height}`}
        fill="url(#chartGrad)"
      />
    </svg>
  );
};

/* ─── DashboardMockup (browser chrome) ───────────────────────────── */
const DashboardMockup = () => (
  <div className="relative rounded-xl border border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/10 w-full">
    {/* Title bar */}
    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-primary/[0.08]">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
      <div className="ml-3 h-5 flex-1 max-w-[180px] bg-primary/[0.06] rounded-md flex items-center px-2">
        <span className="text-[8px] text-txt-3 truncate">
          app.racoondevs.com/dashboard
        </span>
      </div>
    </div>

    {/* Dashboard content */}
    <div className="p-3 sm:p-4 space-y-3">
      {/* Stat cards row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: "Ingresos",
            val: "$24.8K",
            change: "+12.5%",
            color: "text-emerald-400",
          },
          {
            label: "Usuarios",
            val: "2,481",
            change: "+8.2%",
            color: "text-cyan-400",
          },
          {
            label: "Conversiones",
            val: "18.4%",
            change: "+3.1%",
            color: "text-violet-400",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-primary/[0.04] border border-primary/[0.08] p-2 sm:p-2.5"
          >
            <p className="text-[9px] sm:text-[10px] text-txt-3">{s.label}</p>
            <p className="text-sm sm:text-base font-bold text-txt font-[family-name:var(--font-display)]">
              {s.val}
            </p>
            <p className={cn("text-[9px] font-medium", s.color)}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="rounded-lg bg-primary/[0.04] border border-primary/[0.08] p-2 sm:p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-txt-2 font-medium">
            Ventas Mensuales
          </span>
          <span className="text-[9px] text-txt-3">Ene - Jun</span>
        </div>
        <MiniChart
          data={[20, 35, 28, 45, 38, 62, 55, 72, 65, 80, 70, 90]}
          color="#a78bfa"
          height={48}
        />
      </div>

      {/* Activity table */}
      <div className="rounded-lg bg-primary/[0.04] border border-primary/[0.08] p-2 sm:p-3">
        <p className="text-[10px] text-txt-2 font-medium mb-2">
          Actividad Reciente
        </p>
        {[
          { name: "Nuevo usuario", time: "Hace 2m", dot: "bg-emerald-400" },
          { name: "Pedido #1284", time: "Hace 8m", dot: "bg-cyan-400" },
          { name: "Pago recibido", time: "Hace 15m", dot: "bg-violet-400" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between py-1 border-b border-primary/[0.04] last:border-0"
          >
            <div className="flex items-center gap-1.5">
              <div className={cn("w-1.5 h-1.5 rounded-full", row.dot)} />
              <span className="text-[9px] sm:text-[10px] text-txt-2">
                {row.name}
              </span>
            </div>
            <span className="text-[8px] text-txt-3">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── MobileMockup (phone chrome) ────────────────────────────────── */
const MobileMockup = () => (
  <div className="relative rounded-3xl border-2 border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl w-[140px] sm:w-[160px]">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-surface-alt rounded-b-xl z-10" />
    {/* Status bar */}
    <div className="flex items-center justify-between px-3 py-1.5 border-b border-primary/[0.06]">
      <span className="text-[7px] text-txt-3">9:41</span>
      <div className="flex gap-0.5">
        <div className="w-2.5 h-1.5 rounded-sm bg-primary/10" />
        <div className="w-1.5 h-1.5 rounded-sm bg-primary/10" />
      </div>
    </div>

    {/* Phone content */}
    <div className="p-2.5 space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-semibold text-txt">Dashboard</span>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
      </div>

      {/* Quick stat */}
      <div className="rounded-lg bg-primary/[0.04] border border-primary/[0.06] p-2">
        <p className="text-[7px] text-txt-3">Hoy</p>
        <p className="text-xs font-bold text-txt font-[family-name:var(--font-display)]">
          $3,240
        </p>
        <p className="text-[7px] text-emerald-400">+18.2%</p>
      </div>

      {/* Mini chart */}
      <div className="rounded-lg bg-primary/[0.04] border border-primary/[0.06] p-1.5">
        <MiniChart
          data={[15, 30, 22, 45, 35, 55, 48, 60]}
          color="#06b6d4"
          height={28}
        />
      </div>

      {/* List items */}
      {["Pedido completado", "Nuevo mensaje", "Pago verificado"].map((t) => (
        <div
          key={t}
          className="flex items-center gap-1.5 py-1 border-b border-primary/[0.04]"
        >
          <div className="w-1 h-1 rounded-full bg-primary/40" />
          <span className="text-[7px] text-txt-2">{t}</span>
        </div>
      ))}
    </div>

    {/* Home indicator */}
    <div className="flex justify-center py-1.5">
      <div className="w-16 h-0.5 rounded-full bg-primary/[0.15]" />
    </div>
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

  /* scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  /* magnetic CTA refs */
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

      /* magnetic CTA */
      if (ctaRef.current) {
        const ctaRect = ctaRef.current.getBoundingClientRect();
        const ctaCx = ctaRect.left + ctaRect.width / 2;
        const ctaCy = ctaRect.top + ctaRect.height / 2;
        const dist = Math.hypot(e.clientX - ctaCx, e.clientY - ctaCy);
        if (dist < 120) {
          ctaX.set((e.clientX - ctaCx) * 0.2);
          ctaY.set((e.clientY - ctaCy) * 0.2);
        } else {
          ctaX.set(0);
          ctaY.set(0);
        }
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, ctaX, ctaY]);

  const headlineNormal = "Tu idea merece un";
  const headlineGradient = "software que funcione de verdad.";

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ opacity: scrollOpacity }}
    >
      {/* ── Background orbs ────────────────────────────────────── */}
      <GradientOrb
        color="primary"
        size={600}
        className="-top-40 -left-40 opacity-30"
      />
      <GradientOrb
        color="secondary"
        size={500}
        className="top-1/3 -right-32 opacity-20"
      />
      <GradientOrb
        color="accent"
        size={350}
        className="bottom-0 left-1/3 opacity-15"
      />

      {/* ── Content ────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full flex justify-center"
        style={{ y: scrollY }}
      >
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-28 sm:pt-32 lg:pt-0">
          {/* ─── LEFT: Text ─────────────────────────────────────── */}
          <div className="relative z-20 max-w-xl lg:max-w-none">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: ease.out }}
            >
              <SectionBadge>
                Software Studio &mdash; Desarrollo Web &amp; Apps
              </SectionBadge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-display)] leading-[1.08] mt-4"
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

            {/* Sub-headline */}
            <motion.p
              className="text-lg sm:text-xl text-txt-2 mt-6 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: ease.out }}
            >
              Diseñamos y desarrollamos software, apps y plataformas web que
              impulsan negocios reales. Sin plantillas. Sin atajos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: ease.out }}
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
          </div>

          {/* ─── RIGHT: Device composition ──────────────────────── */}
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
            style={{ x: springX, y: springY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: ease.out }}
              className="relative"
            >
              {/* Dashboard */}
              <DashboardMockup />

              {/* Mobile overlapping bottom-left */}
              <motion.div
                className="absolute -bottom-8 -left-6 sm:-left-10 z-20"
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: ease.out }}
              >
                <MobileMockup />
              </motion.div>

              {/* ─── Floating cards ───────────────────────────── */}
              <FloatingCard
                className="absolute -top-4 -right-4 sm:-right-8 z-30 px-3 py-2"
                delay={1.2}
                floatRange={6}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-txt-3">Analytics</p>
                    <p className="text-sm font-bold text-emerald-400 font-[family-name:var(--font-display)]">
                      +24.8%
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute top-1/4 -right-10 sm:-right-16 z-30 px-3 py-2"
                delay={1.4}
                floatRange={10}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <CalendarCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-txt-3">Reservaciones</p>
                    <p className="text-sm font-bold text-txt font-[family-name:var(--font-display)]">
                      128
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute bottom-1/4 -right-6 sm:-right-12 z-30 px-3 py-2 hidden lg:block"
                delay={1.6}
                floatRange={8}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Activity className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-txt-3">Sistema</p>
                    <p className="text-xs font-semibold text-green-400">
                      Online
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute -bottom-4 right-1/4 z-30 px-3 py-2 hidden lg:block"
                delay={1.8}
                floatRange={7}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-txt-3">Usuarios</p>
                    <p className="text-sm font-bold text-txt font-[family-name:var(--font-display)]">
                      2.4K
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll-down indicator ──────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[11px] tracking-widest uppercase text-txt-3">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-txt-3" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
