// src/components/sections/ShowcaseSection.jsx
import { motion } from "framer-motion";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

/* ═══ Mini UI compositions for each product category ═══ */

const ReservationUI = () => (
  <div className="w-full h-full p-3 flex flex-col">
    <motion.div
      className="flex items-center justify-between mb-2"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <div className="h-1.5 w-14 bg-primary/15 rounded-full" />
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded bg-primary/[0.08]" />
        <div className="w-4 h-4 rounded bg-primary/[0.08]" />
      </div>
    </motion.div>
    <div className="grid grid-cols-7 gap-0.5 mb-2">
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="h-2 rounded-sm bg-primary/[0.06] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 + i * 0.03 }}
        >
          <span className="text-[4px] text-txt-4">
            {["L", "M", "M", "J", "V", "S", "D"][i]}
          </span>
        </motion.div>
      ))}
      {[...Array(28)].map((_, i) => {
        const isHighlighted = i === 8 || i === 15 || i === 22;
        const isSecondary = i === 9 || i === 16;
        return (
          <motion.div
            key={i}
            className={`h-3 rounded-sm ${
              isHighlighted
                ? "bg-gradient-to-br from-primary/20 to-secondary/15 border border-primary/25"
                : isSecondary
                  ? "bg-secondary/[0.08]"
                  : "bg-primary/[0.03]"
            }`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.02, duration: 0.3, ease: ease.out }}
            {...(isHighlighted ? {
              animate: { opacity: [0, 1, 1], scale: [0.7, 1, 1], boxShadow: ["0 0 0 rgba(124,58,237,0)", "0 0 0 rgba(124,58,237,0)", "0 0 6px rgba(124,58,237,0.15)"] },
              transition: { delay: 0.25 + i * 0.02, duration: 1.2, ease: ease.out }
            } : {})}
          />
        );
      })}
    </div>
    <div className="flex-1 space-y-1">
      {[
        { time: "10:00", name: "Mesa para 4", color: "bg-emerald-400" },
        { time: "14:30", name: "Evento privado", color: "bg-amber-400" },
        { time: "19:00", name: "Reserva VIP", color: "bg-primary" },
      ].map((slot, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-1.5 p-1 rounded bg-primary/[0.03]"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + i * 0.12, duration: 0.4, ease: ease.out }}
        >
          <span className="text-[6px] text-txt-3 w-6">{slot.time}</span>
          <div className="flex-1">
            <span className="text-[7px] text-txt-2 block">{slot.name}</span>
          </div>
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${slot.color}`}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ delay: 1.5 + i * 0.5, duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const AdminUI = () => (
  <div className="w-full h-full flex">
    <motion.div
      className="w-8 border-r border-primary/[0.08] flex flex-col gap-2 py-3 px-1.5"
      initial={{ x: -32 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-full aspect-square rounded-md ${i === 0 ? "bg-gradient-to-br from-primary/20 to-secondary/15" : "bg-primary/[0.05]"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 + i * 0.06 }}
        />
      ))}
    </motion.div>
    <div className="flex-1 p-2.5 flex flex-col gap-2">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="h-1.5 w-16 bg-primary/15 rounded-full" />
        <div className="flex gap-1">
          <div className="w-10 h-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/[0.1]" />
          <div className="w-4 h-3 rounded-full bg-primary/[0.05]" />
        </div>
      </motion.div>
      <div className="flex gap-1.5">
        {[
          { val: "1,247", lab: "Total", color: "from-primary/15 to-primary/5" },
          {
            val: "89%",
            lab: "Activos",
            color: "from-secondary/15 to-secondary/5",
          },
          { val: "23", lab: "Nuevos", color: "from-accent/15 to-accent/5" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={`flex-1 p-1.5 rounded-md bg-gradient-to-br ${s.color} border border-primary/[0.08]`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.4, ease: ease.out }}
          >
            <p className="text-[8px] font-semibold text-txt">{s.val}</p>
            <p className="text-[5px] text-txt-3">{s.lab}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 rounded-md border border-primary/[0.08] overflow-hidden">
        <div className="flex gap-2 px-1.5 py-1 border-b border-primary/[0.06]">
          {["Nombre", "Rol", "Estado", "Acciones"].map((h) => (
            <span key={h} className="flex-1 text-[5px] text-txt-4 font-medium">
              {h}
            </span>
          ))}
        </div>
        {[1, 2, 3, 4].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-2 px-1.5 py-0.5 border-b border-primary/[0.03]"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.08, duration: 0.35, ease: ease.out }}
          >
            <div className="flex-1 flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary/15 to-secondary/10" />
              <div className="h-1 w-8 bg-primary/[0.08] rounded-full" />
            </div>
            <div className="flex-1 h-1 w-6 bg-primary/[0.06] rounded-full self-center" />
            <div className="flex-1 flex items-center">
              <motion.div
                className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-amber-400"}`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: 1.5 + i * 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
              />
            </div>
            <div className="flex-1 h-1 w-3 bg-primary/[0.05] rounded-full self-center" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ECommerceUI = () => (
  <div className="w-full h-full p-2.5 flex flex-col gap-2">
    <motion.div
      className="flex items-center justify-between"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <div className="h-1.5 w-12 bg-primary/15 rounded-full" />
      <div className="flex gap-2">
        {["Inicio", "Catálogo", "Carrito"].map((t) => (
          <span key={t} className="text-[5px] text-txt-3">
            {t}
          </span>
        ))}
      </div>
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
    </motion.div>
    <motion.div
      className="h-10 rounded-lg bg-gradient-to-r from-primary/[0.06] to-secondary/[0.04] border border-primary/[0.08] flex items-center px-2"
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: ease.out }}
      style={{ transformOrigin: "left" }}
    >
      <div>
        <motion.div
          className="h-1 bg-primary/15 rounded-full mb-1"
          initial={{ width: 0 }}
          animate={{ width: 56 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <div className="h-0.5 w-10 bg-primary/[0.08] rounded-full" />
      </div>
    </motion.div>
    <div className="grid grid-cols-3 gap-1.5 flex-1">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <motion.div
          key={i}
          className="rounded-md border border-primary/[0.08] bg-primary/[0.02] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.4, ease: ease.out }}
          whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="flex-1 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.03] min-h-[16px]"
            animate={i === 0 ? { opacity: [1, 0.6, 1] } : {}}
            transition={i === 0 ? { delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 3 } : {}}
          />
          <div className="p-1">
            <div className="h-0.5 w-full bg-primary/[0.1] rounded-full mb-0.5" />
            <motion.div
              className="h-1 bg-accent/15 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const LandingUI = () => (
  <div className="w-full h-full flex flex-col">
    <motion.div
      className="flex items-center justify-between px-3 py-2 border-b border-primary/[0.06]"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: ease.out }}
    >
      <div className="h-1.5 w-10 bg-primary/15 rounded-full" />
      <div className="flex gap-3">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="h-1 bg-primary/[0.08] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
          />
        ))}
      </div>
      <div className="w-8 h-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/15" />
    </motion.div>
    <div className="flex-1 flex flex-col items-center justify-center px-4 text-center gap-2">
      <motion.div
        className="h-2 bg-primary/15 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 112 }}
        transition={{ delay: 0.3, duration: 0.6, ease: ease.out }}
      />
      <motion.div
        className="h-1.5 bg-primary/[0.08] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.5, duration: 0.5, ease: ease.out }}
      />
      <motion.div
        className="h-1 bg-primary/[0.05] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.7, duration: 0.4, ease: ease.out }}
      />
      <div className="flex gap-1.5 mt-2">
        <motion.div
          className="w-12 h-3.5 rounded-full bg-gradient-to-r from-primary/25 to-secondary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4, ease: ease.out }}
          whileHover={{ scale: 1.08 }}
        />
        <motion.div
          className="w-12 h-3.5 rounded-full border border-primary/15"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4, ease: ease.out }}
        />
      </div>
    </div>
    <div className="flex justify-around py-2 border-t border-primary/[0.06]">
      {[
        { n: "+200%", l: "Conversión" },
        { n: "< 1.2s", l: "Carga" },
        { n: "98/100", l: "Lighthouse" },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 + i * 0.12, duration: 0.4, ease: ease.out }}
        >
          <p className="text-[7px] font-semibold text-txt">{s.n}</p>
          <p className="text-[5px] text-txt-3">{s.l}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const PortalUI = () => (
  <div className="w-full h-full flex">
    <motion.div
      className="w-10 border-r border-primary/[0.08] flex flex-col py-2 px-1.5 gap-1.5"
      initial={{ x: -40 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <motion.div
        className="w-5 h-5 mx-auto rounded-md bg-gradient-to-br from-primary/15 to-secondary/10 mb-2"
        animate={{ rotate: [0, 0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 1] }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`flex items-center gap-1 px-0.5 py-0.5 rounded ${i === 1 ? "bg-primary/[0.08]" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.06 }}
        >
          <div className="w-2.5 h-2.5 rounded bg-primary/[0.06]" />
        </motion.div>
      ))}
    </motion.div>
    <div className="flex-1 p-2.5 flex flex-col gap-2">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <div>
          <div className="h-1.5 w-16 bg-primary/15 rounded-full mb-1" />
          <div className="h-1 w-10 bg-primary/[0.06] rounded-full" />
        </div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { title: "Mis Proyectos", val: "4" },
          { title: "Facturas", val: "12" },
          { title: "Soporte", val: "2 abiertos" },
          { title: "Documentos", val: "8 archivos" },
        ].map((c, i) => (
          <motion.div
            key={i}
            className="p-1.5 rounded-md bg-primary/[0.03] border border-primary/[0.08]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: ease.out }}
          >
            <p className="text-[5px] text-txt-3 mb-0.5">{c.title}</p>
            <p className="text-[8px] font-semibold text-txt">{c.val}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 rounded-md border border-primary/[0.08] p-1.5">
        <p className="text-[5px] text-txt-3 mb-1">Actividad reciente</p>
        {["Factura #012 emitida", "Proyecto actualizado", "Nuevo mensaje"].map(
          (a, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-1 py-0.5"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.35, ease: ease.out }}
            >
              <motion.div
                className={`w-1 h-1 rounded-full ${i === 0 ? "bg-emerald-400" : i === 1 ? "bg-secondary" : "bg-amber-400"}`}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ delay: 2 + i * 0.4, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
              />
              <span className="text-[5px] text-txt-2">{a}</span>
            </motion.div>
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
    accent: "violet",
  },
  {
    title: "Sistema de Administración",
    description:
      "Paneles internos con gestión de usuarios, permisos granulares, reportes avanzados y automatización de procesos.",
    tags: ["CRM", "Roles", "Reportes"],
    ui: AdminUI,
    span: "lg:col-span-1 lg:row-span-1",
    accent: "cyan",
  },
  {
    title: "Tienda en Línea",
    description:
      "eCommerce optimizado para conversión con catálogos dinámicos, pasarelas de pago y experiencia de compra fluida.",
    tags: ["Pagos", "Catálogo", "Checkout"],
    ui: ECommerceUI,
    span: "lg:col-span-1 lg:row-span-1",
    accent: "amber",
  },
  {
    title: "Landing Page de Alto Impacto",
    description:
      "Páginas diseñadas para convertir con copy estratégico, performance optimizada y métricas claras.",
    tags: ["SEO", "Conversión", "Performance"],
    ui: LandingUI,
    span: "lg:col-span-1 lg:row-span-1",
    accent: "pink",
  },
  {
    title: "Portal de Clientes",
    description:
      "Espacios personalizados donde tus clientes gestionan proyectos, facturas, documentos y comunicación.",
    tags: ["Dashboard", "Documentos", "Chat"],
    ui: PortalUI,
    span: "lg:col-span-1 lg:row-span-1",
    accent: "emerald",
  },
];

const accentMap = {
  violet: {
    border: "hover:border-violet-500/25",
    shadow: "hover:shadow-violet-500/10",
    tag: "border-violet-500/15 text-violet-600 dark:text-violet-400",
  },
  cyan: {
    border: "hover:border-cyan-500/25",
    shadow: "hover:shadow-cyan-500/10",
    tag: "border-cyan-500/15 text-cyan-600 dark:text-cyan-400",
  },
  amber: {
    border: "hover:border-amber-500/25",
    shadow: "hover:shadow-amber-500/10",
    tag: "border-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  pink: {
    border: "hover:border-pink-500/25",
    shadow: "hover:shadow-pink-500/10",
    tag: "border-pink-500/15 text-pink-600 dark:text-pink-400",
  },
  emerald: {
    border: "hover:border-emerald-500/25",
    shadow: "hover:shadow-emerald-500/10",
    tag: "border-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
};

const ShowcaseSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/[0.08] border border-secondary/[0.15] mb-4"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-secondary font-medium">
                Lo que construimos
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt max-w-3xl leading-tight">
              Productos digitales{" "}
              <span className="gradient-text">
                diseñados para cada negocio.
              </span>
            </h2>
          </motion.div>

          {/* Showcase Grid */}
          <motion.div
            {...staggerContainer(0.12)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
          >
            {showcaseItems.map((item) => {
              const colors = accentMap[item.accent];
              return (
                <motion.div
                  key={item.title}
                  variants={staggerChild}
                  className={`group relative rounded-xl bg-surface-alt/50 border border-primary/[0.08] ${colors.border} transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl ${colors.shadow} ${item.span}`}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.3, ease: ease.smooth },
                  }}
                >
                  <div className="relative z-10 flex flex-col">
                    {/* UI Preview */}
                    <div className="h-40 sm:h-44 rounded-t-xl overflow-hidden border-b border-primary/[0.06] relative">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-primary/[0.03] border-b border-primary/[0.06]">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                        <div className="ml-2 h-1.5 w-20 bg-primary/[0.06] rounded-full" />
                      </div>
                      <div className="h-[calc(100%-24px)]">
                        <item.ui />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-surface-alt/90 to-transparent pointer-events-none" />
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
                            className={`px-2 py-0.5 text-[11px] rounded-md border bg-white/50 dark:bg-white/5 ${colors.tag} transition-all duration-300`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
