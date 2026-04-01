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
    title: "Estrategia y Planificación",
    description:
      "Diseñamos la estructura de tu sitio, los flujos de navegación y los bocetos iniciales que sirven como base sólida.",
    icon: Lightbulb,
    color: "from-cyan-500 to-blue-600",
    details: [
      "Estructura del sitio",
      "Flujos de navegación",
      "Bocetos iniciales",
      "Prototipo de baja fidelidad",
    ],
  },
  {
    number: "03",
    title: "Diseño Visual",
    description:
      "Creamos el diseño completo de tu sitio o app, cuidando cada detalle. Se ve profesional en celular y computadora desde el día uno.",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    details: [
      "Sistema de diseño",
      "Diseño completo en alta fidelidad",
      "Prototipo interactivo",
      "Revisiones con tu retroalimentación",
    ],
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Convertimos el diseño en un producto funcional con código limpio y tecnología moderna. Todo conectado y funcionando.",
    icon: Code2,
    color: "from-emerald-500 to-teal-600",
    details: [
      "Desarrollo del sitio o app",
      "Conexiones con servicios",
      "Base de datos",
      "Integraciones",
    ],
  },
  {
    number: "05",
    title: "Pruebas de Calidad",
    description:
      "Probamos todo en diferentes dispositivos y navegadores. Nada sale al público sin pasar nuestros estándares de calidad.",
    icon: TestTube,
    color: "from-amber-500 to-orange-600",
    details: [
      "Pruebas funcionales",
      "Pruebas de velocidad",
      "Pruebas en distintos navegadores",
      "Pruebas en celular y tablet",
    ],
  },
  {
    number: "06",
    title: "Lanzamiento",
    description:
      "Publicamos tu producto, configuramos tu dominio y activamos el monitoreo. Listo para que el mundo lo vea.",
    icon: Rocket,
    color: "from-indigo-500 to-violet-600",
    details: [
      "Publicación en línea",
      "Configuración de dominio",
      "Monitoreo y estadísticas",
      "Documentación",
    ],
  },
  {
    number: "07",
    title: "Mejora Continua",
    description:
      "No desaparecemos después del lanzamiento. Te damos soporte, mejoras y actualizaciones basadas en datos reales.",
    icon: RefreshCw,
    color: "from-teal-500 to-cyan-600",
    details: [
      "Soporte técnico",
      "Análisis de resultados",
      "Mejoras continuas",
      "Actualizaciones de seguridad",
    ],
  },
];
