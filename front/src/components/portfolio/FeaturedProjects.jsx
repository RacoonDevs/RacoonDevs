// src/components/portfolio/FeaturedProjects.jsx
import { motion } from "framer-motion";
import { featuredProjects } from "../../data/portfolioData";

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Revoluciones Digitales
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Proyectos que han transformado industrias y redefinido estándares
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden group">
                  {/* <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-6xl text-gray-600 group-hover:scale-105 transition-transform duration-500">
                    📱
                  </div> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full h-full object-fit rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 font-medium">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs font-medium text-blue-300 border border-blue-500/30">
                      ⭐ Destacado
                    </span>
                    <span className="text-gray-400 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <h4 className="text-lg text-blue-400 font-medium mb-4">
                    {project.subtitle}
                  </h4>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50"
                    >
                      <div className="text-lg font-bold text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace("_", " ")}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Ver Proyecto
                  </button>
                  <button className="px-6 py-3 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                    Caso de Estudio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
