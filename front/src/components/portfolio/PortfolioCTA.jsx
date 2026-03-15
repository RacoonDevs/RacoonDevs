// src/components/portfolio/PortfolioCTA.jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ease } from "../../utils/motion";
import { useNavigateToSection } from "../utils/NavigateToSection";

const PortfolioCTA = () => {
  const navigateToContact = useNavigateToSection("/#contacto");

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                ¿Listo para construir tu próximo proyecto?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                Platícanos tu idea y diseñamos juntos la solución perfecta para
                tu negocio.
              </p>
              <button
                onClick={navigateToContact}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg shadow-primary/30 group cursor-pointer"
              >
                Iniciar conversación
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
