// src/data/portfolioData.js
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
    subtitle: "Sistema de Inventarios para Agroempresariales",
    description:
      "Sistema integral de gestión de inventarios diseñado específicamente para el sector agroempresarial, facilitando el control de stocks, materiales y equipos agrícolas.",
    image: "/src/assets/portafolio/sinabe.webp",
    category: "Software Development",
    year: "2023",
    client: "Agroempresariales",
    tags: ["React", "Node.js", "Express", "MySQL", "Docker"],
    metrics: {
      efficiency: "+95%",
      users: "200+",
      satisfaction: "98.5%",
      uptime: "4.9/5",
    },
    features: [
      "Control de inventarios en tiempo real",
      "Gestión de proveedores integrada",
      "Reportes automáticos avanzados",
      "Sistema de alertas inteligente",
    ],
    link: "#",
    liveDemo: "#",
    caseStudy: "#",
  },
  {
    id: "mycad",
    title: "MyCAD",
    subtitle: "Administración Integral de Flota Vehicular",
    description:
      "Plataforma completa de administración de flota vehicular que optimiza el control de vehículos con un sistema complejo de histórico y gestión automatizada.",
    image: "/src/assets/portafolio/mycad.webp",
    category: "Web Application",
    year: "2024",
    client: "MyCAD Solutions",
    tags: ["React", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    metrics: {
      vehicles: "500+",
      efficiency: "+120%",
      cost_reduction: "-40%",
      rating: "4.8/5",
    },
    features: [
      "Seguimiento GPS en tiempo real",
      "Mantenimiento predictivo",
      "Análisis de combustible avanzado",
      "Reportes personalizables",
    ],
    link: "#",
    liveDemo: "#",
    caseStudy: "#",
  },
];

export const allProjects = [
  {
    id: "fintech-revolution",
    title: "FinTech Revolution",
    subtitle: "Plataforma de Inversiones P2P",
    description:
      "Aplicación móvil de inversiones que utiliza inteligencia artificial para optimizar las decisiones de inversión en tiempo real.",
    image: "/src/assets/portafolio/sinabe.webp", // Placeholder
    category: "Mobile App",
    year: "2024",
    tags: ["React Native", "AI", "Blockchain", "Node.js"],
    status: "Finalizado",
    link: "#",
  },
  {
    id: "ecosmart-logistics",
    title: "EcoSmart Logistics",
    subtitle: "Sistema de Logística Sustentable",
    description:
      "Plataforma web optimizada para cadenas de suministro sustentables con análisis de huella de carbono integrado.",
    image: "/src/assets/portafolio/mycad.webp", // Placeholder
    category: "Web Platform",
    year: "2024",
    tags: ["Vue.js", "Python", "Analytics", "Sustainability"],
    status: "Finalizado",
    link: "#",
  },
  {
    id: "medconnect-pro",
    title: "MedConnect Pro",
    subtitle: "Telemedicina Avanzada",
    description:
      "App de telemedicina que conecta pacientes con especialistas usando AR para diagnósticos remotos avanzados.",
    image: "/src/assets/portafolio/ntropia.webp", // Placeholder
    category: "Healthcare App",
    year: "2024",
    tags: ["React", "AR", "WebRTC", "Health Tech"],
    status: "Finalizado",
    link: "#",
  },
  {
    id: "gym-competitions",
    title: "Sistema de Competencias Gym",
    subtitle: "Gestión de Competencias Deportivas",
    description:
      "Plataforma integral para la gestión de competencias deportivas en gimnasios, incluyendo registro, seguimiento y rankings.",
    image: "/src/assets/portafolio/sinabe.webp", // Placeholder
    category: "Sports Platform",
    year: "2025",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    status: "En Desarrollo",
    link: "#",
  },
  {
    id: "carnitasl-pitillal",
    title: "Carnitas El Pitillal",
    subtitle: "Rebranding y Página Web",
    description:
      "Proyecto de rebranding completo y desarrollo de sitio web para el reconocido restaurante Carnitas El Pitillal.",
    image: "/src/assets/portafolio/mycad.webp", // Placeholder
    category: "Branding & Web",
    year: "2025",
    tags: ["Branding", "React", "Design", "Marketing"],
    status: "En Desarrollo",
    link: "#",
  },
  {
    id: "fg-carpinteria",
    title: "FG Carpintería",
    subtitle: "Página Web Corporativa",
    description:
      "Sitio web corporativo para empresa de carpintería especializada, con catálogo de productos y sistema de cotizaciones.",
    image: "/src/assets/portafolio/ntropia.webp", // Placeholder
    category: "Corporate Website",
    year: "2025",
    tags: ["React", "Portfolio", "E-commerce", "Design"],
    status: "Planificado",
    link: "#",
  },
  {
    id: "smarthome-hub",
    title: "SmartHome Hub",
    subtitle: "Centro Inteligente del Hogar",
    description:
      "Plataforma IoT que centraliza el control inteligente del hogar permitiendo automatización avanzada de múltiples dispositivos.",
    image: "/src/assets/portafolio/sinabe.webp", // Placeholder
    category: "IoT Platform",
    year: "2023",
    tags: ["IoT", "React", "Python", "Arduino"],
    status: "Finalizado",
    link: "#",
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
