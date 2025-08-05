import { motion } from "framer-motion";
import { Code2, Palette, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Software que Perdura",
      subtitle: "Arquitectura sólida",
      description:
        "Creamos ecosistemas digitales robustos con arquitecturas escalables que evolucionan con tu negocio.",
      features: [
        "Arquitectura escalable",
        "Código limpio y mantenible",
        "Testing automatizado",
        "Documentación completa",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500/50 to-blue-500/50",
      iconColor: "text-cyan-400",
    },
    {
      icon: Palette,
      title: "Interfaces Hipnotizantes",
      subtitle: "Diseño que conecta",
      description:
        "Diseñamos experiencias que no solo se ven increíbles, sino que conectan emocionalmente con tus usuarios.",
      features: [
        "UI/UX research profundo",
        "Prototipado interactivo",
        "Sistemas de diseño",
        "Accesibilidad garantizada",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      iconColor: "text-purple-400",
    },
    {
      icon: Rocket,
      title: "Ecosistemas Completos",
      subtitle: "Soluciones integrales",
      description:
        "Desarrollamos plataformas completas que integran todas las piezas de tu negocio en una sinfonía digital.",
      features: [
        "Integración de sistemas",
        "APIs robustas",
        "Cloud architecture",
        "Monitoreo 24/7",
      ],
      gradient: "from-pink-500/20 to-orange-500/20",
      borderGradient: "from-pink-500/50 to-orange-500/50",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section id="servicios" className="relative py-20 sm:py-24 lg:py-32">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              No hacemos{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                software
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Esculpimos experiencias digitales que transforman la manera en que
              las personas interactúan con la tecnología.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative group p-8 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-transparent transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm font-medium ${service.iconColor} mb-4`}
                    >
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + featureIndex * 0.1 + 0.6,
                        }}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${service.iconColor} mr-3 flex-shrink-0`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center text-white font-medium mt-6 group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">Explorar más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-l from-purple-400/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
