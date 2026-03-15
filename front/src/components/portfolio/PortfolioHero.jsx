// src/components/portfolio/PortfolioHero.jsx
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ease } from "../../utils/motion";

const PortfolioHero = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/15 to-secondary/8 blur-3xl opacity-60" />
        <div className="absolute bottom-[5%] left-[5%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-secondary/12 to-accent/8 blur-3xl opacity-50" />
      </div>

      <div className="w-full flex justify-center relative z-10">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
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
                Portafolio
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-txt leading-tight mb-6 max-w-4xl">
              Proyectos que resuelven{" "}
              <span className="gradient-text">problemas reales.</span>
            </h1>

            <p className="text-lg sm:text-xl text-txt-2 max-w-2xl leading-relaxed mb-12">
              Software a la medida, plataformas web y productos digitales que
              ayudan a nuestros clientes a operar mejor, crecer más rápido y
              escalar con confianza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: ease.out }}
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            {[
              { value: "15+", label: "proyectos entregados" },
              { value: "8+", label: "industrias" },
              { value: "98%", label: "satisfacción" },
            ].map((stat, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-primary font-semibold">{stat.value}</span>
                <span className="text-txt-3">{stat.label}</span>
                {i < 2 && (
                  <span className="ml-4 w-px h-4 bg-primary/[0.15]" />
                )}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-14"
          >
            <ArrowDown className="w-5 h-5 text-primary/40 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
