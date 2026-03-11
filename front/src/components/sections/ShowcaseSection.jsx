// src/components/sections/ShowcaseSection.jsx
import { motion } from "framer-motion";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

/* ═══ Mini UI compositions for each product category ═══ */

const ReservationUI = () => (
  <div className="w-full h-full p-3 flex flex-col">
    {/* Calendar header */}
    <div className="flex items-center justify-between mb-2">
      <div className="h-1.5 w-14 bg-ink/10 rounded-full" />
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded bg-ink/[0.06]" />
        <div className="w-4 h-4 rounded bg-ink/[0.06]" />
      </div>
    </div>
    {/* Calendar grid */}
    <div className="grid grid-cols-7 gap-0.5 mb-2">
      {[...Array(7)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="h-2 rounded-sm bg-ink/[0.04] flex items-center justify-center"
        >
          <span className="text-[4px] text-txt-4">
            {["L", "M", "M", "J", "V", "S", "D"][i]}
          </span>
        </div>
      ))}
      {[...Array(28)].map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-sm ${
            i === 8 || i === 15 || i === 22
              ? "bg-ink/15 border border-ink/20"
              : i === 9 || i === 16
                ? "bg-ink/[0.06]"
                : "bg-ink/[0.02]"
          }`}
        />
      ))}
    </div>
    {/* Booking slots */}
    <div className="flex-1 space-y-1">
      {[
        { time: "10:00", name: "Mesa para 4", st: "Confirmada" },
        { time: "14:30", name: "Evento privado", st: "Pendiente" },
        { time: "19:00", name: "Reserva VIP", st: "Confirmada" },
      ].map((slot, i) => (
        <div
          key={i}
          className="flex items-center gap-1.5 p-1 rounded bg-ink/[0.02]"
        >
          <span className="text-[6px] text-txt-3 w-6">{slot.time}</span>
          <div className="flex-1">
            <span className="text-[7px] text-txt-2 block">{slot.name}</span>
          </div>
          <div
            className={`w-1 h-1 rounded-full ${i === 1 ? "bg-ink/30" : "bg-ink/50"}`}
          />
        </div>
      ))}
    </div>
  </div>
);

const AdminUI = () => (
  <div className="w-full h-full flex">
    {/* Sidebar */}
    <div className="w-8 border-r border-ink/[0.05] flex flex-col gap-2 py-3 px-1.5">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`w-full aspect-square rounded-md ${i === 0 ? "bg-ink/12" : "bg-ink/[0.04]"}`}
        />
      ))}
    </div>
    {/* Main */}
    <div className="flex-1 p-2.5 flex flex-col gap-2">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="h-1.5 w-16 bg-ink/10 rounded-full" />
        <div className="flex gap-1">
          <div className="w-10 h-3 rounded-full bg-ink/[0.06] border border-ink/[0.08]" />
          <div className="w-4 h-3 rounded-full bg-ink/[0.04]" />
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-1.5">
        {[
          { val: "1,247", lab: "Total", color: "bg-ink/10" },
          { val: "89%", lab: "Activos", color: "bg-ink/[0.07]" },
          { val: "23", lab: "Nuevos", color: "bg-ink/[0.05]" },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex-1 p-1.5 rounded-md ${s.color} border border-ink/[0.05]`}
          >
            <p className="text-[8px] font-semibold text-txt">{s.val}</p>
            <p className="text-[5px] text-txt-3">{s.lab}</p>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="flex-1 rounded-md border border-ink/[0.05] overflow-hidden">
        <div className="flex gap-2 px-1.5 py-1 border-b border-ink/[0.04]">
          {["Nombre", "Rol", "Estado", "Acciones"].map((h) => (
            <span
              key={h}
              className="flex-1 text-[5px] text-txt-4 font-medium"
            >
              {h}
            </span>
          ))}
        </div>
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex gap-2 px-1.5 py-0.5 border-b border-ink/[0.02]"
          >
            <div className="flex-1 flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-ink/[0.08]" />
              <div className="h-1 w-8 bg-ink/[0.06] rounded-full" />
            </div>
            <div className="flex-1 h-1 w-6 bg-ink/[0.04] rounded-full self-center" />
            <div className="flex-1 flex items-center">
              <div
                className={`w-1 h-1 rounded-full ${i < 3 ? "bg-ink/50" : "bg-ink/20"}`}
              />
            </div>
            <div className="flex-1 h-1 w-3 bg-ink/[0.04] rounded-full self-center" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ECommerceUI = () => (
  <div className="w-full h-full p-2.5 flex flex-col gap-2">
    {/* Nav */}
    <div className="flex items-center justify-between">
      <div className="h-1.5 w-12 bg-ink/10 rounded-full" />
      <div className="flex gap-2">
        {["Inicio", "Catálogo", "Carrito"].map((t) => (
          <span key={t} className="text-[5px] text-txt-3">
            {t}
          </span>
        ))}
      </div>
      <div className="w-4 h-4 rounded-full bg-ink/[0.06]" />
    </div>
    {/* Hero banner */}
    <div className="h-10 rounded-lg bg-gradient-to-r from-ink/[0.04] to-ink/[0.02] border border-ink/[0.05] flex items-center px-2">
      <div>
        <div className="h-1 w-14 bg-ink/12 rounded-full mb-1" />
        <div className="h-0.5 w-10 bg-ink/[0.06] rounded-full" />
      </div>
    </div>
    {/* Product grid */}
    <div className="grid grid-cols-3 gap-1.5 flex-1">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div
          key={i}
          className="rounded-md border border-ink/[0.05] bg-ink/[0.02] flex flex-col overflow-hidden"
        >
          <div className="flex-1 bg-ink/[0.03] min-h-[16px]" />
          <div className="p-1">
            <div className="h-0.5 w-full bg-ink/[0.08] rounded-full mb-0.5" />
            <div className="h-1 w-6 bg-ink/10 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LandingUI = () => (
  <div className="w-full h-full flex flex-col">
    {/* Nav */}
    <div className="flex items-center justify-between px-3 py-2 border-b border-ink/[0.04]">
      <div className="h-1.5 w-10 bg-ink/10 rounded-full" />
      <div className="flex gap-3">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="h-1 w-6 bg-ink/[0.06] rounded-full" />
        ))}
      </div>
      <div className="w-8 h-3 rounded-full bg-ink/12" />
    </div>
    {/* Hero */}
    <div className="flex-1 flex flex-col items-center justify-center px-4 text-center gap-2">
      <div className="h-2 w-28 bg-ink/12 rounded-full" />
      <div className="h-1.5 w-20 bg-ink/[0.06] rounded-full" />
      <div className="h-1 w-24 bg-ink/[0.04] rounded-full" />
      <div className="flex gap-1.5 mt-2">
        <div className="w-12 h-3.5 rounded-full bg-ink/15" />
        <div className="w-12 h-3.5 rounded-full border border-ink/10" />
      </div>
    </div>
    {/* Stats strip */}
    <div className="flex justify-around py-2 border-t border-ink/[0.04]">
      {[
        { n: "+200%", l: "Conversión" },
        { n: "< 1.2s", l: "Carga" },
        { n: "98/100", l: "Lighthouse" },
      ].map((s, i) => (
        <div key={i} className="text-center">
          <p className="text-[7px] font-semibold text-txt">{s.n}</p>
          <p className="text-[5px] text-txt-3">{s.l}</p>
        </div>
      ))}
    </div>
  </div>
);

