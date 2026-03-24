import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { cn } from "../utils/cn";
import { ease, staggerContainer, staggerChild } from "../utils/motion";
import {
  portfolioStats,
  featuredProjects,
  allProjects,
  projectCategories,
} from "../data/portfolioData";
import { useNavigateToSection } from "../components/utils/NavigateToSection";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";

/* ── Color maps ── */
const statColors = [
  {
    text: "text-primary",
    bg: "bg-primary/[0.08]",
    border: "border-primary/[0.15]",
  },
  {
    text: "text-secondary",
    bg: "bg-secondary/[0.08]",
    border: "border-secondary/[0.15]",
  },
  {
    text: "text-accent",
    bg: "bg-accent/[0.08]",
    border: "border-accent/[0.15]",
  },
  {
    text: "text-emerald-500",
    bg: "bg-emerald-500/[0.08]",
    border: "border-emerald-500/[0.15]",
  },
];

const statusColors = {
  Finalizado:
    "bg-emerald-500/[0.08] text-emerald-600 border-emerald-500/[0.15]",
  "En Desarrollo": "bg-accent/[0.08] text-accent border-accent/[0.15]",
};

/* ── Sub-components ── */

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
        Desafio
      </p>
      <p className="text-txt-2 text-sm leading-relaxed">{project.challenge}</p>
    </div>
    <div className="pl-3 border-l-2 border-cyan-500/30">
      <p className="text-[10px] uppercase tracking-widest text-cyan-500 mb-0.5 font-medium">
        Solucion
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

const FeaturedCard = ({ project, isFeatured }) => (
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
                    Desafio
                  </p>
                  <p className="text-txt-2 text-xs leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="pl-2.5 border-l-2 border-cyan-500/30">
                  <p className="text-[10px] uppercase tracking-widest text-cyan-500 mb-0.5 font-medium">
                    Solucion
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

/* ── Page Component ── */

const PortfolioPage = () => {
  const navigateToSection = useNavigateToSection();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const relevantCategories = projectCategories.filter(
    (cat) => cat === "Todos" || allProjects.some((p) => p.category === cat),
  );

  return (
    <PageLayout>
      <SEOHead
        title="Portafolio | Racoon Devs"
        description="Explora nuestros proyectos de desarrollo web, apps moviles y software a la medida. Casos reales de exito."
        canonical="https://racoondevs.com/portafolio"
      />

      {/* ── Hero ── */}
      <section className="relative py-20 sm:py-28 lg:py-36">
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
                ayudan a nuestros clientes a operar mejor, crecer mas rapido y
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
                { value: "98%", label: "satisfaccion" },
              ].map((stat, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-primary font-semibold">
                    {stat.value}
                  </span>
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

      {/* ── Stats Bar ── */}
      <section className="py-10 sm:py-14 border-t border-primary/[0.08]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              {...staggerContainer(0.1)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {portfolioStats.map((stat, i) => {
                const color = statColors[i % statColors.length];
                return (
                  <motion.div
                    key={stat.label}
                    variants={staggerChild}
                    className={`rounded-xl p-5 ${color.bg} border ${color.border} text-center`}
                  >
                    <div
                      className={`text-3xl sm:text-4xl font-bold ${color.text} mb-1`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-txt-3">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
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

      {/* ── All Projects (filterable) ── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-primary/[0.08]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
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
                  Mas Proyectos
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
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                    activeCategory === cat
                      ? "gradient-primary text-white shadow-md shadow-primary/20"
                      : "bg-primary/[0.04] border border-primary/[0.1] text-txt-3 hover:text-txt hover:border-primary/[0.2]",
                  )}
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
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-deep/60 to-transparent pointer-events-none" />
                      {project.status && (
                        <span
                          className={cn(
                            "absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-medium border",
                            statusColors[project.status] ||
                              "bg-primary/[0.08] text-primary border-primary/[0.15]",
                          )}
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
                      <p className="text-xs text-txt-3 mb-3">
                        {project.subtitle}
                      </p>
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

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

              <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                  ¿Listo para construir tu proximo proyecto?
                </h2>
                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                  Platicanos tu idea y diseñamos juntos la solucion perfecta
                  para tu negocio.
                </p>
                <button
                  onClick={() => navigateToSection("/#contacto")}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg shadow-primary/30 group cursor-pointer"
                >
                  Iniciar conversacion
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
