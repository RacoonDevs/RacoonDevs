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
      "Landing page o sitio de 1-3 páginas",
      "Diseño responsivo premium",
      "Optimización SEO básica",
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
      "Para negocios en crecimiento que necesitan funcionalidad avanzada y diseño premium.",
    icon: Star,
    features: [
      "Sitio web multi-página o web app",
      "Diseño UI/UX personalizado",
      "CMS o panel de administración",
      "SEO avanzado y Analytics",
      "Integraciones (WhatsApp, CRM, pagos)",
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
      "Para empresas que necesitan soluciones complejas, sistemas a la medida y escalabilidad.",
    icon: Shield,
    features: [
      "Software a la medida completo",
      "Arquitectura escalable",
      "Dashboard & reportes avanzados",
      "Múltiples integraciones API",
      "App móvil o PWA",
      "Soporte dedicado continuo",
      "SLA & mantenimiento",
    ],
    cta: "Contactar",
    popular: false,
  },
];
