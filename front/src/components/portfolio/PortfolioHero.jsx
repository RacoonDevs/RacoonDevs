// src/components/portfolio/PortfolioHero.jsx
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 mb-6">
              ✨ Nuestro Mejor Trabajo
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Portfolio que</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Redefine Industrias
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proyectos que demuestran nuestra pasión por crear soluciones
              digitales que transforman negocios y conquistan mercados
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver Proyectos
            </button>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm">Disponible ahora</span>
              </div>
              <span className="w-px h-4 bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span className="text-sm">🏆 +50 Proyectos</span>
              </div>
              <span className="w-px h-4 bg-gray-600"></span>
              <div className="flex items-center gap-2">
                <span className="text-sm">⭐ 98% Satisfacción</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default PortfolioHero;
