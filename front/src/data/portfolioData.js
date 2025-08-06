// src/data/portfolioData.js

// Import images
import sinabeImage from "../assets/portafolio/sinabe.webp";
import mycadImage from "../assets/portafolio/mycad.webp";
import ntropiaImage from "../assets/portafolio/ntropia.webp";
import carnitasJoselesImage from "../assets/portafolio/carnitas-joseles.webp";
import fgCarpinteriaImage from "../assets/portafolio/fg-carpinteria.webp";
import familiaCrossfitImage from "../assets/portafolio/famcrossfit.webp";
import carnitasElPitillalImage from "../assets/portafolio/logo-carnitas.webp";

export const portfolioStats = [
  {
    number: "50+",
    label: "Proyectos Completados",
    icon: "📊",
  },
  {
    number: "98%",
    label: "Tasa de Satisfacción",
    icon: "⭐",
  },
  {
    number: "2M+",
    label: "Usuarios Impactados",
    icon: "👥",
  },
  {
    number: "24/7",
    label: "Soporte Disponible",
    icon: "🕐",
  },
];

export const featuredProjects = [
  {
    id: "sinabe",
    title: "Sinabe",
    subtitle: "Sistema de Inventarios",
    description:
      "Sistema integral de gestión de inventarios diseñado específicamente para el sector agroempresarial, facilitando el control de stocks, materiales y equipos agrícolas.",
    image: sinabeImage,
    category: "Software Development",
    year: "2023",
    client: "Privado",
    tags: ["React", "Node.js", "Express", "MySQL", "Docker", "Capacitor"],
    metrics: {
      eficiencia: "+95%",
      inventarios: "4,000+",
      satisfaction: "98.5%",
      "tiempo de actividad": "4.9/5",
    },
    features: [
      "Control de inventarios en tiempo real",
      "Gestión de proveedores integrada",
      "Reportes automáticos avanzados",
      "Sistema de alertas inteligente",
    ],
    link: "https://sinabe.racoondevs.com",
    liveDemo: "https://sinabe.racoondevs.com",
    caseStudy: "/portafolio/sinabe",
  },
  {
    id: "mycad",
    title: "MyCAD",
    subtitle: "Administración Integral de Flota Vehicular",
    description:
      "Plataforma completa de administración de flota vehicular que optimiza el control de vehículos con un sistema complejo de histórico y gestión automatizada.",
    image: mycadImage,
    category: "Web Application",
    year: "2024",
    client: "Maquinaria y Conteras del Centro.",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    metrics: {
      vehiculos: "50+",
      eficiencia: "+120%",
      "reducción de costos": "-40%",
      calificación: "4.8/5",
    },
    features: [
      "Seguimiento GPS en tiempo real",
      "Mantenimiento predictivo",
      "Análisis de combustible avanzado",
      "Reportes personalizables",
    ],
    link: "https://mycad.racoondevs.com",
    liveDemo: "https://mycad.racoondevs.com",
    caseStudy: "/portafolio/mycad",
  },
];

export const allProjects = [
  {
    id: "ntropia",
    title: "Ntropia",
    subtitle: "Workspaces colaborativos en tiempo real",
    description:
      "Plataforma de trabajo colaborativo que permite a equipos interactuar en espacios virtuales con herramientas de productividad integradas.",
    image: ntropiaImage,
    category: "Mobile App",
    year: "2024",
    tags: [
      "React JS",
      "Socket.io",
      "Docker",
      "Directus",
      "Vite JS",
      "Tailwind CSS",
    ],
    status: "Finalizado",
    link: "https://ntropia.racoondevs.com",
    caseStudy: "/portafolio/ntropia",
  },
  {
    id: "carnitas-el-pitillal",
    title: "Carnitas El Pitillal",
    subtitle: "Rebranding y Página Web",
    description:
      "Plataforma web optimizada para cadenas de suministro sustentables con análisis de huella de carbono integrado.",
    image: carnitasElPitillalImage,
    category: "Landing Page - Menú y Reservas",
    year: "2024",
    tags: ["Vite JS", "React JS", "Tailwind CSS", "Design"],
    status: "Finalizado",
    link: "https://carnitaselpitillal.pvj.mx",
    caseStudy: "/portafolio/carnitas-el-pitillal",
  },
  {
    id: "fg-carpinteria",
    title: "FG Carpintería",
    subtitle: "Página Web",
    description:
      "Sitio web corporativo para empresa de carpintería especializada, con catálogo de productos y sistema de cotizaciones.",
    image: fgCarpinteriaImage,
    category: "Informational Website",
    year: "2024",
    tags: ["React JS", "Translator", "Design", "Tailwind CSS"],
    status: "Finalizado",
    link: "https://fgcarpinteria.pvj.mx",
    caseStudy: "/portafolio/fg-carpinteria",
  },
  {
    id: "familia-crossfit",
    title: "Familia CrossFit",
    subtitle: "Gestión de Competencias Deportivas",
    description:
      "Plataforma integral para la gestión de competencias deportivas en gimnasios, incluyendo registro, seguimiento y rankings.",
    image: familiaCrossfitImage,
    category: "Sports Platform",
    year: "2025",
    tags: ["React JS", "Node.js", "Prisma", "Mysql", "Vite JS"],
    status: "En Desarrollo",
    link: "https://famcrossfit.racoondevs.com",
    caseStudy: "/portafolio/familia-crossfit",
  },
  {
    id: "carnitas-joseles",
    title: "Carnitas Joseles",
    subtitle: "Rebranding y Página Web",
    description:
      "Proyecto de rebranding completo y desarrollo de sitio web para el reconocido restaurante Carnitas Joseles.",
    image: carnitasJoselesImage,
    category: "Branding & Web",
    year: "2025",
    tags: ["Branding", "React", "Design", "Marketing"],
    status: "En Desarrollo",
    link: "https://carnitasjoseles.pvj.mx",
    caseStudy: "/portafolio/carnitas-joseles",
  },
];

export const projectCategories = [
  "Todos los Proyectos",
  "Software Development",
  "Web Application",
  "Mobile App",
  "Web Platform",
  "Healthcare App",
  "Sports Platform",
  "Branding & Web",
  "Corporate Website",
  "IoT Platform",
];
