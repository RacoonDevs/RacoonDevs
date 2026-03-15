// src/components/sections/HeroSection.jsx
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "../utils/NavigateToSection";
import { ease } from "../../utils/motion";

/* ─── Word-by-word staggered headline ─── */
const AnimatedHeadline = ({ children, className, delay = 0 }) => {
  const words = children.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: ease.out },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ─── Mini chart components with color ─── */
const MiniBarChart = ({ data, className = "" }) => (
  <div className={`flex items-end gap-0.5 ${className}`}>
    {data.map((h, i) => (
      <motion.div
        key={i}
        className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-secondary/20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ height: h, transformOrigin: "bottom" }}
        transition={{ delay: 2.2 + i * 0.06, duration: 0.5, ease: ease.out }}
      />
    ))}
  </div>
);

const MiniLineChart = ({ className = "" }) => (
  <svg viewBox="0 0 120 40" className={className} fill="none">
    <motion.path
      d="M0 35 Q10 30 20 28 T40 22 T60 18 T80 10 T100 14 T120 6"
      stroke="url(#lineStrokeGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 2.4, duration: 1.2, ease: ease.out }}
    />
    <motion.path
      d="M0 35 Q10 30 20 28 T40 22 T60 18 T80 10 T100 14 T120 6 V40 H0 Z"
      fill="url(#lineGrad)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ delay: 3, duration: 0.8 }}
    />
    <defs>
      <linearGradient id="lineStrokeGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity="0.5" />
        <stop
          offset="100%"
          stopColor="var(--theme-secondary)"
          stopOpacity="0.5"
        />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity="0.2" />
        <stop
          offset="100%"
          stopColor="var(--theme-secondary)"
          stopOpacity="0"
        />
      </linearGradient>
    </defs>
  </svg>
);

const MiniDonut = ({ className = "" }) => (
  <svg viewBox="0 0 36 36" className={className} fill="none">
    <circle
      cx="18"
      cy="18"
      r="14"
      stroke="rgb(var(--primary-rgb) / 0.1)"
      strokeWidth="4"
    />
    <motion.circle
      cx="18"
      cy="18"
      r="14"
      stroke="url(#donutGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="66 88"
      initial={{ strokeDashoffset: 88 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ delay: 2.6, duration: 1, ease: ease.out }}
      transform="rotate(-90 18 18)"
    />
    <defs>
      <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--theme-primary)" />
        <stop offset="100%" stopColor="var(--theme-secondary)" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─── Floating UI Card wrapper ─── */
