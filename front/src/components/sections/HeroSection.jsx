// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { Sparkles, Brain, ArrowRight, Play } from "lucide-react";
import StatCard from "../ui/StatCard";
import Button from "../ui/Button";
import { statsData } from "../../data/statsData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 lg:py-32">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 sm:px-8 sm:py-4"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm sm:text-base lg:text-base">
                Arquitectos Digitales del Futuro
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </motion.div>{" "}
            {/* Main Heading */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                <motion.span
                  className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-2 sm:mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Creamos
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Experiencias
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Imposibles
                </motion.span>
              </h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                No desarrollamos software.{" "}
                <span className="text-cyan-400 font-semibold">
                  Esculpimos el futuro digital
                </span>{" "}
                de tu empresa. Cada línea de código es una obra de arte, cada
                interfaz una sinfonía visual.
              </motion.p>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center pt-8 sm:pt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto min-w-[280px] sm:min-w-[300px]"
              >
                <Brain className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Transformar Mi Visión
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="group w-full sm:w-auto min-w-[280px] sm:min-w-[300px]"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Ver Nuestro Arte
              </Button>
            </motion.div>{" "}
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 pt-12 sm:pt-16 lg:pt-20 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  stat={stat}
                  index={index}
                  delay={0.8 + index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
