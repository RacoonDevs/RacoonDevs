// src/components/portfolio/AllProjects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";
import { allProjects, projectCategories } from "../../data/portfolioData";

const statusColors = {
  Finalizado: "bg-emerald-500/[0.08] text-emerald-600 border-emerald-500/[0.15]",
  "En Desarrollo": "bg-accent/[0.08] text-accent border-accent/[0.15]",
};

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Combine featured + all for filtering, but here we only show allProjects
  const filtered =
    activeCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  // Only show categories that have projects in allProjects
  const relevantCategories = projectCategories.filter(
    (cat) => cat === "Todos" || allProjects.some((p) => p.category === cat),
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-primary/[0.08]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            className="mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/[0.08] border border-secondary/[0.15] mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-secondary font-medium">
                Más Proyectos
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt max-w-2xl leading-tight">
              Cada proyecto,{" "}
              <span className="gradient-text">una historia.</span>
            </h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            {relevantCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "gradient-primary text-white shadow-md shadow-primary/20"
                    : "bg-primary/[0.04] border border-primary/[0.1] text-txt-3 hover:text-txt hover:border-primary/[0.2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              {...staggerContainer(0.08)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((project) => (
                <motion.a
                  key={project.id}
                  variants={staggerChild}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl bg-surface-alt/50 border border-primary/[0.08] hover:border-primary/[0.2] transition-all duration-400 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-deep/60 to-transparent pointer-events-none" />
                    {project.status && (
                      <span
                        className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[project.status] || "bg-primary/[0.08] text-primary border-primary/[0.15]"}`}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-txt group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <ExternalLink className="w-3.5 h-3.5 text-txt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-xs text-txt-3 mb-3">{project.subtitle}</p>
                    <p className="text-xs text-txt-2 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-primary/[0.06]">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/[0.04] border border-primary/[0.08] text-txt-4"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
