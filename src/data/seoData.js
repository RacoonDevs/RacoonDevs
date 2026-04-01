export const seoConfig = {
  home: {
    title: "Desarrollo Web y Apps en Puerto Vallarta | Racoon Devs",
    description:
      "Desarrollo web, software a la medida y apps móviles en Puerto Vallarta, Jalisco. Creamos páginas web, apps, eCommerce y sistemas personalizados para empresas.",
    canonical: "https://racoondevs.com/",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://racoondevs.com/",
        },
      ],
    },
  },
  portfolio: {
    title: "Portafolio Web en Puerto Vallarta | Proyectos | Racoon Devs",
    description:
      "Proyectos reales que hemos creado: páginas web, tiendas en línea, apps y sistemas para negocios en Puerto Vallarta. Resultados que hablan solos.",
    canonical: "https://racoondevs.com/portafolio",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Portafolio de Proyectos — Racoon Devs",
      description:
        "Proyectos de desarrollo web, apps y software a la medida en Puerto Vallarta.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "Inmobo",
            description:
              "Plataforma de reservaciones y marketplace para publicar y reservar propiedades, vehículos y servicios.",
            url: "https://inmobo.site.racoondevs.com",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "FlotaPro",
            description:
              "Sistema de control de flota vehicular con gestión de personal y reportes.",
            url: "https://dev.mycad.mx",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "Catalogy",
            description:
              "Plataforma para crear catálogos en línea con pedidos por WhatsApp.",
            url: "https://catalogy.racoondevs.com",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "AgendaPro",
            description:
              "App de agendas colaborativas para equipos con calendario compartido.",
            url: "https://agendapro.racoondevs.com",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "CreativeWork",
            name: "Sinabe",
            description:
              "Sistema de inventarios para el sector agroempresarial con control de más de 4,000 artículos.",
            url: "https://sinabe.racoondevs.com",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "CreativeWork",
            name: "MyCAD",
            description:
              "Plataforma de administración de flota vehicular con mantenimiento predictivo.",
            url: "https://mycad.racoondevs.com",
            creator: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
          },
        },
      ],
    },
  },
  services: {
    title: "Servicios de Desarrollo Web Puerto Vallarta | Racoon Devs",
    description:
      "Creamos páginas web, tiendas en línea, apps y sistemas a la medida en Puerto Vallarta. Diseño profesional, desarrollo rápido y soporte a tu negocio.",
    canonical: "https://racoondevs.com/servicios",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Servicios de Desarrollo Web — Racoon Devs",
      description:
        "Servicios de desarrollo web, apps y software a la medida en Puerto Vallarta.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Software a la Medida",
            description:
              "Plataformas web, sistemas internos y herramientas digitales diseñadas para tu operación.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Diseño UI/UX",
            description:
              "Interfaces intuitivas y atractivas que convierten visitantes en clientes.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Landing Pages",
            description:
              "Páginas de aterrizaje optimizadas para aparecer en Google y convertir visitantes en clientes.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Tiendas en Línea (eCommerce)",
            description:
              "Tiendas en línea con carrito de compras, pagos seguros y panel de administración.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Dashboards y Paneles de Control",
            description:
              "Paneles para ver reportes, controlar tu negocio y tomar mejores decisiones.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Automatización Digital",
            description:
              "Conectamos tus herramientas y automatizamos tareas repetitivas para que ahorres tiempo.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Service",
            name: "Apps Móviles",
            description:
              "Aplicaciones para celular que llevan tu negocio al bolsillo de tus clientes.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Service",
            name: "Aplicaciones Web (PWA)",
            description:
              "Aplicaciones web que funcionan como apps nativas, incluso sin internet.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "Service",
            name: "Optimización y SEO",
            description:
              "Mejoramos la velocidad y el posicionamiento en Google de tu sitio web existente.",
            provider: {
              "@type": "ProfessionalService",
              name: "Racoon Devs",
              url: "https://racoondevs.com",
            },
            areaServed: {
              "@type": "City",
              name: "Puerto Vallarta",
            },
          },
        },
      ],
    },
  },
  process: {
    title: "Cómo Creamos tu Página Web o App | Proceso | Racoon Devs",
    description:
      "Conoce paso a paso cómo creamos tu página web, app o sistema en Puerto Vallarta. Desde entender tu idea hasta el lanzamiento. Claro y sin sorpresas.",
    canonical: "https://racoondevs.com/proceso",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cómo creamos tu página web o app — Racoon Devs",
      description:
        "Proceso de desarrollo web paso a paso: desde entender tu idea hasta el lanzamiento y soporte continuo.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Descubrimiento",
          text: "Entendemos tu negocio, tus usuarios y tus objetivos. Analizamos el mercado y definimos el alcance del proyecto.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Estrategia y Planificación",
          text: "Diseñamos la estructura de tu sitio, los flujos de navegación y los bocetos iniciales.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Diseño Visual",
          text: "Creamos el diseño completo de tu sitio o app, cuidando cada detalle para que se vea profesional en cualquier dispositivo.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Desarrollo",
          text: "Convertimos el diseño en un producto funcional con código limpio y tecnología moderna.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Pruebas de Calidad",
          text: "Probamos todo en diferentes dispositivos y navegadores para asegurar que funcione perfecto.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Lanzamiento",
          text: "Publicamos tu producto, configuramos el dominio y activamos el monitoreo para que esté listo para el mundo.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Mejora Continua",
          text: "No desaparecemos después del lanzamiento. Te damos soporte, mejoras y actualizaciones basadas en datos reales.",
        },
      ],
    },
  },
  contact: {
    title: "Contacto | Desarrollo Web en Puerto Vallarta | Racoon Devs",
    description:
      "Escríbenos para platicar sobre tu página web, app o sistema. Estamos en Puerto Vallarta y respondemos en menos de 24 horas. WhatsApp, email o teléfono.",
    canonical: "https://racoondevs.com/contacto",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Racoon Devs",
      url: "https://racoondevs.com",
      telephone: "+52-322-135-8808",
      email: "admin@racoondevs.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Relámpago #101, Vida Vallarta",
        addressLocality: "Puerto Vallarta",
        addressRegion: "Jalisco",
        postalCode: "48318",
        addressCountry: "MX",
      },
      areaServed: {
        "@type": "City",
        name: "Puerto Vallarta",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-322-135-8808",
        contactType: "customer service",
        availableLanguage: ["Spanish", "English"],
      },
    },
  },
  privacy: {
    title: "Política de Privacidad | Racoon Devs",
    description:
      "Política de privacidad de Racoon Devs. Conoce cómo protegemos y manejamos tu información personal.",
    canonical: "https://racoondevs.com/privacidad",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
  },
  terms: {
    title: "Términos y Condiciones | Racoon Devs",
    description:
      "Términos y condiciones de uso de los servicios de Racoon Devs.",
    canonical: "https://racoondevs.com/terminos",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
  },
  wizard: {
    title: "Diseña tu Proyecto Web en Puerto Vallarta | Racoon Devs",
    description:
      "Responde unas preguntas sencillas y te ayudamos a definir lo que necesitas para tu página web, app o sistema. Sin compromisos, sin términos complicados.",
    canonical: "https://racoondevs.com/cuentanos-tu-idea",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Cuéntanos tu Idea — Racoon Devs",
      description:
        "Asistente paso a paso para definir tu proyecto de desarrollo web, app o software a la medida en Puerto Vallarta.",
      url: "https://racoondevs.com/cuentanos-tu-idea",
      provider: {
        "@type": "ProfessionalService",
        name: "Racoon Devs",
        url: "https://racoondevs.com",
        areaServed: {
          "@type": "City",
          name: "Puerto Vallarta",
        },
      },
      potentialAction: {
        "@type": "Action",
        name: "Enviar propuesta de proyecto",
        target: "https://racoondevs.com/cuentanos-tu-idea",
      },
    },
  },
  pricing: {
    title: "Precios de Desarrollo Web en Puerto Vallarta | Racoon Devs",
    description:
      "Planes y precios de desarrollo web, apps y software a la medida en Puerto Vallarta. Desde $8,000 MXN. Elige el plan ideal para tu negocio. Sin sorpresas.",
    canonical: "https://racoondevs.com/precios",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Planes de Desarrollo Web — Racoon Devs",
        description:
          "Planes de desarrollo web, apps y software a la medida en Puerto Vallarta.",
        provider: {
          "@type": "ProfessionalService",
          name: "Racoon Devs",
          url: "https://racoondevs.com",
        },
        itemListElement: [
          {
            "@type": "Offer",
            name: "Plan Esencial",
            description:
              "Página de venta o sitio de 1-3 páginas que se ve perfecto en celular y computadora, preparado para aparecer en Google.",
            price: "8000",
            priceCurrency: "MXN",
            url: "https://racoondevs.com/precios",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Plan Profesional",
            description:
              "Sitio web o aplicación con diseño personalizado para tu marca, panel de administración y posicionamiento en Google.",
            price: "25000",
            priceCurrency: "MXN",
            url: "https://racoondevs.com/precios",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Plan Enterprise",
            description:
              "Software a la medida preparado para crecer con tu negocio, con app para celular y soporte dedicado.",
            url: "https://racoondevs.com/precios",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Solo hacen páginas web?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Además de sitios web, creamos aplicaciones web, apps para celular, sistemas internos, paneles de control, tiendas en línea, páginas de venta y software hecho a la medida.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tiempo toma un proyecto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del alcance. Una página de venta puede estar lista en 1-2 semanas. Un sitio web corporativo en 3-4 semanas. Aplicaciones y sistemas más completos pueden tomar de 6 a 12 semanas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es el costo de un proyecto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cada proyecto es diferente. Tenemos planes desde $8,000 MXN para páginas de venta hasta proyectos empresariales personalizados. Contáctanos para una cotización sin compromiso.",
            },
          },
          {
            "@type": "Question",
            name: "¿Ofrecen soporte después del lanzamiento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. No desaparecemos después de entregar tu proyecto. Te damos soporte continuo, actualizaciones de seguridad, mejoras basadas en resultados reales y acompañamiento para que tu producto digital siga creciendo.",
            },
          },
        ],
      },
    ],
  },
  testimonials: {
    title: "Opiniones de Clientes en Puerto Vallarta | Racoon Devs",
    description:
      "Conoce las opiniones reales de nuestros clientes en Puerto Vallarta. Historias de éxito en páginas web, apps y software que transformaron sus negocios.",
    canonical: "https://racoondevs.com/testimoniales",
    ogImage: "https://racoondevs.com/hero_raconodevs_v2.webp",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "ProfessionalService",
          name: "Racoon Devs",
          url: "https://racoondevs.com",
        },
        author: { "@type": "Person", name: "Julio Francisco Bahena" },
        reviewBody:
          "El sistema nos facilitó por completo el control del inventario y nos abrió la puerta a mucho más. Lo mejor de trabajar con Racoon Devs es que entienden nuestras ideas y las convierten en herramientas reales que sí mejoran la operación.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "ProfessionalService",
          name: "Racoon Devs",
          url: "https://racoondevs.com",
        },
        author: {
          "@type": "Organization",
          name: "Maquina y Canteras del Centro SA de CV",
        },
        reviewBody:
          "Lo que parecía muy complicado terminó convirtiéndose en una herramienta clave para nuestro día a día. Con MyCAD y AgendaPRO logramos digitalizar procesos importantes y hoy trabajamos con mucho más orden, control y eficiencia.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "ProfessionalService",
          name: "Racoon Devs",
          url: "https://racoondevs.com",
        },
        author: { "@type": "Organization", name: "Carnitas El Pitillal" },
        reviewBody:
          "Tener presencia en línea nos ayudó a que más personas encontraran nuestro negocio y conocieran nuestros productos de una forma más fácil.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "ProfessionalService",
          name: "Racoon Devs",
          url: "https://racoondevs.com",
        },
        author: { "@type": "Person", name: "Julia Gallegos" },
        reviewBody:
          "Pasar del papel a un sistema en línea nos cambió por completo la forma de trabajar. Hoy todo es más rápido, más claro y más fácil de organizar.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  },
};
