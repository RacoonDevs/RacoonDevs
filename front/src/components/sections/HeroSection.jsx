// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "../utils/NavigateToSection";

const HeroSection = () => {
  const navigateToSection = useNavigateToSection();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 sm:py-28 lg:py-32">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            {/* Tag */}
            <motion.p
              className="text-sm tracking-widest uppercase text-gray-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Software Studio — Puerto Vallarta, MX
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Software a la medida,{" "}
              <span className="text-gray-400">
                diseño responsivo y productos digitales que escalan.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
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
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => navigateToSection("#contacto")}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300"
              >
                Iniciar un Proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <Link
                to="/portafolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white rounded-full font-medium text-base hover:bg-white/5 transition-all duration-300"
              >
                Ver Trabajo Seleccionado
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-white/[0.02] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-t from-white/[0.015] to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
