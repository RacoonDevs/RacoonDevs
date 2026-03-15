// src/components/portfolio/FeaturedProjects.jsx
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";
import { featuredProjects } from "../../data/portfolioData";

const FeaturedCard = ({ project, isFeatured }) => {
  return (
    <motion.div variants={staggerChild} className="group relative">
      <div className="relative rounded-xl overflow-hidden bg-surface-alt/50 border border-primary/[0.08] hover:border-primary/[0.2] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5">
        {isFeatured ? (
          <>
            {/* Full-width image for main featured */}
            <div className="relative">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-alt border-b border-primary/[0.06]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
                </div>
                <div className="ml-2 flex-1 max-w-[220px]">
                  <div className="h-4 rounded bg-primary/[0.04] border border-primary/[0.06] flex items-center px-2">
                    <span className="text-[9px] text-txt-4 truncate">
                      {(project.demoLink || project.link).replace("https://", "")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[2.2/1] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: ease.smooth }}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-deep via-surface-deep/50 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content below image */}
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
                <ProjectMeta project={project} />
                <ProjectDetails project={project} />
              </div>
            </div>
          </>
        ) : (
          /* Side-by-side layout */
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-alt border-b border-primary/[0.06]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
                </div>
                <div className="ml-2 flex-1 max-w-[180px]">
                  <div className="h-4 rounded bg-primary/[0.04] border border-primary/[0.06] flex items-center px-2">
                    <span className="text-[9px] text-txt-4 truncate">
                      {project.link.replace("https://", "")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: ease.smooth }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/40 to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:to-surface-deep/50" />
              </div>
            </div>

            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-txt">
                      {project.title}
                    </h3>
                    <span className="px-1.5 py-0.5 rounded bg-primary/[0.08] border border-primary/[0.12] text-[10px] text-txt-3 font-medium">
                      {project.year}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/[0.06] border border-primary/[0.12] flex items-center justify-center text-txt-3 hover:text-txt hover:bg-primary/[0.12] transition-all duration-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-txt-3 tracking-wide uppercase mb-4">
                  {project.subtitle}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="pl-2.5 border-l-2 border-violet-500/30">
                    <p className="text-[10px] uppercase tracking-widest text-violet-500 mb-0.5 font-medium">
                      Desafío
                    </p>
                    <p className="text-txt-2 text-xs leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="pl-2.5 border-l-2 border-cyan-500/30">
                    <p className="text-[10px] uppercase tracking-widest text-cyan-500 mb-0.5 font-medium">
                      Solución
                    </p>
                    <p className="text-txt-2 text-xs leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="pl-2.5 border-l-2 border-emerald-500/30">
                    <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-0.5 font-medium">
                      Resultado
                    </p>
                    <p className="text-txt-2 text-xs font-medium leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-primary/[0.08]">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/[0.04] border border-primary/[0.1] text-txt-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-light transition-colors duration-300 group/link font-medium"
                >
                  Ver en vivo
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectMeta = ({ project }) => (
  <div>
    <div className="flex items-center gap-2.5 mb-1.5">
      <h3 className="text-2xl sm:text-3xl font-bold text-txt">
        {project.title}
      </h3>
      <span className="px-1.5 py-0.5 rounded bg-primary/[0.08] border border-primary/[0.12] text-[10px] text-txt-3 font-medium">
        {project.year}
      </span>
    </div>
    <p className="text-xs text-txt-3 tracking-wide uppercase mb-5">
      {project.subtitle}
    </p>
    <div className="flex flex-wrap gap-1.5 mb-5">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/[0.04] border border-primary/[0.1] text-txt-3"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg gradient-primary text-white text-xs font-medium hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20 group/proj"
      >
        Ver proyecto
        <ExternalLink className="w-3 h-3 opacity-60 group-hover/proj:opacity-100 transition-opacity" />
      </a>
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-primary/[0.15] text-xs text-txt-2 font-medium hover:text-txt hover:border-primary/[0.3] transition-all duration-300 group/demo"
        >
          Ver demo
          <ArrowRight className="w-3 h-3 group-hover/demo:translate-x-0.5 transition-transform duration-300" />
        </a>
      )}
    </div>
  </div>
);

const ProjectDetails = ({ project }) => (
  <div className="space-y-3">
    <div className="pl-3 border-l-2 border-violet-500/30">
      <p className="text-[10px] uppercase tracking-widest text-violet-500 mb-0.5 font-medium">
        Desafío
      </p>
      <p className="text-txt-2 text-sm leading-relaxed">{project.challenge}</p>
    </div>
    <div className="pl-3 border-l-2 border-cyan-500/30">
      <p className="text-[10px] uppercase tracking-widest text-cyan-500 mb-0.5 font-medium">
        Solución
      </p>
      <p className="text-txt-2 text-sm leading-relaxed">{project.solution}</p>
    </div>
    <div className="pl-3 border-l-2 border-emerald-500/30">
      <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-0.5 font-medium">
        Resultado
      </p>
      <p className="text-txt-2 text-sm font-medium leading-relaxed">
        {project.result}
      </p>
    </div>
  </div>
);

const FeaturedProjects = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/[0.08] border border-accent/[0.15] mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-accent font-medium">
                Proyectos Destacados
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Software que{" "}
              <span className="gradient-text">impulsa negocios.</span>
            </h2>
          </motion.div>

          {/* Project cards */}
          <motion.div
            {...staggerContainer(0.15)}
            className="space-y-5 lg:space-y-6"
          >
            {featuredProjects.map((project, i) => (
              <FeaturedCard
                key={project.id}
                project={project}
                isFeatured={i === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
