import {
  Globe,
  ShoppingCart,
  Smartphone,
  Building2,
  RefreshCw,
  HelpCircle,
  Paintbrush,
  Briefcase,
  Sparkles,
  Crown,
  Palette,
  Zap,
  Clock,
  CalendarDays,
  CalendarRange,
  Infinity,
} from "lucide-react";

export const WIZARD_STEPS = [
  { key: "tipoProyecto", label: "Proyecto", title: "¿Qué tienes en mente?" },
  { key: "idea", label: "Idea", title: "Cuéntanos más sobre tu idea" },
  {
    key: "funcionalidades",
    label: "Funciones",
    title: "¿Qué necesita tu proyecto?",
  },
  {
    key: "estiloVisual",
    label: "Estilo",
    title: "¿Cómo te gustaría que se vea?",
  },
  {
    key: "tiempoPresupuesto",
    label: "Tiempo",
    title: "Tiempo y presupuesto",
  },
  { key: "contacto", label: "Contacto", title: "Tus datos de contacto" },
  { key: "resumen", label: "Resumen", title: "Resumen de tu propuesta" },
];

export const PROJECT_TYPE_OPTIONS = [
  {
    value: "pagina_web",
    label: "Página o sitio web",
    description: "Para que la gente te encuentre en internet",
    icon: Globe,
  },
  {
    value: "tienda_online",
    label: "Tienda en línea",
    description: "Vender productos o servicios por internet",
    icon: ShoppingCart,
  },
  {
    value: "app_movil",
    label: "App para celular",
    description: "Una aplicación para iPhone o Android",
    icon: Smartphone,
  },
  {
    value: "sistema_interno",
    label: "Sistema para mi negocio",
    description: "Organizar pedidos, inventario, empleados...",
    icon: Building2,
  },
  {
    value: "rediseno",
    label: "Mejorar algo que ya tengo",
    description: "Rediseñar o actualizar un sitio o sistema existente",
    icon: RefreshCw,
  },
  {
    value: "no_se",
    label: "Aún no estoy seguro",
    description: "No te preocupes, te ayudamos a definirlo",
    icon: HelpCircle,
  },
];

export const PROJECT_TYPE_VALUES = new Set(
  PROJECT_TYPE_OPTIONS.map((o) => o.value),
);

export const FUNCIONALIDADES_GROUPS = [
  {
    category: "Básico",
    items: [
      "Información de contacto",
      "Formulario de contacto",
      "Galería de fotos",
      "Mapa de ubicación",
    ],
  },
  {
    category: "Ventas",
    items: [
      "Carrito de compras",
      "Pagos en línea",
      "Catálogo de productos",
      "Cupones y descuentos",
    ],
  },
  {
    category: "Usuarios",
    items: [
      "Registro e inicio de sesión",
      "Perfiles de usuario",
      "Panel de administración",
    ],
  },
  {
    category: "Comunicación",
    items: [
      "Chat en vivo",
      "Notificaciones por email",
      "Integración con WhatsApp",
    ],
  },
  {
    category: "Avanzado",
    items: [
      "Reportes y estadísticas",
      "Calendario o agenda",
      "Subir archivos o documentos",
      "Múltiples idiomas",
    ],
  },
];

export const ALL_FUNCIONALIDADES = new Set(
  FUNCIONALIDADES_GROUPS.flatMap((g) => g.items),
);

export const ESTILO_VISUAL_OPTIONS = [
  {
    value: "moderno",
    label: "Moderno y minimalista",
    description: "Limpio, con mucho espacio",
    icon: Paintbrush,
  },
  {
    value: "corporativo",
    label: "Profesional y corporativo",
    description: "Serio, confiable, formal",
    icon: Briefcase,
  },
  {
    value: "creativo",
    label: "Creativo y llamativo",
    description: "Colores vibrantes, divertido",
    icon: Sparkles,
  },
  {
    value: "elegante",
    label: "Elegante y premium",
    description: "Sofisticado, exclusivo",
    icon: Crown,
  },
  {
    value: "no_se",
    label: "Sin preferencia",
    description: "Déjalo en nuestras manos",
    icon: Palette,
  },
];

export const ESTILO_VISUAL_VALUES = new Set(
  ESTILO_VISUAL_OPTIONS.map((o) => o.value),
);

export const MARCA_OPTIONS = [
  { value: "si", label: "Sí, ya tengo logo y colores" },
  { value: "no", label: "No, necesito que me ayuden" },
  { value: "mejorar", label: "Tengo algo pero quiero mejorarlo" },
];

export const TIMELINE_OPTIONS = [
  {
    value: "urgente",
    label: "Lo antes posible",
    description: "1-2 semanas",
    icon: Zap,
  },
  {
    value: "pronto",
    label: "En el próximo mes",
    description: "2-4 semanas",
    icon: Clock,
  },
  {
    value: "normal",
    label: "En 2-3 meses",
    description: "Sin mucha prisa",
    icon: CalendarDays,
  },
  {
    value: "flexible",
    label: "No tengo prisa",
    description: "Cuando esté listo",
    icon: Infinity,
  },
];

export const TIMELINE_VALUES = new Set(TIMELINE_OPTIONS.map((o) => o.value));

