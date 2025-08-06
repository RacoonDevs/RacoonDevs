// src/components/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Loader2,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle reCAPTCHA v3 verification
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return null;
    }

    try {
      const token = await executeRecaptcha("contact_form_submit");
      return token;
    } catch (error) {
      console.error("reCAPTCHA verification failed:", error);
      return null;
    }
  }, [executeRecaptcha]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get reCAPTCHA token
    const recaptchaToken = await handleReCaptchaVerify();

    if (!recaptchaToken) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // vite app url
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "admin@racoondevs.com",
      href: "mailto:admin@racoondevs.com",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500/50 to-blue-500/50",
      accentColor: "text-cyan-400",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 322 265 2650",
      href: "tel:+523222652650",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      accentColor: "text-purple-400",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Relampago #101, Puerto Vallarta, Jalisco, México",
      href: "#",
      gradient: "from-pink-500/20 to-orange-500/20",
      borderGradient: "from-pink-500/50 to-orange-500/50",
      accentColor: "text-pink-400",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raulbellosom/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/raulbellosom", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Raul_BellosoM", label: "Twitter" },
    { icon: Globe, href: "https://racoondevs.com", label: "Website" },
  ];

  const features = [
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Te respondemos en menos de 24 horas",
    },
    {
      icon: MessageSquare,
      title: "Consulta Gratuita",
      description: "Primera consulta completamente gratis",
    },
    {
      icon: CheckCircle,
      title: "Sin Compromiso",
      description: "Analizamos tu proyecto sin obligaciones",
    },
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
    hidden: { opacity: 0, y: 30 },
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
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      id="contacto"
    >
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¿Listo para Crear Magia?
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformemos tu idea en una experiencia digital extraordinaria
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Contact Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Cuéntanos tu Proyecto
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">
                        ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">
                        Error al enviar el mensaje. Por favor, intenta de nuevo.
                      </span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Tipo de Proyecto
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 12px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "16px",
                      }}
                    >
                      <option value="" className="bg-gray-800 text-white">
                        Selecciona una opción
                      </option>
                      <option value="web" className="bg-gray-800 text-white">
                        Desarrollo Web
                      </option>
                      <option value="mobile" className="bg-gray-800 text-white">
                        App Mobile
                      </option>
                      <option
                        value="ecommerce"
                        className="bg-gray-800 text-white"
                      >
                        E-commerce
                      </option>
                      <option value="custom" className="bg-gray-800 text-white">
                        Desarrollo Custom
                      </option>
                      <option
                        value="redesign"
                        className="bg-gray-800 text-white"
                      >
                        Rediseño
                      </option>
                      <option value="other" className="bg-gray-800 text-white">
                        Otro
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 [&>option]:bg-gray-800 [&>option]:text-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 12px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "16px",
                      }}
                    >
                      <option value="" className="bg-gray-800 text-white">
                        Selecciona un rango
                      </option>
                      <option value="5k-15k" className="bg-gray-800 text-white">
                        $5,000 - $15,000 MXN
                      </option>
                      <option
                        value="15k-30k"
                        className="bg-gray-800 text-white"
                      >
                        $15,000 - $30,000 MXN
                      </option>
                      <option
                        value="30k-50k"
                        className="bg-gray-800 text-white"
                      >
                        $30,000 - $50,000 MXN
                      </option>
                      <option value="50k+" className="bg-gray-800 text-white">
                        $50,000+ MXN
                      </option>
                      <option
                        value="discuss"
                        className="bg-gray-800 text-white"
                      >
                        Prefiero discutirlo
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:shadow-none"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Features */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br ${info.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group`}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.borderGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className={`w-6 h-6 ${info.accentColor}`} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          {info.label}
                        </div>
                        <div className="text-white font-medium">
                          {info.value}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${info.accentColor} ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  ¿Por qué Contactarnos?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Final */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Prefieres una llamada directa?
              </h3>
              <p className="text-gray-400 mb-6">
                Agenda una videollamada de 30 minutos para discutir tu proyecto
                en detalle
              </p>
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Agendar Llamada
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
