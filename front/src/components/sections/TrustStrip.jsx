import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingCart,
  LayoutDashboard,
  Workflow,
  Smartphone,
  Globe,
  Cog,
} from "lucide-react";
import { ease } from "../../utils/motion";

const capabilities = [
  {
    label: "Software a la Medida",
    icon: Code2,
    mini: "Plataformas & sistemas",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    label: "UI/UX Responsivo",
    icon: Palette,
    mini: "Mobile-first design",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    label: "eCommerce",
    icon: ShoppingCart,
    mini: "Tiendas & catálogos",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    label: "Dashboards",
    icon: LayoutDashboard,
    mini: "Paneles & analytics",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    label: "Automatización",
    icon: Workflow,
    mini: "APIs & procesos",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    label: "Apps Mobile-First",
    icon: Smartphone,
    mini: "PWA & responsive",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    label: "Landing Pages",
    icon: Globe,
    mini: "Conversión & SEO",
    color: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
  },
  {
    label: "Sistemas Internos",
    icon: Cog,
    mini: "CRM, ERP & admin",
    color: "from-slate-500 to-zinc-600",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
];

const TrustStrip = () => {
  return (
    <section className="relative py-16 sm:py-20 border-y border-primary/[0.08]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.p
            className="text-center text-txt-3 text-sm tracking-widest uppercase mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            Lo que construimos
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.1 },
              },
            }}
          >
            {capabilities.map((item) => (
              <motion.div
                key={item.label}
                className={`group relative flex flex-col items-center text-center p-4 rounded-xl border ${item.border} ${item.bg} hover:shadow-lg hover:shadow-primary/5 transition-all duration-500`}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: ease.out },
                  },
                }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.25, ease: ease.smooth },
                }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2.5 shadow-sm`}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[13px] font-medium text-txt group-hover:text-txt transition-colors duration-300 leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-txt-3 group-hover:text-txt-2 transition-colors duration-300">
                    {item.mini}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
