// src/components/layout/Footer.jsx
import { motion } from "framer-motion";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Linkedin,
  Github,
  Twitter,
  Globe,
  ExternalLink,
  Rocket,
  Sparkles,
  Send,
} from "lucide-react";
import Icon from "../../assets/RD_TRANS_C.webp";

const Footer = () => {
  const navigationLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  const services = [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Mobile", href: "#servicios" },
    { label: "E-commerce", href: "#servicios" },
    { label: "UI/UX Design", href: "#servicios" },
    { label: "Consultoría", href: "#servicios" },
  ];

  const resources = [
    { label: "Blog", href: "#", external: true },
    { label: "Casos de Estudio", href: "#portafolio" },
    { label: "Recursos Gratuitos", href: "#", external: true },
    { label: "Documentación", href: "#", external: true },
    { label: "API", href: "#", external: true },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/raulbellosom/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/raulbellosom",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Twitter,
      href: "https://x.com/Raul_BellosoM",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: Globe,
      href: "https://racoondevs.com",
      label: "Website",
      color: "hover:text-green-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hola@racoondevs.com",
      href: "mailto:hola@racoondevs.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 322 265 2650",
      href: "tel:+523222652650",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Relampago #101, Puerto Vallarta, Jalisco, México",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900/95 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="w-full flex justify-center py-12 lg:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-4 group mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center"> */}
                    <img src={Icon} alt="Logo" className="w-14 h-14" />
                    {/* </div> */}
                    {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" /> */}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Racoon Devs
                    </span>
                    <div className="text-sm text-gray-400 font-mono -mt-1">
                      Digital Architects
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
                  Transformamos ideas en experiencias digitales extraordinarias.
                  Creamos software que perdura, interfaces que hipnotizan y
                  ecosistemas completos que impulsan tu negocio.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <contact.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{contact.value}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 text-gray-400 ${social.color} group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Navegación
                </h3>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-purple-400" />
                  Servicios
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a
                        href={service.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {service.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-pink-400" />
                  Recursos
                </h3>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a
                        href={resource.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                        {...(resource.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {resource.label}
                        {resource.external && (
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full flex justify-center py-8 lg:py-12">
            <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-xl mb-2 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    Mantente al día con nosotros
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Suscríbete para recibir tips, recursos y actualizaciones
                    sobre desarrollo web y tecnología.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                    />
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-4 h-4" />
                      <span className="hidden sm:inline">Suscribirse</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full flex justify-center py-6">
            <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <span>© 2025 Racoon Devs. Hecho con</span>
                  <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                  <span>en México</span>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Política de Privacidad
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Términos de Servicio
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