const PortalUI = () => (
  <div className="w-full h-full flex">
    {/* Sidebar */}
    <div className="w-10 border-r border-ink/[0.05] flex flex-col py-2 px-1.5 gap-1.5">
      <div className="w-5 h-5 mx-auto rounded-md bg-ink/[0.08] mb-2" />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`flex items-center gap-1 px-0.5 py-0.5 rounded ${i === 1 ? "bg-ink/[0.06]" : ""}`}
        >
          <div className="w-2.5 h-2.5 rounded bg-ink/[0.04]" />
        </div>
      ))}
    </div>
    {/* Main */}
    <div className="flex-1 p-2.5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-1.5 w-16 bg-ink/10 rounded-full mb-1" />
          <div className="h-1 w-10 bg-ink/[0.05] rounded-full" />
        </div>
        <div className="w-4 h-4 rounded-full bg-ink/[0.06]" />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { title: "Mis Proyectos", val: "4" },
          { title: "Facturas", val: "12" },
          { title: "Soporte", val: "2 abiertos" },
          { title: "Documentos", val: "8 archivos" },
        ].map((c, i) => (
          <div
            key={i}
            className="p-1.5 rounded-md bg-ink/[0.02] border border-ink/[0.05]"
          >
            <p className="text-[5px] text-txt-3 mb-0.5">{c.title}</p>
            <p className="text-[8px] font-semibold text-txt">{c.val}</p>
          </div>
        ))}
      </div>
      {/* Activity */}
      <div className="flex-1 rounded-md border border-ink/[0.05] p-1.5">
        <p className="text-[5px] text-txt-3 mb-1">Actividad reciente</p>
        {["Factura #012 emitida", "Proyecto actualizado", "Nuevo mensaje"].map(
          (a, i) => (
            <div key={i} className="flex items-center gap-1 py-0.5">
              <div
                className={`w-1 h-1 rounded-full ${i === 0 ? "bg-green-400/60" : i === 1 ? "bg-blue-400/60" : "bg-yellow-400/60"}`}
              />
              <span className="text-[5px] text-txt-2">{a}</span>
            </div>
          ),
        )}
      </div>
    </div>
  </div>
);

