// src/components/sections/PortfolioSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import sinabeImage from "../../assets/portafolio/sinabe.webp";
import mycadImage from "../../assets/portafolio/mycad.webp";
import ntropiaImage from "../../assets/portafolio/ntropia.webp";

const caseStudies = [
  {
    name: "Sinabe",
    type: "Sistema de Inventarios",
    challenge:
      "Una empresa agroempresarial necesitaba centralizar el control de miles de artículos, materiales y equipos dispersos en múltiples ubicaciones.",
    built:
      "Plataforma web completa con gestión de inventarios en tiempo real, alertas automáticas, reportes avanzados y gestión de proveedores.",
    outcome:
      "Control centralizado de +4,000 artículos con eficiencia operativa del 95%.",
    image: sinabeImage,
    link: "https://sinabe.racoondevs.com",
  },
  {
    name: "MyCAD",
    type: "Dashboard de Administración de Flota",
    challenge:
      "Gestionar más de 50 vehículos con historial de mantenimiento, rentas, condiciones y costos operativos era manual y propenso a errores.",
    built:
      "Panel de administración integral con historial de vehículos, seguimiento de mantenimiento, análisis de costos y reportes personalizables.",
    outcome:
      "Reducción de 40% en costos operativos y visibilidad total de la flota.",
    image: mycadImage,
    link: "https://mycad.racoondevs.com",
  },
  {
    name: "Ntropia",
    type: "Plataforma Colaborativa en Tiempo Real",
    challenge:
      "Equipos distribuidos necesitaban un espacio de trabajo compartido con edición simultánea y comunicación en tiempo real.",
    built:
      "Canvas colaborativo con WebSockets, chat integrado, edición simultánea de elementos y sistema de notificaciones en tiempo real.",
    outcome:
      "Colaboración fluida entre equipos con latencia mínima y edición concurrente.",
    image: ntropiaImage,
    link: "https://ntropia.racoondevs.com",
  },
];

const PortfolioSection = () => {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32 relative border-t border-white/5"
      id="portafolio"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
              Trabajo Seleccionado
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
              Proyectos reales,{" "}
              <span className="text-gray-400">resultados medibles.</span>
            </h2>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-6 lg:space-y-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.name}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.type}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-sm text-gray-500 tracking-wide uppercase mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                      {project.name}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                          Desafío
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                          Lo que construimos
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.built}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                          Resultado
                        </p>
                        <p className="text-gray-300 text-sm font-medium leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto en vivo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-3 text-white font-medium hover:text-gray-300 transition-colors duration-300 group"
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
