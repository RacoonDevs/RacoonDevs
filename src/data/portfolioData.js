// src/data/portfolioData.js

import sinabeImage from "../assets/portfolio/sinabe.webp";
import mycadImage from "../assets/portfolio/mycad.webp";
import ntropiaImage from "../assets/portfolio/ntropia.webp";
import carnitasJoselesImage from "../assets/portfolio/carnitas-joseles.webp";
import fgCarpinteriaImage from "../assets/portfolio/fg-carpinteria.webp";
import familiaCrossfitImage from "../assets/portfolio/famcrossfit.webp";
import carnitasElPitillalImage from "../assets/portfolio/logo-carnitas.webp";
import inmoboImage from "../assets/portfolio/inmobo.webp";
import flotaproImage from "../assets/portfolio/flotapro.webp";
import catalogyImage from "../assets/portfolio/catalogy.webp";
import agendaproImage from "../assets/portfolio/agendapro.webp";

export const portfolioStats = [
  { number: "15+", label: "Proyectos Entregados" },
  { number: "98%", label: "Clientes Satisfechos" },
  { number: "8+", label: "Industrias Atendidas" },
  { number: "3+", label: "Años de Experiencia" },
];

export const featuredProjects = [
  {
    id: "inmobo",
    title: "Inmobo",
    subtitle: "Plataforma de Reservaciones & Marketplace Multi-Recurso",
    description:
      "Marketplace multi-recurso para publicar y reservar propiedades, vehículos, servicios, venues y experiencias. Panel administrativo completo, booking online con Stripe, gestión de leads, chat en vivo, vouchers y soporte multi-idioma.",
    challenge:
      "Negocios de renta vacacional, bienes raíces, vehículos y servicios necesitaban una plataforma unificada para publicar, reservar y gestionar múltiples tipos de recursos con personalización por cliente.",
    solution:
      "Marketplace con booking directo vía Stripe e indirecto por contacto, wizard de publicación unificado, landing pública personalizable, panel admin con gestión de anuncios/personal/permisos y soporte ES/EN.",
    result:
      "Plataforma escalable con flujos de reserva directa e indirecta, arquitectura lista para múltiples modelos de negocio y personalización total de servicios.",
    image: inmoboImage,
    category: "Plataforma SaaS",
    year: "2026",
    tags: [
      "React",
      "Appwrite",
      "Stripe",
      "PWA",
      "i18n",
      "Vite",
      "Tailwind CSS",
    ],
    link: "https://inmobo-crm.site.racoondevs.com",
    demoLink: "https://inmobo.site.racoondevs.com",
    caseStudy: "/portafolio/inmobo",
  },
  {
    id: "flotapro",
    title: "FlotaPro",
    subtitle: "Sistema de Control de Flota & Gestión de Personal",
    description:
      "Plataforma integral para control de flota vehicular con gestión de personal, choferes, documentación, reportes de servicio y reparaciones con sistema RBAC de permisos.",
    challenge:
      "Empresas con flotas vehiculares necesitaban centralizar el control de vehículos, choferes, documentación y reportes con permisos granulares por rol.",
    solution:
      "Sistema con gestión integral de flota, personal, documentación vehicular, reportes de servicio/reparación y sistema RBAC completo con permisos por usuarios y roles.",
    result:
      "Control total de flota con visibilidad en tiempo real, reducción de costos operativos y gestión de personal centralizada.",
    image: flotaproImage,
    category: "Aplicación Web",
    year: "2025",
    tags: ["React", "TypeScript", "Vite", "PWA", "Tailwind CSS"],
    link: "https://dev.mycad.mx",
    caseStudy: "/portafolio/flotapro",
  },
  {
    id: "catalogy",
    title: "Catalogy",
    subtitle: "Catálogos en Línea Multi-Tenant",
    description:
      "Plataforma gratuita multi-tenant para catálogos en línea con subdominios personalizados, plantillas predefinidas, gestión de stock y pedidos directos por WhatsApp.",
    challenge:
      "Pequeños negocios necesitaban una forma accesible de tener un catálogo en línea profesional sin la complejidad de un e-commerce completo.",
    solution:
      "Sistema multi-tenant con catálogos por subdominio, plantillas predefinidas, carrito ficticio, gestión de stock y comunicación directa por WhatsApp para pedidos.",
    result:
      "Sistema escalable por tenant con branding personalizable, experiencia e-commerce simplificada y comunicación directa con clientes.",
    image: catalogyImage,
    category: "Plataforma SaaS",
    year: "2026",
    tags: ["React", "Appwrite", "Vite", "PWA", "Tailwind CSS"],
    link: "https://catalogy.racoondevs.com",
    caseStudy: "/portafolio/catalogy",
  },
  {
    id: "agendapro",
    title: "AgendaPro",
    subtitle: "Agenda Colaborativa & Productividad",
    description:
      "PWA mobile-first para agendas grupales compartidas con invitaciones por email, gestión de roles y permisos sobre calendarios y experiencia optimizada para uso diario.",
    challenge:
      "Equipos y grupos necesitaban una herramienta moderna para compartir calendarios, coordinar eventos y gestionar agendas grupales con control de permisos.",
    solution:
      "App SaaS/PWA con agendas grupales, invitaciones por email, roles y permisos sobre calendarios, diseño responsivo e instalable desde cualquier dispositivo.",
    result:
      "App con experiencia rápida, instalable, flujos claros de calendario y productividad adaptable a uso diario desde móvil o escritorio.",
    image: agendaproImage,
    category: "Aplicación Web",
    year: "2025",
    tags: ["React", "Vite", "PWA", "Tailwind CSS"],
    link: "https://agendapro.racoondevs.com",
    caseStudy: "/portafolio/agendapro",
  },
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
  "Plataforma SaaS",
  "Software a la Medida",
  "Aplicación Web",
  "Landing Page",
  "Sitio Web",
  "Plataforma Deportiva",
  "Branding & Web",
];
