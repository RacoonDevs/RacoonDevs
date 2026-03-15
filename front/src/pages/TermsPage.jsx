import LegalPageLayout from "../components/legal/LegalPageLayout";

const summary = [
  {
    label: "Relacion Comercial",
    value:
      "Nuestros servicios se formalizan mediante propuesta, orden de trabajo, contrato, alcance aprobado o combinacion de estos documentos.",
  },
  {
    label: "Propiedad Intelectual",
    value:
      "La titularidad final depende de lo pactado con cada cliente, incluyendo pagos cubiertos, licencias de terceros y componentes preexistentes.",
  },
  {
    label: "Jurisdiccion",
    value:
      "Salvo pacto distinto, la relacion se interpreta conforme a las leyes aplicables en Mexico y la jurisdiccion competente en Jalisco.",
  },
];

const sections = [
  {
    title: "1. Aceptacion y objeto",
    paragraphs: [
      "Estos Terminos y Condiciones regulan el uso de nuestro sitio web y la contratacion de servicios ofrecidos por Racoon Devs, incluyendo consultoria de software, desarrollo web y movil, integraciones, diseño UX/UI, mantenimiento, automatizacion, productos digitales, comercio electronico y servicios de marketing digital.",
      "Al navegar por el sitio, solicitar una propuesta, contratar servicios o interactuar comercialmente con nosotros, la persona usuaria o cliente acepta estos terminos en lo que resulte aplicable, sin perjuicio de condiciones particulares que puedan firmarse para un proyecto especifico.",
    ],
  },
  {
    title: "2. Naturaleza de los servicios",
    bullets: [
      "Nuestros servicios son profesionales y se prestan con base en informacion proporcionada por el cliente, criterios tecnicos, alcance definido y disponibilidad operativa.",
      "Toda propuesta, cotizacion o cronograma tiene caracter estimado mientras no exista aceptacion formal.",
      "El alcance final, entregables, rondas de cambios, tiempos, responsables, costos y condiciones de soporte deben entenderse conforme a la propuesta o contrato vigente.",
      "En marketing digital, posicionamiento, pauta, conversiones y resultados comerciales no pueden garantizarse de forma absoluta porque dependen de variables externas, competencia, presupuesto, plataformas y respuesta del mercado.",
    ],
  },
  {
    title: "3. Obligaciones del cliente",
    bullets: [
      "Proporcionar informacion completa, veraz y oportuna sobre el proyecto, el negocio y sus objetivos.",
      "Entregar accesos, materiales, contenidos, aprobaciones y retroalimentacion dentro de los tiempos acordados.",
      "Contar con derechos suficientes sobre marcas, textos, imagenes, bases de datos, dominios, cuentas y cualquier material entregado a Racoon Devs.",
      "Revisar entregables y comunicar observaciones dentro de las ventanas de validacion acordadas.",
      "Pagar honorarios, licencias, suscripciones, presupuestos de medios y gastos de terceros en los plazos establecidos.",
    ],
  },
  {
    title: "4. Cambios de alcance y trabajo adicional",
    paragraphs: [
      "Cualquier funcionalidad, integracion, revision creativa, contenido, capacitacion, campaña, soporte o ajuste que exceda el alcance originalmente aprobado podra cotizarse por separado y modificar calendario, costo o disponibilidad del equipo.",
      "No estamos obligados a ejecutar trabajo adicional sin aprobacion expresa de ambas partes sobre su impacto operativo y economico.",
    ],
  },
  {
    title: "5. Honorarios, facturacion y pagos",
    bullets: [
      "Los precios se expresan en la moneda indicada en la propuesta y no incluyen impuestos salvo que se indique lo contrario.",
      "Podemos requerir anticipo, pagos por hito, mensualidades recurrentes o pago total anticipado, segun la naturaleza del servicio.",
      "Retrasos de pago pueden suspender entregas, accesos, soporte, campañas, despliegues o renovaciones hasta regularizacion.",
      "Los costos de herramientas, infraestructura, dominios, cuentas publicitarias, servicios de terceros o licencias especiales normalmente no estan incluidos salvo pacto expreso.",
    ],
  },
  {
    title: "6. Propiedad intelectual y licencias",
    paragraphs: [
      "Salvo que el contrato indique algo distinto, Racoon Devs conserva la titularidad sobre metodologias, know-how, librerias propias, plantillas, componentes reutilizables, herramientas internas, documentos base y cualquier desarrollo preexistente o generico usado para prestar el servicio.",
      "Una vez cubiertos los pagos aplicables, el cliente recibira los derechos o licencias especificamente pactados sobre los entregables personalizados. Las licencias de terceros, software open source, tipografias, APIs, plugins, frameworks y plataformas externas se rigen por sus propios terminos.",
      "Podremos mencionar el proyecto dentro de nuestro portafolio comercial salvo que exista acuerdo de confidencialidad o restriccion escrita que lo impida.",
    ],
  },
  {
    title: "7. Confidencialidad y datos del cliente",
    paragraphs: [
      "Tratamos como confidencial la informacion no publica que el cliente identifique razonablemente como tal o que por su naturaleza deba entenderse reservada.",
      "La informacion compartida por el cliente sera utilizada solo para fines relacionados con la evaluacion, implementacion, soporte y mejora del servicio, conforme tambien a nuestra Politica de Privacidad.",
    ],
  },
  {
    title: "8. Entregas, aceptacion y soporte",
    bullets: [
      "Los tiempos de entrega dependen de la complejidad del proyecto, capacidad del equipo, respuesta del cliente y disponibilidad de terceros.",
      "Un entregable podra considerarse aceptado cuando el cliente lo apruebe expresamente o cuando transcurra el periodo de revision pactado sin observaciones sustanciales.",
      "El soporte posterior a la entrega, mantenimiento, evolutivos, cambios o incidencias solo se incluyen cuando se hayan contratado expresamente.",
    ],
  },
  {
    title: "9. Sitio web, contenido y uso permitido",
    bullets: [
      "La persona usuaria se compromete a no usar el sitio para actividades ilegales, fraudulentas, difamatorias, infractoras o que afecten la seguridad o disponibilidad del servicio.",
      "No esta permitido copiar, extraer, descompilar, reproducir o reutilizar contenido del sitio con fines comerciales sin autorizacion previa por escrito.",
      "Podemos modificar, suspender o actualizar contenidos del sitio, formularios, showcases y referencias comerciales sin previo aviso.",
    ],
  },
  {
    title: "10. Limitacion de responsabilidad",
    paragraphs: [
      "En la medida permitida por la ley, Racoon Devs no sera responsable por daños indirectos, lucro cesante, perdida de datos, perdida de oportunidades, caidas de servicios de terceros, decisiones de plataformas externas, ataques informaticos, retrasos imputables al cliente o eventos fuera de nuestro control razonable.",
      "Nuestra responsabilidad total frente a un proyecto o servicio quedara limitada al monto efectivamente pagado por el cliente por el servicio directamente relacionado con la reclamacion, salvo que la ley aplicable disponga algo distinto.",
    ],
  },
  {
    title: "11. Terminacion",
    paragraphs: [
      "Cualquiera de las partes podra terminar la relacion conforme a lo pactado contractualmente. En caso de cancelacion anticipada, el cliente debera cubrir el trabajo efectivamente ejecutado, gastos comprometidos y obligaciones con terceros ya adquiridas.",
      "Podemos suspender o terminar servicios cuando exista incumplimiento material, uso indebido, falta de colaboracion critica, impago, riesgo de seguridad o requerimiento legal.",
    ],
  },
  {
    title: "12. Legislacion aplicable y contacto",
    paragraphs: [
      "Salvo acuerdo distinto por escrito, estos terminos se regiran por las leyes aplicables en Mexico. Para cualquier controversia, las partes se someten a la jurisdiccion competente de Puerto Vallarta, Jalisco, renunciando a cualquier otro fuero que pudiera corresponderles por razon de domicilio presente o futuro.",
      "Si necesitas una aclaracion legal o comercial sobre nuestros servicios, puedes escribir a admin@racoondevs.com.",
    ],
  },
];

const TermsPage = () => {
  return (
    <LegalPageLayout
      badge="Terminos"
      title="Terminos y"
      highlight="Condiciones"
      description="Estas condiciones explican como operamos nuestras relaciones comerciales, el alcance de nuestros servicios y las reglas generales para proyectos de software, consultoria, productos digitales y marketing."
      lastUpdated="15 de marzo de 2026"
      summary={summary}
      sections={sections}
      contactTitle="Revision contractual y dudas comerciales"
      contactDescription="Estas condiciones funcionan como marco general y pueden complementarse con propuestas, contratos, anexos de alcance, acuerdos de confidencialidad o politicas especificas. Si quieres revisarlas para un proyecto concreto, escribenos y lo aterrizamos contigo."
    />
  );
};

export default TermsPage;
