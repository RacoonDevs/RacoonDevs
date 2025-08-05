// src/components/sections/PortfolioSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Calendar,
  ArrowRight,
  Code2,
} from "lucide-react";

// Import images
import sinabeImage from "../../assets/portafolio/sinabe.webp";
import mycadImage from "../../assets/portafolio/mycad.webp";
import ntropiaImage from "../../assets/portafolio/ntropia.webp";

const PortfolioSection = () => {
  const projects = [
    {
      name: "Sinabe",
      tagline: "Gestión de inventarios para equipos",
      description:
        "Plataforma web que centraliza el control de stock, notificaciones y reportes en tiempo real.",
      image: sinabeImage,
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
        "Docker",
      ],
      links: {
        demo: "sinabe.racoondevs.com",
        github: "github.com/racoondevs/sinabe",
      },
      duration: "4 meses (Ene–Abr 2025)",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500/50 to-blue-500/50",
      accentColor: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
    },
    {
      name: "MyCAD",
      tagline: "Administración integral de flota vehicular",
      description:
        "App para registrar, rentar y dar mantenimiento a vehículos con historial completo y gestión de condiciones.",
      image: mycadImage,
      technologies: [
        "React",
        "Redux",
        "Flowbite",
        "Node.js",
        "Express",
        "Prisma",
        "MySQL",
      ],
      links: {
        demo: "mycad.racoondevs.com",
        github: "github.com/racoondevs/mycad",
      },
      duration: "3 meses (Abr–Jun 2025)",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      accentColor: "text-purple-400",
      bgAccent: "bg-purple-500/10",
    },
    {
      name: "Ntropia",
      tagline: "Canvas colaborativo y notificaciones en tiempo real",
      description:
        "Espacio de trabajo compartido con edición simultánea de mapas, shapes y chat, sobre Directus y WebSockets.",
      image: ntropiaImage,
      technologies: [
        "React (Vite)",
        "Directus",
        "Socket.IO",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: {
        demo: "ntropia.racoondevs.com",
        github: "github.com/racoondevs/ntropia",
      },
      duration: "2 meses (Jul–Ago 2025)",
      gradient: "from-pink-500/20 to-orange-500/20",
      borderGradient: "from-pink-500/50 to-orange-500/50",
      accentColor: "text-pink-400",
      bgAccent: "bg-pink-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      id="portafolio"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portafolio
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Proyectos que demuestran nuestra pasión por crear soluciones
              digitales que transforman negocios
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="group relative"
              >
                {/* Project Card */}
                <div
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br ${project.gradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-black/10`}
                >
                  {/* Project Layout: Image + Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Project Image */}
                    <div className="relative order-2 lg:order-1">
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        <img
                          src={project.image}
                          alt={`Captura de ${project.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                        />
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="order-1 lg:order-2 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                          <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white">
                            {project.name}
                          </h3>
                          <span
                            className={`self-start px-3 py-1 rounded-full text-xs font-medium ${project.bgAccent} ${project.accentColor} border border-current/20`}
                          >
                            {index === projects.length - 1
                              ? "Reciente"
                              : "Destacado"}
                          </span>
                        </div>
                        <p
                          className={`text-lg ${project.accentColor} font-medium mb-4`}
                        >
                          {project.tagline}
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-gray-400 mb-6">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.duration}</span>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 text-sm">
                            Stack Tecnológico
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-white/5 hover:bg-white/10 text-gray-300 rounded text-xs font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.a
                          href={`https://${project.links.demo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={`https://${project.links.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600/30 hover:border-gray-500/50 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Código</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.borderGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight
                      className={`w-4 h-4 lg:w-6 lg:h-6 ${project.accentColor}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg mb-6">
              Esto es solo una muestra de nuestro trabajo. Cada proyecto es una
              historia de innovación y dedicación.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/portafolio"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Ver Todos los Proyectos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
