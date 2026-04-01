import { Rocket, Star, Shield } from "lucide-react";

export const pricingPlans = [
  {
    id: "esencial",
    name: "Esencial",
    basePriceMXN: 8000,
    prefix: "Desde",
    description:
      "Ideal para emprendedores y negocios que necesitan una presencia digital sólida.",
    icon: Rocket,
    features: [
      "Página de venta o sitio de 1-3 páginas",
      "Se ve perfecto en celular y computadora",
      "Preparado para aparecer en Google",
      "Formulario de contacto",
      "Dominio y hosting (1er año)",
      "Entrega en 1-2 semanas",
    ],
    cta: "Comenzar",
    popular: false,
  },
  {
    id: "profesional",
    name: "Profesional",
    basePriceMXN: 25000,
    prefix: "Desde",
    description:
      "Para negocios en crecimiento que necesitan más funciones y un diseño a su medida.",
    icon: Star,
    features: [
      "Sitio web con varias secciones o aplicación web",
      "Diseño personalizado para tu marca",
      "Panel para que administres tu contenido",
      "Posicionamiento en Google y estadísticas",
      "Conexión con WhatsApp, pagos y más",
      "Soporte por 3 meses",
      "Entrega en 3-6 semanas",
    ],
    cta: "Elegir Plan",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    basePriceMXN: null,
    prefix: "",
    description:
      "Para empresas que necesitan sistemas completos, hechos a la medida y listos para crecer.",
    icon: Shield,
    features: [
      "Sistema completo hecho a tu medida",
      "Preparado para crecer con tu negocio",
      "Panel de control y reportes avanzados",
      "Conexión con todos tus sistemas y herramientas",
      "App para celular incluida",
      "Soporte dedicado continuo",
      "Garantía de funcionamiento y mantenimiento",
    ],
    cta: "Contactar",
    popular: false,
  },
];
