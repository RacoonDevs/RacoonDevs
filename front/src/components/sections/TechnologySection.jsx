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
  },
  {
    icon: Server,
    title: "Backend Escalable",
    description:
      "APIs RESTful robustas, bases de datos optimizadas y servicios que crecen con tu demanda.",
  },
  {
    icon: Smartphone,
    title: "Frontend Responsivo",
    description:
      "Interfaces que se adaptan a cada dispositivo con rendimiento óptimo y carga progresiva.",
  },
  {
    icon: Plug,
    title: "Integraciones & APIs",
    description:
      "Conectamos tu producto con pasarelas de pago, CRMs, ERPs, servicios de terceros y herramientas internas.",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready",
    description:
      "Deploys automatizados, contenedores y configuraciones listas para escalar en la nube.",
  },
  {
    icon: RefreshCw,
    title: "Código Mantenible",
    description:
      "Testing, documentación, CI/CD y buenas prácticas para que tu equipo pueda continuar el desarrollo.",
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

const TechnologySection = () => {
  return (
    <section
      id="tecnologia"
      className="relative py-20 sm:py-24 lg:py-32 border-t border-ink/5"
    >
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: ease.out }}
          >
            <motion.p
              className="text-sm tracking-widest uppercase text-txt-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease.out }}
            >
              Tecnología & Escalabilidad
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-txt mb-6 max-w-3xl mx-auto leading-tight">
              Construimos productos que{" "}
              <span className="text-txt-2">escalan con tu negocio</span>
            </h2>
            <p className="text-txt-2 text-lg max-w-2xl mx-auto leading-relaxed">
              Cada decisión técnica está orientada a que tu producto sea rápido,
              mantenible y preparado para crecer.
            </p>
          </motion.div>

          {/* Grid — staggered */}
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {techFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className="group relative p-6 sm:p-8 rounded-2xl bg-ink/[0.02] border border-ink/[0.06] hover:border-ink/15 hover:bg-ink/[0.04] transition-colors duration-500 glass-panel"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3, ease: ease.smooth },
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-ink/5 border border-ink/10 flex items-center justify-center mb-5 group-hover:border-ink/20 group-hover:bg-ink/[0.08] transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-txt-2 group-hover:text-txt transition-colors duration-300" />
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
            className="mt-16 p-6 sm:p-8 rounded-2xl bg-ink/[0.02] border border-ink/[0.06] glass-panel"
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
              {stack.map((tech) => (
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
                  className="px-3 py-1.5 rounded-lg border border-ink/10 bg-ink/[0.03] text-txt-2 text-sm font-medium hover:border-ink/20 hover:text-txt hover:bg-ink/[0.06] transition-all duration-300"
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
