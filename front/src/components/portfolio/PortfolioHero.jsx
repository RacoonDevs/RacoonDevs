import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
            Portafolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 max-w-3xl">
            Proyectos que resuelven problemas reales de negocio
          </h1>

          <p className="text-lg text-white/50 max-w-2xl leading-relaxed mb-12">
            Software a la medida, plataformas web y productos digitales que
            ayudan a nuestros clientes a operar mejor, crecer más rápido y
            escalar con confianza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-8 text-sm text-white/40"
        >
          <span>10+ proyectos entregados</span>
          <span className="w-px h-4 bg-white/10" />
          <span>6+ industrias</span>
          <span className="w-px h-4 bg-white/10" />
          <span>98% satisfacción</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <ArrowDown className="w-5 h-5 text-white/20 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
