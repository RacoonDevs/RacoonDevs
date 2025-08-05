// src/components/sections/ProcessSection.jsx
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Descubrimiento",
      subtitle: "Entendemos tu visión",
      description:
        "Analizamos tu negocio, usuarios y objetivos para crear una estrategia sólida que transforme ideas en soluciones digitales exitosas.",
      icon: Search,
      features: [
        "Análisis de mercado",
        "Research de usuarios",
        "Definición de objetivos",
        "Planificación estratégica",
      ],
      duration: "1-2 semanas",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500/50 to-blue-500/50",
      accentColor: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
    },
    {
      number: "02",
      title: "Diseño & Prototipado",
      subtitle: "Creamos la experiencia",
      description:
        "Diseñamos interfaces intuitivas y experiencias que conectan con tus usuarios, validando cada decisión antes del desarrollo.",
      icon: Lightbulb,
      features: [
        "Wireframes y mockups",
        "Prototipado interactivo",
        "Testing de usabilidad",
        "Sistema de diseño",
      ],
      duration: "2-3 semanas",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      accentColor: "text-purple-400",
      bgAccent: "bg-purple-500/10",
    },
    {
      number: "03",
      title: "Desarrollo",
      subtitle: "Construimos tu solución",
      description:
        "Desarrollamos con las mejores prácticas, código limpio y arquitecturas escalables que crecen con tu negocio.",
      icon: Code2,
      features: [
        "Desarrollo ágil",
        "Testing automatizado",
        "Code reviews",
        "Integración continua",
      ],
      duration: "4-8 semanas",
      gradient: "from-pink-500/20 to-orange-500/20",
      borderGradient: "from-pink-500/50 to-orange-500/50",
      accentColor: "text-pink-400",
      bgAccent: "bg-pink-500/10",
    },
    {
      number: "04",
      title: "Lanzamiento & Soporte",
      subtitle: "Llevamos tu proyecto al mundo",
      description:
        "Desplegamos tu solución y te acompañamos con soporte continuo, actualizaciones y mejoras basadas en datos reales.",
      icon: Rocket,
      features: [
        "Deploy y optimización",
        "Monitoreo 24/7",
        "Soporte técnico",
        "Mejoras continuas",
      ],
      duration: "Ongoing",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/50 to-emerald-500/50",
      accentColor: "text-green-400",
      bgAccent: "bg-green-500/10",
    },
  ];

  const stats = [
    { icon: Target, label: "Proyectos Completados", value: "10+" },
    { icon: Clock, label: "Tiempo Promedio", value: "8-16 sem" },
    { icon: Users, label: "Clientes Satisfechos", value: "98%" },
    { icon: Zap, label: "Tiempo de Respuesta", value: "< 24h" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      id="proceso"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nuestro Proceso
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Un enfoque probado que transforma ideas en soluciones digitales
              exitosas
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="space-y-6 lg:space-y-8 mb-12 lg:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent z-10" />
                )}

                {/* Step Card */}
                <div
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br ${step.gradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-black/10`}
                >
                  {/* Step Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
                    {/* Step Number & Icon - Mobile/Desktop */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                      {/* Step Number */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br ${step.borderGradient} flex items-center justify-center lg:mb-4`}
                      >
                        <span className="text-white font-bold text-lg lg:text-xl">
                          {step.number}
                        </span>
                      </div>

                      {/* Icon - Hidden on mobile, visible on desktop */}
                      <div
                        className={`hidden lg:flex w-16 h-16 rounded-xl bg-gradient-to-br ${step.borderGradient} items-center justify-center`}
                      >
                        <step.icon className={`w-8 h-8 ${step.accentColor}`} />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="lg:col-span-3">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white">
                              {step.title}
                            </h3>
                            <span
                              className={`self-start px-2 py-1 rounded-full text-xs font-medium ${step.bgAccent} ${step.accentColor} border border-current/20`}
                            >
                              {step.duration}
                            </span>
                          </div>
                          <p
                            className={`text-base lg:text-lg ${step.accentColor} font-medium mb-3`}
                          >
                            {step.subtitle}
                          </p>
                          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-1">
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + featureIndex * 0.05,
                            }}
                          >
                            <CheckCircle
                              className={`w-3 h-3 lg:w-4 lg:h-4 ${step.accentColor} flex-shrink-0`}
                            />
                            <span className="text-xs lg:text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.borderGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight
                      className={`w-4 h-4 lg:w-6 lg:h-6 ${step.accentColor}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Stats */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 lg:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 mx-auto mb-2 lg:mb-3" />
                  <div className="text-lg lg:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 text-lg mb-6">
              ¿Listo para comenzar tu transformación digital?
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
