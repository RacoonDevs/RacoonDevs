import {
  Code2,
  Palette,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Cog,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";

export const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software a la Medida",
    shortDescription: "Plataformas & sistemas",
    description:
      "Plataformas web, sistemas internos, dashboards y herramientas digitales diseñadas específicamente para tu operación.",
    gradient: "from-violet-500 to-purple-600",
    bgTint: "from-violet-500/10 to-purple-500/5",
    features: [
      "Arquitectura escalable",
      "APIs RESTful",
      "Bases de datos optimizadas",
      "Control de acceso (RBAC)",
    ],
    featured: true,
  },
  {
    id: "uiux",
    icon: Palette,
    title: "Diseño UI/UX",
    shortDescription: "Mobile-first design",
    description:
      "Interfaces intuitivas y visualmente impactantes que convierten visitantes en clientes. Diseño centrado en el usuario.",
    gradient: "from-pink-500 to-rose-600",
    bgTint: "from-pink-500/10 to-rose-500/5",
    features: [
      "Research & wireframes",
      "Diseño responsivo",
      "Prototipos interactivos",
      "Design systems",
    ],
    featured: true,
  },
  {
    id: "landing",
    icon: Rocket,
    title: "Landing Pages",
    shortDescription: "Conversión & SEO",
    description:
      "Páginas de aterrizaje de alta conversión, optimizadas para SEO y velocidad. Tu mejor vendedor digital.",
    gradient: "from-cyan-500 to-blue-600",
    bgTint: "from-cyan-500/10 to-blue-500/5",
    features: [
      "Optimización SEO",
      "Alta velocidad de carga",
      "A/B Testing ready",
      "Analytics integrado",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "eCommerce",
    shortDescription: "Tiendas & catálogos",
    description:
      "Tiendas en línea completas con pasarelas de pago, inventario y experiencia de compra premium.",
    gradient: "from-amber-500 to-orange-600",
    bgTint: "from-amber-500/10 to-orange-500/5",
    features: [
      "Pasarelas de pago",
      "Gestión de inventario",
      "Carrito optimizado",
      "Panel de administración",
    ],
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    title: "Dashboards & Sistemas",
    shortDescription: "Paneles & analytics",
    description:
      "Paneles de control inteligentes y sistemas de gestión que simplifican la operación de tu negocio.",
    gradient: "from-emerald-500 to-teal-600",
    bgTint: "from-emerald-500/10 to-teal-500/5",
    features: [
      "Visualización de datos",
      "Reportes automatizados",
      "Gestión de usuarios",
      "Integraciones API",
    ],
  },
  {
    id: "automation",
    icon: Cog,
    title: "Automatización Digital",
    shortDescription: "APIs & procesos",
    description:
      "Integraciones, flujos automatizados y procesos digitales que ahorran tiempo y reducen errores.",
    gradient: "from-indigo-500 to-violet-600",
    bgTint: "from-indigo-500/10 to-violet-500/5",
    features: [
      "Flujos automatizados",
      "Integraciones CRM",
      "Notificaciones inteligentes",
      "Reportes programados",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Apps Móviles",
    shortDescription: "PWA & responsive",
    description:
      "Aplicaciones móviles nativas y multiplataforma que llevan tu negocio al bolsillo de tus clientes.",
    gradient: "from-blue-500 to-indigo-600",
    bgTint: "from-blue-500/10 to-indigo-500/5",
    features: [
      "iOS & Android",
      "React Native",
      "Notificaciones push",
      "Sincronización en tiempo real",
    ],
  },
  {
    id: "webapps",
    icon: Globe,
    title: "Aplicaciones Web",
    shortDescription: "PWA & offline",
    description:
      "Web apps progresivas (PWA) con experiencia nativa, funcionalidad offline y rendimiento excepcional.",
    gradient: "from-teal-500 to-cyan-600",
    bgTint: "from-teal-500/10 to-cyan-500/5",
    features: [
      "Progressive Web Apps",
      "Funcionalidad offline",
      "Instalable en dispositivo",
      "Performance optimizado",
    ],
  },
  {
    id: "performance",
    icon: Zap,
    title: "Optimización & SEO",
    shortDescription: "Velocidad & ranking",
    description:
      "Mejoramos la velocidad, el posicionamiento y la conversión de tu sitio web existente.",
    gradient: "from-yellow-500 to-amber-600",
    bgTint: "from-yellow-500/10 to-amber-500/5",
    features: [
      "Core Web Vitals",
      "SEO técnico",
      "Análisis de conversión",
      "Auditoría de rendimiento",
    ],
  },
];