export const BUDGET_OPTIONS = [
  { value: "5k-15k", minMXN: 5000, maxMXN: 15000 },
  { value: "15k-30k", minMXN: 15000, maxMXN: 30000 },
  { value: "30k-50k", minMXN: 30000, maxMXN: 50000 },
  { value: "50k-100k", minMXN: 50000, maxMXN: 100000 },
  { value: "100k+", minMXN: 100000, maxMXN: null },
  { value: "discuss", minMXN: null, maxMXN: null },
];

export const BUDGET_VALUES = new Set(BUDGET_OPTIONS.map((o) => o.value));

export const CONTACTO_PREFERIDO_OPTIONS = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
  { value: "llamada", label: "Llamada telefónica" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateStep = (stepIndex, data) => {
  const errors = [];

  switch (stepIndex) {
    case 0:
      if (!data.tipoProyecto) {
        errors.push("Selecciona un tipo de proyecto.");
      }
      break;

    case 1:
      if (!data.problema || data.problema.trim().length < 10) {
        errors.push(
          "Cuéntanos sobre el problema o necesidad (mínimo 10 caracteres).",
        );
      }
      if (data.problema && data.problema.length > 500) {
        errors.push("El problema no debe superar 500 caracteres.");
      }
      if (!data.usuarios || data.usuarios.trim().length < 10) {
        errors.push(
          "Cuéntanos quiénes usarán tu proyecto (mínimo 10 caracteres).",
        );
      }
      if (data.usuarios && data.usuarios.length > 300) {
        errors.push("Los usuarios no deben superar 300 caracteres.");
      }
      break;

    case 2:
      if (
        data.funcionalidades.length === 0 &&
        (!data.funcionalidadesExtra || data.funcionalidadesExtra.trim() === "")
      ) {
        errors.push(
          "Selecciona al menos una funcionalidad o describe lo que necesitas.",
        );
      }
      if (data.funcionalidadesExtra && data.funcionalidadesExtra.length > 500) {
        errors.push(
          "Las funcionalidades extra no deben superar 500 caracteres.",
        );
      }
      break;

    case 3:
      if (!data.estiloVisual) {
        errors.push("Selecciona un estilo visual.");
      }
      if (data.referenciasVisuales && data.referenciasVisuales.length > 500) {
        errors.push("Las referencias no deben superar 500 caracteres.");
      }
      break;

    case 4:
      if (!data.timeline) {
        errors.push("Selecciona cuándo necesitas tu proyecto.");
      }
      if (data.comentariosExtra && data.comentariosExtra.length > 500) {
        errors.push("Los comentarios no deben superar 500 caracteres.");
      }
      break;

    case 5:
      if (!data.nombre || data.nombre.trim() === "") {
        errors.push("El nombre es obligatorio.");
      }
      if (data.nombre && data.nombre.length > 100) {
        errors.push("El nombre no debe superar 100 caracteres.");
      }
      if (!data.email || data.email.trim() === "") {
        errors.push("El email es obligatorio.");
      } else if (!EMAIL_PATTERN.test(data.email.trim())) {
        errors.push("El formato del email no es válido.");
      }
      if (data.email && data.email.length > 255) {
        errors.push("El email no debe superar 255 caracteres.");
      }
      if (data.telefono && data.telefono.length > 20) {
        errors.push("El teléfono no debe superar 20 caracteres.");
      }
      break;

    default:
      break;
  }

  return errors;
};

export const getProjectTypeLabel = (value) =>
  PROJECT_TYPE_OPTIONS.find((o) => o.value === value)?.label || value;

export const getEstiloVisualLabel = (value) =>
  ESTILO_VISUAL_OPTIONS.find((o) => o.value === value)?.label || value;

export const getTimelineLabel = (value) =>
  TIMELINE_OPTIONS.find((o) => o.value === value)?.label || value;

export const getBudgetLabel = (value) => {
  const option = BUDGET_OPTIONS.find((o) => o.value === value);
  if (!option) return value;
  if (option.value === "discuss") return "Prefiero platicarlo";
  if (!option.maxMXN) return `Más de $${option.minMXN.toLocaleString("es-MX")} MXN`;
  return `$${option.minMXN.toLocaleString("es-MX")} - $${option.maxMXN.toLocaleString("es-MX")} MXN`;
};

export const formatBudgetWithCurrency = (value, convert, currencyInfo) => {
  const option = BUDGET_OPTIONS.find((o) => o.value === value);
  if (!option) return value;
  if (option.value === "discuss") return "Prefiero platicarlo";
  if (!convert) return getBudgetLabel(value);
  const min = option.minMXN ? convert(option.minMXN) : null;
  const max = option.maxMXN ? convert(option.maxMXN) : null;
  const sym = currencyInfo?.symbol || "$";
  const code = currencyInfo?.code || "MXN";
  if (!max) return `Más de ${sym}${min.formatted} ${code}`;
  return `${sym}${min.formatted} - ${sym}${max.formatted} ${code}`;
};

export const getMarcaLabel = (value) =>
  MARCA_OPTIONS.find((o) => o.value === value)?.label || value;

export const getContactoPreferidoLabel = (value) =>
  CONTACTO_PREFERIDO_OPTIONS.find((o) => o.value === value)?.label || value;

export const INITIAL_WIZARD_DATA = {
  tipoProyecto: "",
  problema: "",
  usuarios: "",
  funcionalidades: [],
  funcionalidadesExtra: "",
  estiloVisual: "",
  referenciasVisuales: "",
  tieneMarca: "",
  timeline: "",
  presupuesto: "",
  comentariosExtra: "",
  nombre: "",
  email: "",
  telefono: "",
  contactoPreferido: "",
};
