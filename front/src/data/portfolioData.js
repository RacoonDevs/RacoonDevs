// src/data/portfolioData.js

import sinabeImage from "../assets/portafolio/sinabe.webp";
import mycadImage from "../assets/portafolio/mycad.webp";
import ntropiaImage from "../assets/portafolio/ntropia.webp";
import carnitasJoselesImage from "../assets/portafolio/carnitas-joseles.webp";
import fgCarpinteriaImage from "../assets/portafolio/fg-carpinteria.webp";
import familiaCrossfitImage from "../assets/portafolio/famcrossfit.webp";
import carnitasElPitillalImage from "../assets/portafolio/logo-carnitas.webp";

export const portfolioStats = [
  { number: "10+", label: "Proyectos Entregados" },
  { number: "98%", label: "Clientes Satisfechos" },
  { number: "6+", label: "Industrias Atendidas" },
  { number: "3+", label: "Años de Experiencia" },
];

export const featuredProjects = [
  {
    id: "sinabe",
    title: "Sinabe",
    subtitle: "Sistema de Inventarios Agroempresarial",
    description:
      "Sistema integral de gestión de inventarios para el sector agroempresarial. Control de stocks, materiales y equipos agrícolas con reportes automatizados y alertas inteligentes.",
    challenge:
      "La gestión manual de más de 4,000 artículos generaba errores constantes, pérdidas de inventario y retrasos en la operación diaria.",
    solution:
      "Desarrollamos una plataforma web y móvil con inventario en tiempo real, gestión de proveedores integrada y un sistema de alertas automatizado.",
    result:
      "+95% de eficiencia operativa y control total sobre más de 4,000 artículos de inventario.",
    image: sinabeImage,
    category: "Software a la Medida",
    year: "2023",
    tags: ["React", "Node.js", "Express", "MySQL", "Docker", "Capacitor"],
    link: "https://sinabe.racoondevs.com",
    caseStudy: "/portafolio/sinabe",
  },
  {
    id: "mycad",
    title: "MyCAD",
    subtitle: "Administración Integral de Flota Vehicular",
    description:
      "Plataforma de administración de flota vehicular con sistema complejo de histórico, gestión automatizada de mantenimientos y análisis de costos operativos.",
    challenge:
      "El control manual de 50+ vehículos generaba costos ocultos, mantenimientos olvidados y falta de visibilidad sobre el estado real de la flota.",
    solution:
      "Plataforma con seguimiento en tiempo real, mantenimiento predictivo, análisis de combustible y reportes personalizables para gerencia.",
    result:
      "+120% de eficiencia operativa y -40% en costos de mantenimiento correctivo.",
    image: mycadImage,
    category: "Aplicación Web",
    year: "2024",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    link: "https://mycad.racoondevs.com",
    caseStudy: "/portafolio/mycad",
  },
];

export const allProjects = [
  {
    id: "ntropia",
    title: "Ntropia",
    subtitle: "Workspaces Colaborativos en Tiempo Real",
    description:
      "Plataforma de trabajo colaborativo que permite a equipos interactuar en espacios virtuales con herramientas de productividad integradas.",
    image: ntropiaImage,
    category: "Aplicación Web",
    year: "2024",
    tags: ["React", "Socket.io", "Docker", "Directus", "Vite", "Tailwind CSS"],
    status: "Finalizado",
    link: "https://ntropia.racoondevs.com",
    caseStudy: "/portafolio/ntropia",
  },
  {
    id: "carnitas-el-pitillal",
    title: "Carnitas El Pitillal",
    subtitle: "Rebranding y Sitio Web",
    description:
      "Sitio web con menú digital, sistema de reservas y estrategia de marca renovada para restaurante local establecido.",
    image: carnitasElPitillalImage,
    category: "Landing Page",
    year: "2024",
    tags: ["Vite", "React", "Tailwind CSS", "Diseño"],
    status: "Finalizado",
    link: "https://carnitaselpitillal.pvj.mx",
    caseStudy: "/portafolio/carnitas-el-pitillal",
  },
  {
    id: "fg-carpinteria",
    title: "FG Carpintería",
    subtitle: "Sitio Web Corporativo",
    description:
      "Sitio web corporativo bilingüe con catálogo de productos y sistema de cotizaciones para empresa de carpintería especializada.",
    image: fgCarpinteriaImage,
    category: "Sitio Web",
    year: "2024",
    tags: ["React", "i18n", "Diseño", "Tailwind CSS"],
    status: "Finalizado",
    link: "https://fgcarpinteria.pvj.mx",
    caseStudy: "/portafolio/fg-carpinteria",
  },
  {
    id: "familia-crossfit",
    title: "Familia CrossFit",
    subtitle: "Gestión de Competencias Deportivas",
    description:
      "Plataforma para gestión de competencias deportivas en gimnasios: registro de atletas, seguimiento de resultados y rankings en tiempo real.",
    image: familiaCrossfitImage,
    category: "Plataforma Deportiva",
    year: "2025",
    tags: ["React", "Node.js", "Prisma", "MySQL", "Vite"],
    status: "En Desarrollo",
    link: "https://famcrossfit.racoondevs.com",
    caseStudy: "/portafolio/familia-crossfit",
  },
  {
    id: "carnitas-joseles",
    title: "Carnitas Joseles",
    subtitle: "Rebranding y Sitio Web",
    description:
      "Proyecto de rebranding completo y desarrollo de sitio web para restaurante reconocido con presencia local consolidada.",
    image: carnitasJoselesImage,
    category: "Branding & Web",
    year: "2025",
    tags: ["Branding", "React", "Diseño", "Marketing"],
    status: "En Desarrollo",
    link: "https://carnitasjoseles.pvj.mx",
    caseStudy: "/portafolio/carnitas-joseles",
  },
];

export const projectCategories = [
  "Todos",
  "Software a la Medida",
  "Aplicación Web",
  "Landing Page",
  "Sitio Web",
  "Plataforma Deportiva",
  "Branding & Web",
];
