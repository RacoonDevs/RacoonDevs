import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PortfolioCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 lg:p-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
            Siguiente Paso
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Platiquemos sobre lo que necesitas. Sin compromisos, sin plantillas
            — solo una conversación sobre cómo resolver tu problema.
          </p>

          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Iniciar Conversación
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/30">
            <span>Consulta sin costo</span>
            <span className="w-px h-4 bg-white/10" />
            <span>Respuesta en 24 hrs</span>
            <span className="w-px h-4 bg-white/10" />
            <span>Presupuesto personalizado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
