// src/pages/ProcessPage.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/layout/AnimatedBackground";
import ProcessSection from "../components/sections/ProcessSection";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import TechnologySection from "../components/sections/TechnologySection";
import MultiDeviceSection from "../components/sections/MultiDeviceSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigateToSection } from "../components/utils/NavigateToSection";
import { ease } from "../utils/motion";

const ProcessPage = () => {
  const navigateToSection = useNavigateToSection();

  return (
    <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        {/* Hero */}
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
                  Cómo convertimos{" "}
                  <span className="gradient-text">
                    ideas en productos digitales.
                  </span>
                </h1>
                <p className="text-txt-2 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                  Nuestro proceso combina estrategia, diseño y tecnología para
                  crear productos que realmente funcionan. Cada decisión tiene
                  un propósito.
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

        <ProcessSection />
        <CapabilitiesSection />
        <ShowcaseSection />
        <MultiDeviceSection />
        <TechnologySection />

        {/* CTA */}
        <section className="py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]">
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
                  Cuéntanos tu idea y diseñamos la solución perfecta para tu
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
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
