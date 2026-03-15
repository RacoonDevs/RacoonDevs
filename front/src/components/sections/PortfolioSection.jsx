// src/components/sections/PortfolioSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

import sinabeImage from "../../assets/portafolio/sinabe.webp";
import mycadImage from "../../assets/portafolio/mycad.webp";
import ntropiaImage from "../../assets/portafolio/ntropia.webp";
import inmoboImage from "../../assets/portafolio/inmobo.webp";
import flotaproImage from "../../assets/portafolio/flotapro.webp";
import catalogyImage from "../../assets/portafolio/catalogy.webp";
import agendaproImage from "../../assets/portafolio/agendapro.webp";

const caseStudies = [
  {
    name: "Inmobo",
    type: "Plataforma de Reservaciones & Marketplace",
    challenge:
      "Negocios de renta vacacional, bienes raíces, vehículos y servicios necesitaban una plataforma unificada para publicar, reservar y gestionar múltiples tipos de recursos con personalización por cliente.",
    built:
      "Marketplace multi-recurso con booking online vía Stripe, panel administrativo completo, gestión de leads, chat en vivo, vouchers, personalización de servicios, landing pública y soporte multi-idioma (ES/EN).",
    outcome:
      "Plataforma escalable con flujos de reserva directa e indirecta, wizard de publicación unificado y arquitectura lista para múltiples modelos de negocio.",
    image: inmoboImage,
    link: "https://inmobo-crm.site.racoondevs.com",
    demoLink: "https://inmobo.site.racoondevs.com",
    tags: ["React", "Appwrite", "Stripe", "PWA", "i18n"],
    year: "2026",
    isNew: true,
    isFeatured: true,
  },
  {
    name: "FlotaPro",
    type: "Sistema de Control de Flota & Personal",
    challenge:
      "Empresas con flotas vehiculares necesitaban centralizar el control de vehículos, choferes, documentación, reportes de servicio y reparaciones con permisos granulares por rol.",
    built:
      "Plataforma con gestión integral de flota, personal, documentación vehicular, reportes de servicio/reparación y sistema RBAC completo con permisos por usuarios y roles.",
    outcome:
      "Control total de flota con visibilidad en tiempo real, reducción de costos operativos y gestión de personal centralizada.",
    image: flotaproImage,
    link: "https://dev.mycad.mx",
    tags: ["React", "TypeScript", "Vite", "PWA"],
    year: "2025",
  },
  {
    name: "Catalogy",
    type: "Catálogos en Línea Multi-Tenant",
    challenge:
      "Pequeños negocios necesitaban una forma accesible de tener un catálogo en línea profesional para anunciar productos, sin la complejidad de un e-commerce completo.",
    built:
      "Plataforma gratuita multi-tenant con catálogos por subdominio, plantillas predefinidas, gestión de stock, carrito ficticio y pedidos directos por WhatsApp.",
    outcome:
      "Sistema escalable por tenant con branding personalizable, experiencia e-commerce simplificada y comunicación directa con clientes.",
    image: catalogyImage,
    link: "https://catalogy.racoondevs.com",
    tags: ["React", "Appwrite", "Vite", "PWA"],
    year: "2026",
    isNew: true,
  },
  {
    name: "AgendaPro",
    type: "Agenda Colaborativa & Productividad",
    challenge:
      "Equipos y grupos necesitaban una herramienta moderna para compartir calendarios, coordinar eventos y gestionar agendas grupales con control de permisos.",
    built:
      "PWA mobile-first con agendas grupales compartidas, invitaciones por email, gestión de roles y permisos sobre calendarios, diseño responsivo y experiencia optimizada para uso diario.",
    outcome:
      "App SaaS/PWA con experiencia rápida, instalable desde cualquier dispositivo y flujos claros de calendario y productividad.",
    image: agendaproImage,
    link: "https://agendapro.racoondevs.com",
    tags: ["React", "Vite", "PWA", "Tailwind"],
    year: "2025",
  },
];

const previousWork = [
  {
    name: "Sinabe",
    type: "Sistema de Inventarios",
    image: sinabeImage,
    link: "https://sinabe.racoondevs.com",
    tags: ["React", "Node.js", "MySQL", "Docker"],
    year: "2023",
  },
  {
    name: "MyCAD",
    type: "Dashboard de Flota Vehicular",
    image: mycadImage,
    link: "https://mycad.racoondevs.com",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL"],
    year: "2024",
  },
  {
    name: "Ntropia",
    type: "Colaboración en Tiempo Real",
    image: ntropiaImage,
    link: "https://ntropia.racoondevs.com",
    tags: ["React", "Socket.io", "Docker", "Directus"],
    year: "2024",
  },
];

