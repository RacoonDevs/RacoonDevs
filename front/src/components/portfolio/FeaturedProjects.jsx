import { motion } from "framer-motion";
import { featuredProjects } from "../../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-txt/40 mb-4">
            Casos Destacados
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-txt">
            Proyectos seleccionados
          </h2>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-ink/[0.06] bg-ink/[0.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-[0.2em] uppercase text-txt/40">
                      {project.category}
                    </span>
                    <span className="w-px h-3 bg-ink/10" />
                    <span className="text-xs text-txt/30">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-txt mb-1">
                    {project.title}
                  </h3>
                  <p className="text-txt/50 mb-4">{project.subtitle}</p>
                </div>

                {/* Challenge / Solution / Result */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-txt/30 mb-1">
                      Desafío
                    </p>
                    <p className="text-sm text-txt/60 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-txt/30 mb-1">
                      Lo que construimos
                    </p>
                    <p className="text-sm text-txt/60 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-txt/30 mb-1">
                      Resultado
                    </p>
                    <p className="text-sm text-txt/80 leading-relaxed font-medium">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-txt/50 border border-ink/[0.08] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-txt/70 hover:text-txt transition-colors duration-200 pt-2"
                >
                  Ver proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
