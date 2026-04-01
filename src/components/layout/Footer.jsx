import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};
import {
  EMAIL,
  PHONE_PRIMARY,
  WHATSAPP_URL,
  SOCIAL_LINKS,
  ADDRESS,
} from "../../utils/constants";
import LogoColor from "../../assets/logos/RD_TRANS_C.webp";

const footerNav = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Portafolio", path: "/portafolio" },
  { name: "Proceso", path: "/proceso" },
  { name: "Contacto", path: "/contacto" },
];

const footerServices = [
  "Software a la Medida",
  "Diseño UI/UX",
  "Landing Pages",
  "Aplicaciones Web",
  "Apps Móviles",
  "eCommerce",
  "Dashboards",
  "Automatización",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-primary/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={LogoColor}
                alt="Racoon Devs"
                width="40"
                height="40"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[family-name:var(--font-display)] text-txt leading-tight">
                  Racoon Devs
                </span>
                <span className="text-[10px] text-txt-3 tracking-wider uppercase leading-none">
                  Software Studio
                </span>
              </div>
            </Link>
            <p className="text-sm text-txt-3 leading-relaxed mb-6 max-w-xs">
              Studio de desarrollo web y software a la medida en Puerto
              Vallarta. Diseñamos y construimos productos digitales que impulsan
              negocios.
            </p>
            <div className="flex gap-3">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/[0.06] border border-primary/[0.1] flex items-center justify-center hover:bg-primary/[0.12] transition-all duration-300 text-txt-3 hover:text-primary"
                  aria-label={name}
                >
                  {socialIcons[name]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-txt-3 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-sm text-txt-3">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-txt uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-txt-3 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-txt-3 hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-txt-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}, {ADDRESS.state}
                  </span>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-txt-4">
            &copy; {year} Racoon Devs. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacidad"
              className="text-xs text-txt-4 hover:text-txt-2 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              to="/terminos"
              className="text-xs text-txt-4 hover:text-txt-2 transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
