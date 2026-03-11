import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects, projectCategories } from "../../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
            Todos los Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Más trabajo seleccionado
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-colors duration-200 ${
                selectedCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/[0.08] hover:border-white/20 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Status */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 text-[10px] tracking-wide uppercase rounded-full backdrop-blur-sm ${
                        project.status === "Finalizado"
                          ? "bg-white/10 text-white/60"
                          : "bg-white/10 text-amber-300/80"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-white/20">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-0.5 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </h3>
                    <p className="text-sm text-white/40">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] text-white/40 border border-white/[0.06] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] text-white/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AllProjects;