/* ═══ Showcase items ═══ */
const showcaseItems = [
  {
    title: "Plataforma de Reservaciones",
    description:
      "Sistemas de reserva en tiempo real con calendario inteligente, confirmaciones automáticas y gestión de capacidad.",
    tags: ["Calendario", "Notificaciones", "Gestión"],
    ui: ReservationUI,
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[200px]",
  },
  {
    title: "Sistema de Administración",
    description:
      "Paneles internos con gestión de usuarios, permisos granulares, reportes avanzados y automatización de procesos.",
    tags: ["CRM", "Roles", "Reportes"],
    ui: AdminUI,
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[200px]",
  },
  {
    title: "Tienda en Línea",
    description:
      "eCommerce optimizado para conversión con catálogos dinámicos, pasarelas de pago y experiencia de compra fluida.",
    tags: ["Pagos", "Catálogo", "Checkout"],
    ui: ECommerceUI,
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[200px]",
  },
  {
    title: "Landing Page de Alto Impacto",
    description:
      "Páginas diseñadas para convertir con copy estratégico, performance optimizada y métricas claras.",
    tags: ["SEO", "Conversión", "Performance"],
    ui: LandingUI,
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[200px]",
  },
  {
    title: "Portal de Clientes",
    description:
      "Espacios personalizados donde tus clientes gestionan proyectos, facturas, documentos y comunicación.",
    tags: ["Dashboard", "Documentos", "Chat"],
    ui: PortalUI,
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[200px]",
  },
];

const ShowcaseSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-t border-ink/5">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.p
              className="text-sm tracking-widest uppercase text-txt-3 mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Lo que construimos
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Productos digitales{" "}
              <span className="text-txt-2">
                diseñados para cada negocio.
              </span>
            </h2>
          </motion.div>

          {/* Showcase Grid */}
          <motion.div
            {...staggerContainer(0.12)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
          >
            {showcaseItems.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerChild}
                className={`group relative rounded-xl bg-ink/[0.015] border border-ink/[0.06] hover:border-ink/15 hover:bg-ink/[0.03] transition-all duration-500 overflow-hidden ${item.span}`}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col">
                  {/* UI Preview */}
                  <div className="h-40 sm:h-44 rounded-t-xl overflow-hidden border-b border-ink/[0.04] relative">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1 px-2.5 py-1.5 bg-ink/[0.02] border-b border-ink/[0.04]">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/10" />
                      <div className="ml-2 h-1.5 w-20 bg-ink/[0.04] rounded-full" />
                    </div>
                    <div className="h-[calc(100%-24px)]">
                      <item.ui />
                    </div>
                    {/* Fade overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-surface-alt/80 to-transparent pointer-events-none" />
                  </div>

                  {/* Text content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-semibold text-txt mb-1 group-hover:text-txt transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-txt-2 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] rounded-md border border-ink/[0.08] bg-ink/[0.02] text-txt-3 group-hover:text-txt-2 group-hover:border-ink/12 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
