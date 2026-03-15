import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "../../assets/RD_TRANS_C.webp";
import { useNavigateToSection } from "../utils/NavigateToSection";

const Footer = () => {
  const navigateToSection = useNavigateToSection();

  const navigation = [
    { label: "Servicios", href: "/#servicios", isRoute: false },
    { label: "Portafolio", href: "/portafolio", isRoute: true },
    { label: "Proceso", href: "/proceso", isRoute: true },
    { label: "Contacto", href: "/#contacto", isRoute: false },
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
      value: "+52 322 135 8808",
      href: "tel:+523221358808",
    },
    {
      icon: Phone,
      value: "+52 322 265 2650",
      href: "tel:+523222652650",
    },
    {
      icon: MessageCircle,
      value: "WhatsApp",
      href: "https://wa.me/523221358808?text=Hola%2C%20me%20interesa%20un%20proyecto%20con%20RacoonDevs",
    },
    {
      icon: MapPin,
      value: "Puerto Vallarta, Jalisco, MX",
      href: null,
    },
  ];

  return (
    <footer className="relative border-t border-primary/[0.08] bg-surface">
      <div className="w-full flex justify-center py-16 lg:py-20">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-5">
                <img src={Icon} alt="Racoon Devs" className="w-10 h-10" />
                <div>
                  <span className="text-lg font-semibold text-txt block tracking-tight">
                    Racoon Devs
                  </span>
                  <span className="text-[10px] text-txt-3 tracking-wider uppercase">
                    Software Studio
                  </span>
                </div>
              </Link>
              <p className="text-txt-3 text-sm leading-relaxed max-w-xs">
                Desarrollo web, software a la medida y creacion de aplicaciones
                moviles en Puerto Vallarta, Jalisco y Nayarit.
              </p>
            </div>

            <div>
              <h4 className="text-txt text-sm font-semibold mb-5">
                Navegacion
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="text-txt-3 hover:text-txt text-sm transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => navigateToSection(item.href)}
                        className="text-txt-3 hover:text-txt text-sm transition-colors duration-200 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-txt text-sm font-semibold mb-5">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-txt-3 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-txt text-sm font-semibold mb-5">Contacto</h4>
              <ul className="space-y-3">
                {contactInfo.map((item) => {
                  const Wrapper = item.href ? "a" : "span";

                  return (
                    <li key={item.value}>
                      <Wrapper
                        {...(item.href && { href: item.href })}
                        className="flex items-center gap-2.5 text-txt-3 hover:text-txt text-sm transition-colors duration-200"
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

      <div className="border-t border-primary/[0.06]">
        <div className="w-full flex justify-center py-6">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-txt-4">
              <span>
                &copy; {new Date().getFullYear()} Racoon Devs. Puerto Vallarta,
                MX.
              </span>
              <div className="flex gap-5">
                <Link
                  to="/privacidad"
                  className="hover:text-txt-2 transition-colors duration-200"
                >
                  Privacidad
                </Link>
                <Link
                  to="/terminos"
                  className="hover:text-txt-2 transition-colors duration-200"
                >
                  Terminos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
