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
  },
  { label: "UI/UX Responsivo", icon: Palette, mini: "Mobile-first design" },
  { label: "eCommerce", icon: ShoppingCart, mini: "Tiendas & catálogos" },
  { label: "Dashboards", icon: LayoutDashboard, mini: "Paneles & analytics" },
  { label: "Automatización", icon: Workflow, mini: "APIs & procesos" },
  { label: "Apps Mobile-First", icon: Smartphone, mini: "PWA & responsive" },
  { label: "Landing Pages", icon: Globe, mini: "Conversión & SEO" },
  { label: "Sistemas Internos", icon: Cog, mini: "CRM, ERP & admin" },
];

const TrustStrip = () => {
  return (
    <section className="relative py-16 sm:py-20 border-y border-ink/5">
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
            viewport={{ once: true }}
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
                className="group relative flex flex-col items-center text-center p-4 rounded-xl border border-ink/[0.06] bg-ink/[0.015] hover:border-ink/15 hover:bg-ink/[0.04] transition-all duration-500 glass-panel"
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
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-ink/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-ink/[0.04] border border-ink/[0.08] flex items-center justify-center mb-2.5 group-hover:border-ink/20 group-hover:bg-ink/[0.08] transition-all duration-300">
                    <item.icon className="w-4 h-4 text-txt-3 group-hover:text-txt transition-colors duration-300" />
                  </div>
                  <p className="text-[13px] font-medium text-txt-2 group-hover:text-txt transition-colors duration-300 leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-txt-4 group-hover:text-txt-2 transition-colors duration-300">
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
