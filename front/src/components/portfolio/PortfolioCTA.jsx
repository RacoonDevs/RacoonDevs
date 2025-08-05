// src/components/portfolio/PortfolioCTA.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 lg:p-16 text-center overflow-hidden border border-gray-700/50 backdrop-blur-sm"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Tu proyecto será el{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  próximo épico?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Cada gran revolución digital comienza con una conversación
                valiente. ¿Estás listo para cambiar tu industria?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/#contacto"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Crear un Proyecto
              </Link>

              <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                📞 Ver Más Casos
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Consulta gratuita de 30 min</span>
              </div>
              <span className="hidden sm:block w-px h-4 bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span>💼 Presupuesto personalizado</span>
              </div>
              <span className="hidden sm:block w-px h-4 bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span>⚡ Respuesta en 24 hrs</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
