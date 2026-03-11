// src/components/sections/HeroSection.jsx
import { useRef } from "react";
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

// Split text into words for staggered reveal
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
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
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
              transition: {
                duration: 0.6,
                ease: ease.out,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  const navigateToSection = useNavigateToSection();
  const containerRef = useRef(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Magnetic CTA button
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { stiffness: 200, damping: 20 });
  const springBtnY = useSpring(btnY, { stiffness: 200, damping: 20 });

  const handleBtnMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btnX.set(x * 0.15);
    btnY.set(y * 0.15);
  };
  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="w-full flex justify-center py-24 sm:py-28 lg:py-32"
      >
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.p
              className="text-sm tracking-widest uppercase text-gray-500 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: ease.out }}
            >
              Software Studio — Puerto Vallarta, MX
            </motion.p>

            {/* Main Heading — word-by-word staggered reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
              <AnimatedHeadline className="text-white" delay={0.5}>
                Software a la medida,
              </AnimatedHeadline>
              <br className="hidden sm:block" />
              <AnimatedHeadline className="text-gray-400" delay={0.8}>
                diseño responsivo y productos digitales que escalan.
              </AnimatedHeadline>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: ease.out }}
            >
              Diseñamos y desarrollamos plataformas web, aplicaciones y
              experiencias digitales premium para empresas que necesitan más que
              una plantilla.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease: ease.out }}
            >
              {/* Primary CTA — magnetic + premium hover */}
              <motion.button
                onClick={() => navigateToSection("#contacto")}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                style={{ x: springBtnX, y: springBtnY }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-base overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-3">
                  Iniciar un Proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <Link to="/portafolio">
                <motion.span
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white rounded-full font-medium text-base hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Trabajo Seleccionado
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>

      {/* Hero ambient glow — separate from background, hero-specific depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[15%] right-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative line — subtle horizontal rule */}
        <motion.div
          className="absolute bottom-[20%] left-[8%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "35%" }}
          transition={{ delay: 1.8, duration: 1.5, ease: ease.out }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