const FeaturedCard = ({ project }) => {
  return (
    <motion.div variants={staggerChild} className="group relative">
      <div className="relative rounded-xl overflow-hidden bg-surface-alt/50 border border-primary/[0.08] hover:border-primary/[0.2] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5">
        {/* Full-width image */}
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
              alt={`${project.name} — ${project.type}`}
              className="w-full h-full object-cover object-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: ease.smooth }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-deep via-surface-deep/50 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
            {/* Left: Title + meta */}
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h3 className="text-2xl sm:text-3xl font-bold text-txt">
                  {project.name}
                </h3>
                <span className="px-1.5 py-0.5 rounded bg-primary/[0.08] border border-primary/[0.12] text-[10px] text-txt-3 font-medium">
                  {project.year}
                </span>
                {project.isNew && (
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 text-[10px] text-primary font-semibold uppercase tracking-wider">
                    Nuevo
                  </span>
                )}
              </div>
              <p className="text-xs text-txt-3 tracking-wide uppercase mb-5">
                {project.type}
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

            {/* Right: Details */}
            <div className="space-y-3">
              <div className="pl-3 border-l-2 border-violet-500/30">
                <p className="text-[10px] uppercase tracking-widest text-violet-500 mb-0.5 font-medium">
                  Desafío
                </p>
                <p className="text-txt-2 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="pl-3 border-l-2 border-cyan-500/30">
                <p className="text-[10px] uppercase tracking-widest text-cyan-500 mb-0.5 font-medium">
                  Solución
                </p>
                <p className="text-txt-2 text-sm leading-relaxed">
                  {project.built}
                </p>
              </div>
              <div className="pl-3 border-l-2 border-emerald-500/30">
                <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-0.5 font-medium">
                  Resultado
                </p>
                <p className="text-txt-2 text-sm font-medium leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyCard = ({ project }) => {
  return (
    <motion.div variants={staggerChild} className="group relative">
      <div className="relative rounded-xl overflow-hidden bg-surface-alt/50 border border-primary/[0.08] hover:border-primary/[0.2] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Image in browser-chrome mockup */}
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
                alt={`${project.name} — ${project.type}`}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: ease.smooth }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/40 to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:to-surface-deep/50" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-txt">
                    {project.name}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded bg-primary/[0.08] border border-primary/[0.12] text-[10px] text-txt-3 font-medium">
                    {project.year}
                  </span>
                  {project.isNew && (
                    <span className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 text-[9px] text-primary font-semibold uppercase tracking-wider">
                      Nuevo
                    </span>
                  )}
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
                {project.type}
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
                    {project.built}
                  </p>
                </div>
                <div className="pl-2.5 border-l-2 border-emerald-500/30">
                  <p className="text-[10px] uppercase tracking-widest text-emerald-500 mb-0.5 font-medium">
                    Resultado
                  </p>
                  <p className="text-txt-2 text-xs font-medium leading-relaxed">
                    {project.outcome}
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
      </div>
    </motion.div>
  );
};

const PortfolioSection = ({ condensed = false }) => {
  const visibleStudies = condensed ? caseStudies.slice(0, 2) : caseStudies;

  return (
    <section
      className="py-20 sm:py-24 lg:py-32 relative border-t border-primary/[0.08]"
      id="portafolio"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
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
                Trabajo Seleccionado
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Proyectos reales,{" "}
              <span className="gradient-text">resultados medibles.</span>
            </h2>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            {...staggerContainer(0.15)}
            className="space-y-5 lg:space-y-6"
          >
            {visibleStudies.map((project) =>
              project.isFeatured ? (
                <FeaturedCard key={project.name} project={project} />
              ) : (
                <CaseStudyCard key={project.name} project={project} />
              ),
            )}
          </motion.div>

          {/* Previous Work */}
          {!condensed && (
            <motion.div
              className="mt-14 lg:mt-18"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: ease.out }}
            >
              <p className="text-xs tracking-widest uppercase text-txt-4 mb-5">
                Trabajo Anterior
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {previousWork.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg bg-surface-alt/50 border border-primary/[0.08] hover:border-primary/[0.2] transition-all duration-400 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-txt">
                          {project.name}
                        </h4>
                        <span className="text-[10px] text-txt-4">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-[11px] text-txt-3 mb-2">
                        {project.type}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded text-[9px] bg-primary/[0.04] border border-primary/[0.08] text-txt-4"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: ease.out }}
          >
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-3 text-txt font-medium hover:text-txt-2 transition-colors duration-300 group"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
