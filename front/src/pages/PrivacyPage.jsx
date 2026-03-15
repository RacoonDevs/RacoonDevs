import LegalPageLayout from "../components/legal/LegalPageLayout";

const summary = [
  {
    label: "Responsable",
    value:
      "Racoon Devs trata los datos personales que comparte la persona cliente, prospecto, proveedor o visitante del sitio.",
  },
  {
    label: "Servicios Cubiertos",
    value:
      "Consultoria de software, desarrollo web y movil, integraciones, soporte tecnico, productos digitales y marketing digital.",
  },
  {
    label: "Derechos",
    value:
      "Puede solicitar acceso, rectificacion, actualizacion, oposicion o eliminacion de su informacion cuando proceda.",
  },
];

const sections = [
  {
    title: "1. Alcance de esta politica",
    paragraphs: [
      "Esta Politica de Privacidad describe como Racoon Devs recopila, usa, conserva y protege los datos personales obtenidos a traves de su sitio web, formularios, reuniones comerciales, propuestas, contratos, campañas de marketing y herramientas de soporte.",
      "Aplica a nuestros servicios de consultoria tecnologica, desarrollo de software a la medida, mantenimiento evolutivo, implementacion de plataformas digitales, automatizacion, experiencia de usuario, comercio electronico, analitica y servicios de marketing digital.",
    ],
  },
  {
    title: "2. Datos que podemos recopilar",
    bullets: [
      "Datos de identificacion y contacto, como nombre, empresa, cargo, correo electronico, telefono, ciudad y pais.",
      "Informacion comercial y de proyecto, como necesidades tecnicas, objetivos del negocio, alcances, presupuestos, cronogramas, accesos y comentarios compartidos durante el proceso de discovery, venta o ejecucion.",
      "Datos de facturacion y cumplimiento, incluyendo razon social, domicilio fiscal, RFC u otra informacion necesaria para contratacion y cobro.",
      "Datos tecnicos y de uso del sitio, como direccion IP, navegador, dispositivo, paginas visitadas, origen del trafico, cookies y eventos de interaccion.",
      "Materiales que la persona cliente o prospecto nos entregue, por ejemplo documentos, bases de datos, creatividades, contenido, credenciales temporales o retroalimentacion.",
    ],
  },
  {
    title: "3. Finalidades del tratamiento",
    bullets: [
      "Atender solicitudes de contacto, cotizacion, demo o soporte.",
      "Evaluar requerimientos y preparar propuestas comerciales, tecnicas o economicas.",
      "Prestar servicios contratados, administrar proyectos, coordinar reuniones y habilitar canales de comunicacion.",
      "Facturar, llevar controles administrativos, cumplir obligaciones legales y defender nuestros derechos contractuales.",
      "Mejorar el rendimiento del sitio, medir campañas, entender tendencias de uso y optimizar la experiencia digital.",
      "Enviar comunicaciones relacionadas con nuestros servicios, contenidos, actualizaciones o eventos, siempre con posibilidad razonable de dejar de recibirlas.",
    ],
  },
  {
    title: "4. Base legal y tratamiento permitido",
    paragraphs: [
      "Tratamos la informacion cuando es necesaria para ejecutar una relacion precontractual o contractual, cuando contamos con consentimiento, cuando existe una obligacion legal o cuando tenemos un interes legitimo compatible con la naturaleza de nuestros servicios, por ejemplo seguridad de la informacion, continuidad operativa o mejora del servicio.",
      "Cuando el tratamiento requiera consentimiento expreso, este podra recabarse mediante formularios, casillas de aceptacion, correo electronico, firma de propuesta o cualquier mecanismo equivalente.",
    ],
  },
  {
    title: "5. Comparticion con terceros",
    paragraphs: [
      "No vendemos datos personales. Podemos compartir informacion solo en la medida necesaria con proveedores que nos ayudan a operar nuestro negocio y entregar servicios, tales como hospedaje en la nube, analitica, correo electronico, CRM, procesamiento de pagos, firma electronica, herramientas de colaboracion, mensajeria, publicidad digital y soporte tecnico.",
      "Tambien podremos divulgar informacion cuando sea necesario para cumplir una ley, atender requerimientos de autoridad competente, prevenir fraude, hacer valer contratos, proteger nuestros sistemas o formalizar una operacion corporativa.",
    ],
  },
  {
    title: "6. Transferencias internacionales y seguridad",
    paragraphs: [
      "Algunas plataformas que utilizamos pueden alojar o procesar informacion fuera de Mexico. En esos casos procuramos trabajar con proveedores reconocidos que implementen salvaguardas razonables de seguridad y confidencialidad.",
      "Aplicamos medidas administrativas, tecnicas y organizacionales razonables para proteger la informacion contra perdida, uso indebido, acceso no autorizado, alteracion o destruccion. Aun asi, ningun sistema conectado a internet puede garantizar seguridad absoluta.",
    ],
  },
  {
    title: "7. Conservacion de la informacion",
    paragraphs: [
      "Conservamos los datos personales solo durante el tiempo necesario para cumplir las finalidades descritas, mantener historiales comerciales razonables, atender garantias, resolver controversias, cumplir obligaciones fiscales, contractuales o regulatorias y acreditar actividades realizadas.",
      "Cuando la informacion deja de ser necesaria, procuramos eliminarla, anonimizarla o bloquearla conforme a nuestros procesos internos y a la normativa aplicable.",
    ],
  },
  {
    title: "8. Cookies, analitica y publicidad",
    paragraphs: [
      "Nuestro sitio puede utilizar cookies, etiquetas de seguimiento y tecnologias similares para recordar preferencias, medir trafico, atribuir conversiones, analizar comportamiento y mejorar campañas de marketing digital.",
      "La persona usuaria puede limitar ciertas cookies desde su navegador. Sin embargo, al hacerlo algunas funciones del sitio o de nuestras herramientas de medicion pueden verse afectadas.",
    ],
  },
  {
    title: "9. Derechos de las personas titulares",
    bullets: [
      "Solicitar acceso a los datos personales que conservamos.",
      "Pedir rectificacion o actualizacion de informacion inexacta o incompleta.",
      "Solicitar cancelacion, supresion u oposicion cuando resulte legalmente procedente.",
      "Limitar el uso de comunicaciones comerciales o retirar consentimiento en tratamientos que dependan de el.",
      "Solicitar informacion sobre transferencias o categorias de proveedores involucrados en la operacion del servicio.",
    ],
  },
  {
    title: "10. Menores de edad y datos sensibles",
    paragraphs: [
      "Nuestros servicios estan dirigidos principalmente a empresas, emprendimientos, profesionales y organizaciones. No buscamos recopilar deliberadamente informacion de menores de edad sin autorizacion valida de madre, padre o tutor.",
      "Pedimos no compartir datos sensibles salvo que sean estrictamente necesarios para un servicio especifico y exista una base legal clara para tratarlos.",
    ],
  },
  {
    title: "11. Cambios a esta politica",
    paragraphs: [
      "Podemos actualizar esta Politica de Privacidad cuando cambien nuestros procesos, servicios, proveedores, obligaciones regulatorias o necesidades operativas. La version vigente se publicara en este sitio con su fecha de ultima actualizacion.",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <LegalPageLayout
      badge="Privacidad"
      title="Politica de"
      highlight="Privacidad"
      description="Explicamos que informacion podemos recibir, por que la tratamos y como la protegemos cuando interactuas con Racoon Devs en servicios de software, consultoria, productos digitales y marketing."
      lastUpdated="15 de marzo de 2026"
      summary={summary}
      sections={sections}
      contactTitle="Solicitudes de privacidad y ejercicio de derechos"
      contactDescription="Si deseas ejercer derechos sobre tus datos, actualizar informacion, limitar comunicaciones o plantear una inquietud de privacidad, escribenos a admin@racoondevs.com o usa nuestro formulario de contacto. Para proteger tu informacion podremos pedir datos razonables para verificar identidad y alcance de la solicitud."
    />
  );
};

export default PrivacyPage;
