// src/components/layout/Footer.jsx
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "../../assets/RD_TRANS_C.webp";

const Footer = () => {
  const navigation = [
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "/portafolio", isRoute: true },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  const services = [
    "Software a la Medida",
    "Diseño UI/UX",
    "Landing Pages",
    "eCommerce",
    "Dashboards",
    "Integraciones",
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: "admin@racoondevs.com",
      href: "mailto:admin@racoondevs.com",
    },
    {
      icon: Phone,
      value: "+52 322 265 2650",
      href: "tel:+523222652650",
    },
    {
      icon: MapPin,
      value: "Puerto Vallarta, Jalisco, MX",
      href: null,
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050505]">
      <div className="w-full flex justify-center py-16 lg:py-20">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-5">
                <img src={Icon} alt="Racoon Devs" className="w-10 h-10" />
                <div>
                  <span className="text-lg font-semibold text-white block tracking-tight">
                    Racoon Devs
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                    Software Studio
                  </span>
                </div>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Software a la medida, diseño responsivo premium y arquitectura
                escalable para empresas que necesitan más que una plantilla.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">
                Navegación
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">
                Servicios
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-500 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-5">
                Contacto
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((item) => {
                  const Wrapper = item.href ? "a" : "span";
                  return (
                    <li key={item.value}>
                      <Wrapper
                        {...(item.href && { href: item.href })}
                        className="flex items-center gap-2.5 text-gray-500 hover:text-white text-sm transition-colors duration-200"
                      >
                        <item.icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {item.value}
                      </Wrapper>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="w-full flex justify-center py-6">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-600">
              <span>
                &copy; {new Date().getFullYear()} Racoon Devs. Puerto Vallarta,
                MX.
              </span>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Privacidad
                </a>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
