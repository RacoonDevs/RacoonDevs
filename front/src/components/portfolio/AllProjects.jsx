// src/components/portfolio/AllProjects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects, projectCategories } from "../../data/portfolioData";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Todos los Proyectos"
  );
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "Todos los Proyectos"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Finalizado":
        return "text-green-400 bg-green-500/20 border-green-500/30";
      case "En Desarrollo":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "Planificado":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30";
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

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
            Más Proyectos Épicos
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cada proyecto es una historia de transformación digital
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl text-gray-600 group-hover:scale-110 transition-transform duration-500">
                    {index % 3 === 0 ? "💻" : index % 3 === 1 ? "📱" : "🚀"}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-medium">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <h4 className="text-sm text-blue-400 font-medium mb-3">
                      {project.subtitle}
                    </h4>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <motion.div
                    animate={{
                      y: hoveredProject === project.id ? 0 : 10,
                      opacity: hoveredProject === project.id ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pt-2"
                  >
                    <button className="w-full py-2 border border-gray-600 rounded-xl font-medium text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-sm">
                      Ver Detalles
                    </button>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
            Cargar Más Proyectos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
