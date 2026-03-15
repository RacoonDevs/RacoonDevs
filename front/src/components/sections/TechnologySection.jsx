import { motion } from "framer-motion";
import {
  Server,
  Blocks,
  Smartphone,
  RefreshCw,
  Cloud,
  Plug,
} from "lucide-react";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";

const techFeatures = [
  {
    icon: Blocks,
    title: "Arquitectura Modular",
    description:
      "Componentes reutilizables y separación de responsabilidades que facilitan mantenimiento y evolución.",
    gradient: "from-violet-500 to-purple-600",
    border: "hover:border-violet-500/20",
    shadow: "hover:shadow-violet-500/10",
  },
  {
    icon: Server,
    title: "Backend Escalable",
    description:
      "APIs RESTful robustas, bases de datos optimizadas y servicios que crecen con tu demanda.",
    gradient: "from-cyan-500 to-teal-600",
    border: "hover:border-cyan-500/20",
    shadow: "hover:shadow-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "Frontend Responsivo",
    description:
      "Interfaces que se adaptan a cada dispositivo con rendimiento óptimo y carga progresiva.",
    gradient: "from-pink-500 to-rose-600",
    border: "hover:border-pink-500/20",
    shadow: "hover:shadow-pink-500/10",
  },
  {
    icon: Plug,
    title: "Integraciones & APIs",
    description:
      "Conectamos tu producto con pasarelas de pago, CRMs, ERPs, servicios de terceros y herramientas internas.",
    gradient: "from-amber-500 to-orange-600",
    border: "hover:border-amber-500/20",
    shadow: "hover:shadow-amber-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready",
    description:
      "Deploys automatizados, contenedores y configuraciones listas para escalar en la nube.",
    gradient: "from-emerald-500 to-green-600",
    border: "hover:border-emerald-500/20",
    shadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: RefreshCw,
    title: "Código Mantenible",
    description:
      "Testing, documentación, CI/CD y buenas prácticas para que tu equipo pueda continuar el desarrollo.",
    gradient: "from-blue-500 to-indigo-600",
    border: "hover:border-blue-500/20",
    shadow: "hover:shadow-blue-500/10",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Appwrite",
  "AWS",
  "Vercel",
];

const stackColors = [
  "border-cyan-500/15 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]",
  "border-violet-500/15 hover:border-violet-500/30 hover:bg-violet-500/[0.06]",
  "border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/[0.06]",
  "border-emerald-500/15 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]",
  "border-amber-500/15 hover:border-amber-500/30 hover:bg-amber-500/[0.06]",
  "border-pink-500/15 hover:border-pink-500/30 hover:bg-pink-500/[0.06]",
  "border-indigo-500/15 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]",
  "border-teal-500/15 hover:border-teal-500/30 hover:bg-teal-500/[0.06]",
  "border-red-500/15 hover:border-red-500/30 hover:bg-red-500/[0.06]",
  "border-cyan-500/15 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]",
  "border-violet-500/15 hover:border-violet-500/30 hover:bg-violet-500/[0.06]",
  "border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/[0.06]",
  "border-emerald-500/15 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]",
  "border-pink-500/15 hover:border-pink-500/30 hover:bg-pink-500/[0.06]",
  "border-amber-500/15 hover:border-amber-500/30 hover:bg-amber-500/[0.06]",
  "border-indigo-500/15 hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]",
];

const TechnologySection = () => {
  return (
    <section
      id="tecnologia"
      className="relative py-20 sm:py-24 lg:py-32 border-t border-primary/[0.08]"
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/[0.08] border border-secondary/[0.15] mb-4 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              <span className="text-sm tracking-widest uppercase text-secondary font-medium">
                Tecnología & Escalabilidad
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-3xl mx-auto leading-tight">
              Construimos productos que{" "}
              <span className="gradient-text">escalan con tu negocio</span>
            </h2>
            <p className="text-txt-2 text-lg max-w-2xl mx-auto leading-relaxed">
              Cada decisión técnica está orientada a que tu producto sea rápido,
              mantenible y preparado para crecer.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {techFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08] ${feature.border} transition-all duration-500 shadow-sm hover:shadow-xl ${feature.shadow}`}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-txt mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-txt-2 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack Bar */}
          <motion.div
            className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-alt/50 border border-primary/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: ease.out }}
          >
            <p className="text-sm text-txt-3 tracking-widest uppercase mb-6 text-center">
              Stack que dominamos
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.03, delayChildren: 0.2 },
                },
              }}
            >
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, ease: ease.out },
                    },
                  }}
                  className={`px-3 py-1.5 rounded-lg border bg-surface-alt/50 text-txt-2 text-sm font-medium hover:text-txt transition-all duration-300 ${stackColors[i]}`}
                  whileHover={{ scale: 1.06 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
