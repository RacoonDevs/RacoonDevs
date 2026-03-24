import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  TestTube,
  Rocket,
  RefreshCw,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus usuarios y tus objetivos. Analizamos el mercado y definimos el alcance del proyecto.",
    icon: Search,
    color: "from-violet-500 to-purple-600",
    details: [
      "Reunión de kick-off",
      "Análisis de competencia",
      "Definición de requerimientos",
      "User personas",
    ],
  },
  {
    number: "02",
    title: "Estrategia & UX",
    description:
      "Diseñamos la arquitectura de información, flujos de usuario y wireframes que sirven como base sólida.",
    icon: Lightbulb,
    color: "from-cyan-500 to-blue-600",
    details: [
      "Arquitectura de información",
      "User flows",
      "Wireframes",
      "Prototipo de baja fidelidad",
    ],
  },
  {
    number: "03",
    title: "Diseño UI",
    description:
      "Creamos interfaces visuales premium y pulidas. Cada pixel cuenta. Diseño responsivo desde el día uno.",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    details: [
      "Design system",
      "Mockups en alta fidelidad",
      "Prototipo interactivo",
      "Revisiones iterativas",
    ],
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Código limpio, escalable y de alta calidad. Frontend moderno y backend robusto trabajando en armonía.",
    icon: Code2,
    color: "from-emerald-500 to-teal-600",
    details: [
      "Frontend con React",
      "Backend & APIs",
      "Base de datos",
      "Integraciones",
    ],
  },
  {
    number: "05",
    title: "Testing & QA",
    description:
      "Pruebas exhaustivas en todos los dispositivos y navegadores. Nada sale a producción sin pasar nuestros estándares.",
    icon: TestTube,
    color: "from-amber-500 to-orange-600",
    details: [
      "Testing funcional",
      "Pruebas de rendimiento",
      "Cross-browser testing",
      "Pruebas responsivas",
    ],
  },
  {
    number: "06",
    title: "Lanzamiento",
    description:
      "Deploy optimizado, monitoreo inicial y entrega de documentación. Tu producto listo para el mundo.",
    icon: Rocket,
    color: "from-indigo-500 to-violet-600",
    details: [
      "Deploy a producción",
      "Configuración de dominio",
      "Monitoreo & analytics",
      "Documentación",
    ],
  },
  {
    number: "07",
    title: "Mejora Continua",
    description:
      "No desaparecemos después del lanzamiento. Soporte, iteraciones y mejoras basadas en datos reales.",
    icon: RefreshCw,
    color: "from-teal-500 to-cyan-600",
    details: [
      "Soporte técnico",
      "Análisis de métricas",
      "Iteraciones de mejora",
      "Actualizaciones de seguridad",
    ],
  },
];