const FloatingCard = ({
  children,
  className = "",
  delay = 0,
  floatRange = 8,
  floatDuration = 6,
  style = {},
}) => (
  <motion.div
    className={`absolute rounded-xl border border-primary/[0.12] bg-surface-alt/80 backdrop-blur-xl shadow-2xl shadow-primary/10 glass-panel ${className}`}
    style={style}
    initial={{ opacity: 0, y: 30, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: ease.out }}
  >
    <motion.div
      animate={{ y: [-floatRange / 2, floatRange / 2, -floatRange / 2] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

/* ─── Desktop Dashboard Mockup ─── */
const DashboardMockup = ({ mouseX, mouseY }) => {
  const x = useTransform(mouseX, [0, 1], [-6, 6]);
  const y = useTransform(mouseY, [0, 1], [-4, 4]);

  return (
    <motion.div
      className="relative w-full max-w-[520px] aspect-[16/10] rounded-xl border border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/15 glass-panel"
      style={{ x, y }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.9, ease: ease.out }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/[0.08]">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="ml-3 h-2 w-24 bg-primary/[0.08] rounded-full" />
      </div>

      <div className="p-3 flex gap-2 h-[calc(100%-32px)]">
        {/* Sidebar */}
        <div className="w-10 flex-shrink-0 flex flex-col gap-2.5 pt-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 mx-auto rounded-md ${i === 0 ? "bg-gradient-to-br from-primary/25 to-secondary/20" : "bg-primary/[0.05]"}`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Stat row */}
          <div className="flex gap-2">
            {[
              {
                label: "Ingresos",
                value: "$48.2K",
                trend: "+12%",
                color: "from-primary/10 to-primary/5",
              },
              {
                label: "Usuarios",
                value: "2,847",
                trend: "+8%",
                color: "from-secondary/10 to-secondary/5",
              },
              {
                label: "Órdenes",
                value: "384",
                trend: "+23%",
                color: "from-accent/10 to-accent/5",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-lg bg-gradient-to-br ${stat.color} border border-primary/[0.08] p-2`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.0 + i * 0.1,
                  duration: 0.5,
                  ease: ease.out,
                }}
              >
                <p className="text-[8px] text-txt-3 mb-0.5">{stat.label}</p>
                <p className="text-[11px] font-semibold text-txt">
                  {stat.value}
                </p>
                <p className="text-[7px] text-emerald-500">{stat.trend}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="flex-1 rounded-lg bg-primary/[0.02] border border-primary/[0.06] p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[8px] text-txt-3">Ventas Mensuales</p>
              <div className="flex gap-2">
                <span className="text-[7px] text-txt-4">Semana</span>
                <span className="text-[7px] text-primary border-b border-primary/30">
                  Mes
                </span>
              </div>
            </div>
            <MiniLineChart className="w-full h-10" />
            <MiniBarChart
              data={[12, 18, 14, 22, 16, 26, 20, 28, 24, 30, 22, 34]}
              className="w-full mt-1"
            />
          </div>

          {/* Activity table */}
          <div className="rounded-lg bg-primary/[0.02] border border-primary/[0.06] p-2">
            <p className="text-[8px] text-txt-3 mb-1.5">Actividad Reciente</p>
            {[
              {
                name: "Nueva orden #384",
                time: "Hace 2 min",
                status: "bg-emerald-400",
              },
              {
                name: "Usuario registrado",
                time: "Hace 8 min",
                status: "bg-secondary",
              },
              {
                name: "Pago recibido",
                time: "Hace 15 min",
                status: "bg-primary",
              },
            ].map((row, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between py-0.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 2.6 + i * 0.1,
                  duration: 0.4,
                  ease: ease.out,
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${row.status}`} />
                  <span className="text-[8px] text-txt-2">{row.name}</span>
                </div>
                <span className="text-[7px] text-txt-4">{row.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Mobile Mockup ─── */
const MobileMockup = ({ mouseX, mouseY }) => {
  const x = useTransform(mouseX, [0, 1], [4, -4]);
  const y = useTransform(mouseY, [0, 1], [3, -3]);

  return (
    <motion.div
      className="absolute -bottom-4 -left-8 sm:-left-6 w-[110px] sm:w-[130px] aspect-[9/18] rounded-2xl border border-secondary/[0.15] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-secondary/15 z-20 glass-panel"
      style={{ x, y }}
      initial={{ opacity: 0, y: 50, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 2.0, duration: 0.8, ease: ease.out }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-2 py-1.5">
        <span className="text-[6px] text-txt-3">9:41</span>
        <div className="flex gap-0.5">
          <div className="w-2 h-1.5 rounded-sm bg-primary/15" />
          <div className="w-1 h-1.5 rounded-sm bg-primary/15" />
        </div>
      </div>

      <div className="px-2 pt-1">
        <div className="h-1.5 w-12 bg-primary/15 rounded-full mb-2" />
        <div className="h-1 w-16 bg-primary/[0.08] rounded-full mb-3" />

        {/* Mini revenue card */}
        <div className="rounded-lg bg-gradient-to-br from-primary/[0.06] to-secondary/[0.04] border border-primary/[0.08] p-2 mb-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="h-1 w-8 bg-primary/15 rounded-full" />
            <div className="text-[7px] text-emerald-500">+18%</div>
          </div>
          <div className="text-[10px] font-semibold text-txt mb-1">$12,480</div>
          <MiniBarChart data={[8, 12, 10, 16, 14, 18, 22]} className="h-4" />
        </div>

        {/* Mini list items */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 py-1 border-b border-primary/[0.04]"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="flex-1">
              <div className="h-1 w-10 bg-primary/[0.1] rounded-full mb-0.5" />
              <div className="h-0.5 w-14 bg-primary/[0.05] rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-1.5 border-t border-primary/[0.08]">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-md ${i === 0 ? "bg-gradient-to-br from-primary/20 to-secondary/15" : "bg-primary/[0.05]"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */
const HeroSection = () => {
  const navigateToSection = useNavigateToSection();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* Magnetic CTA */
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { stiffness: 200, damping: 20 });
  const springBtnY = useSpring(btnY, { stiffness: 200, damping: 20 });

  const handleBtnMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    btnX.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    btnY.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };
  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  /* Mouse tracking for product composition parallax */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-4.5rem)] lg:min-h-[calc(100dvh-5rem)]"
    >
      {/* ─── Decorative gradient orbs ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[5%] right-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/15 to-accent/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="w-full flex justify-center py-20"
      >
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* ═══ LEFT: Text content ═══ */}
            <div className="max-w-xl lg:max-w-none">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: ease.out }}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Software Studio — Desarrollo Web & Apps
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.08] tracking-tight mb-8">
                <AnimatedHeadline className="text-txt" delay={0.5}>
                  Tu idea merece un software
                </AnimatedHeadline>
                <br className="hidden sm:block" />
                <AnimatedHeadline className="gradient-text" delay={0.8}>
                  que funcione de verdad.
                </AnimatedHeadline>
              </h1>

              <motion.p
                className="text-lg sm:text-xl text-txt-2 max-w-2xl leading-relaxed mb-12"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7, ease: ease.out }}
              >
                Diseñamos y desarrollamos aplicaciones web, móviles,
                eCommerce y sistemas a la medida que impulsan negocios y
                simplifican operaciones.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.7, ease: ease.out }}
              >
                <motion.button
                  onClick={() => navigateToSection("#contacto")}
                  onMouseMove={handleBtnMouseMove}
                  onMouseLeave={handleBtnMouseLeave}
                  style={{ x: springBtnX, y: springBtnY }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 gradient-primary text-white rounded-full font-semibold text-base overflow-hidden cursor-pointer shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-3">
                    Iniciar un Proyecto
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </motion.button>
                <Link to="/portafolio">
                  <motion.span
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary/20 text-txt rounded-full font-medium text-base hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Nuestro Trabajo
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* ═══ RIGHT: Product composition (desktop) ═══ */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-[560px] aspect-[4/3]">
                {/* Desktop dashboard */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <DashboardMockup
                    mouseX={smoothMouseX}
                    mouseY={smoothMouseY}
                  />
                </div>

                {/* Mobile device */}
                <MobileMockup mouseX={smoothMouseX} mouseY={smoothMouseY} />

                {/* ─ Floating analytics card ─ */}
                <FloatingCard
                  className="top-[-12px] right-[-20px] p-3 w-[160px] z-30"
                  delay={2.3}
                  floatRange={10}
                  floatDuration={7}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M1 8 L3 5 L5 6 L7 3 L9 1"
                          stroke="var(--theme-primary)"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeOpacity="0.6"
                        />
                      </svg>
                    </div>
                    <span className="text-[8px] text-txt-3">Analytics</span>
                  </div>
                  <p className="text-[11px] font-semibold gradient-text">
                    +24.8%
                  </p>
                  <p className="text-[8px] text-txt-3">Conversión mensual</p>
                  <div className="mt-2 flex gap-0.5">
                    {[14, 18, 12, 22, 16, 26, 20, 24, 28, 22, 30, 26].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-primary/20 to-secondary/15"
                          style={{ height: `${h}px` }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 2.8 + i * 0.05,
                            duration: 0.4,
                            ease: ease.out,
                          }}
                        />
                      ),
                    )}
                  </div>
                </FloatingCard>

                {/* ─ Floating bookings card ─ */}
                <FloatingCard
                  className="bottom-[15%] right-[-36px] p-3 w-[148px] z-30"
                  delay={2.6}
                  floatRange={7}
                  floatDuration={8}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="2"
                          width="8"
                          height="7"
                          rx="1"
                          stroke="var(--theme-accent)"
                          strokeWidth="0.8"
                          strokeOpacity="0.5"
                        />
                        <line
                          x1="1"
                          y1="4.5"
                          x2="9"
                          y2="4.5"
                          stroke="var(--theme-accent)"
                          strokeWidth="0.5"
                          strokeOpacity="0.3"
                        />
                      </svg>
                    </div>
                    <span className="text-[8px] text-txt-3">Reservaciones</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <p className="text-[11px] font-semibold text-txt">48</p>
                    <p className="text-[7px] text-emerald-500">+12 hoy</p>
                  </div>
                  <div className="mt-1.5 space-y-1">
                    {["Mar 14, 10:00", "Mar 14, 14:30", "Mar 15, 09:00"].map(
                      (slot, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 py-0.5"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary/30" />
                          <span className="text-[7px] text-txt-2">{slot}</span>
                        </div>
                      ),
                    )}
                  </div>
                </FloatingCard>

                {/* ─ Floating system status card ─ */}
                <FloatingCard
                  className="top-[8%] left-[-28px] p-3 w-[136px] z-30"
                  delay={2.1}
                  floatRange={6}
                  floatDuration={9}
                >
                  <p className="text-[8px] text-txt-3 mb-1.5">
                    Estado del Sistema
                  </p>
                  <div className="space-y-1.5">
                    {[
                      {
                        label: "API",
                        status: "Activa",
                        color: "bg-emerald-400",
                      },
                      { label: "DB", status: "Healthy", color: "bg-secondary" },
                      { label: "CDN", status: "Online", color: "bg-primary" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[8px] text-txt-2">
                          {item.label}
                        </span>
                        <div className="flex items-center gap-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                          />
                          <span className="text-[7px] text-emerald-500">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FloatingCard>

                {/* ─ Floating users/donut card ─ */}
                <FloatingCard
                  className="bottom-[-8px] left-[60px] p-2.5 w-[120px] z-20"
                  delay={2.8}
                  floatRange={5}
                  floatDuration={7.5}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <MiniDonut className="w-6 h-6" />
                    <div>
                      <p className="text-[10px] font-semibold text-txt">2.8K</p>
                      <p className="text-[7px] text-txt-3">Usuarios</p>
                    </div>
                  </div>
                </FloatingCard>

                {/* Ambient glow behind composition */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(var(--primary-rgb) / 0.08) 0%, rgba(var(--secondary-rgb) / 0.04) 40%, transparent 65%)",
                  }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Mobile product preview (shown < lg) ─── */}
      <motion.div
        className="w-full flex justify-center lg:hidden px-6 -mt-4 mb-8 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: ease.out }}
      >
        <div className="relative w-full max-w-[340px]">
          {/* Dashboard mockup */}
          <div className="w-full rounded-xl border border-primary/[0.1] bg-surface-alt/80 backdrop-blur-sm overflow-hidden shadow-xl shadow-primary/10">
            <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-primary/[0.08]">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
              <div className="ml-1.5 h-2 w-16 bg-primary/[0.06] rounded-full" />
            </div>
            <div className="p-2.5 flex gap-2">
              {/* Sidebar */}
              <div className="w-7 flex-shrink-0 flex flex-col gap-1.5 pt-1">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 mx-auto rounded ${i === 0 ? "bg-gradient-to-br from-primary/15 to-secondary/10" : "bg-primary/[0.05]"}`}
                  />
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 flex flex-col gap-1.5">
                {/* Stats row */}
                <div className="flex gap-1.5">
                  {[
                    {
                      label: "Ingresos",
                      value: "8.2K",
                      trend: "+12%",
                    },
                    {
                      label: "Usuarios",
                      value: "2,847",
                      trend: "+8%",
                    },
                    {
                      label: "Ordenes",
                      value: "384",
                      trend: "+23%",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex-1 h-10 rounded-md bg-primary/[0.04] border border-primary/[0.06] p-1.5"
                    >
                      <div className="text-[5px] text-txt-3 mb-0.5">
                        {stat.label}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] font-semibold text-txt">
                          {stat.value}
                        </span>
                        <span className="text-[5px] text-emerald-500">
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chart area */}
                <div className="h-16 rounded-md bg-primary/[0.02] border border-primary/[0.04] p-1.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[5px] text-txt-3">
                      Ventas Mensuales
                    </div>
                    <div className="flex gap-1">
                      <div className="text-[4px] text-txt-4">Sem</div>
                      <div className="text-[4px] text-primary">Mes</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-0.5 h-8">
                    {[40, 65, 50, 80, 60, 75, 90, 55, 70, 85, 45, 65].map(
                      (h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm ${i === 6 ? "bg-gradient-to-t from-primary/30 to-secondary/20" : "bg-primary/[0.08]"}`}
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
                {/* Activity rows */}
                <div className="space-y-0.5">
                  {[
                    { name: "Nueva orden #384", dot: "bg-emerald-400" },
                    { name: "Usuario registrado", dot: "bg-secondary" },
                    { name: "Pago recibido", dot: "bg-primary" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-primary/[0.02]"
                    >
                      <div className={`w-1 h-1 rounded-full ${item.dot}`} />
                      <div className="text-[5px] text-txt-2 flex-1">
                        {item.name}
                      </div>
                      <div className="h-0.5 w-4 bg-primary/[0.06] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating card — Analytics (top right) */}
          <motion.div
            className="absolute -top-3 -right-3 p-2 rounded-lg bg-surface-alt/90 border border-primary/[0.12] backdrop-blur-sm shadow-lg shadow-primary/10"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[5px] text-txt-3 mb-0.5">Analytics</div>
            <div className="flex items-center gap-1">
              <span className="text-[8px] font-bold gradient-text">+24.8%</span>
              <span className="text-[5px] text-emerald-500">&#9650;</span>
            </div>
            <div className="text-[4px] text-txt-4">Conversión mensual</div>
          </motion.div>

          {/* Floating card — Users (bottom left) */}
          <motion.div
            className="absolute -bottom-2 -left-2 p-2 rounded-lg bg-surface-alt/90 border border-secondary/[0.12] backdrop-blur-sm shadow-lg shadow-secondary/10"
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center">
                <div className="w-2 h-0.5 rounded-full bg-primary/40" />
              </div>
              <div>
                <div className="text-[7px] font-semibold text-txt">2.8K</div>
                <div className="text-[4px] text-txt-3">Usuarios activos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>

      {/* Hero ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[15%] right-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--primary-rgb) / 0.06) 0%, transparent 65%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--secondary-rgb) / 0.04) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
