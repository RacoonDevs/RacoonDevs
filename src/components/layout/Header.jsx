import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useNavigateToSection } from "../utils/NavigateToSection";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";
import LogoWhite from "../../assets/logos/RD_TRANS_W.webp";
import LogoBlack from "../../assets/logos/RD_TRANS_B.webp";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Portafolio", path: "/portafolio" },
  { name: "Proceso", path: "/proceso" },
  { name: "Precios", path: "/precios" },
  { name: "Testimoniales", path: "/testimoniales" },
  { name: "Contacto", path: "/contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b glass-panel",
          isScrolled
            ? "border-primary/15 py-3 shadow-md"
            : "border-primary/12 py-4 shadow-sm",
        )}
        style={{
          backgroundColor: isScrolled
            ? "rgb(var(--surface-rgb) / 0.92)"
            : "rgb(var(--surface-rgb) / 0.97)",
          backdropFilter: "blur(18px) saturate(165%)",
          WebkitBackdropFilter: "blur(18px) saturate(165%)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: ease.out }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors duration-300">
              <img
                src={isDark ? LogoWhite : LogoBlack}
                alt="Racoon Devs"
                width="24"
                height="24"
                className="w-6 h-6"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base xl:text-lg font-bold font-[family-name:var(--font-display)] text-txt group-hover:text-primary transition-colors duration-300 leading-tight whitespace-nowrap">
                Racoon Devs
              </span>
              <span className="text-[9px] xl:text-[10px] text-txt-3 tracking-wider uppercase leading-none whitespace-nowrap">
                Software Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Navegación principal"
            className="hidden xl:flex items-center gap-0.5 flex-shrink-0"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={item.path === "/" ? handleHomeClick : undefined}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  location.pathname === item.path
                    ? "text-primary bg-primary/[0.08]"
                    : "text-txt-2 hover:text-txt hover:bg-primary/[0.05]",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 xl:p-2.5 rounded-xl bg-primary/[0.06] border border-primary/[0.1] hover:bg-primary/[0.12] transition-all duration-300 cursor-pointer"
              aria-label="Cambiar tema"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-primary" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </button>

            {/* CTA Button (desktop) */}
            <Link
              to="/cuentanos-tu-idea"
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 gradient-primary text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap"
            >
              Hablemos
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden p-2 xl:p-2.5 rounded-xl bg-primary/[0.06] border border-primary/[0.1] cursor-pointer"
              aria-label="Menú"
            >
              {isMobileOpen ? (
                <X className="w-4 h-4 text-txt" />
              ) : (
                <Menu className="w-4 h-4 text-txt" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60] xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-surface border-l border-primary/[0.08] z-[70] xl:hidden p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                    <img
                      src={isDark ? LogoWhite : LogoBlack}
                      alt="Racoon Devs"
                      width="24"
                      height="24"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold font-[family-name:var(--font-display)] text-txt leading-tight">
                      Racoon Devs
                    </span>
                    <span className="text-[10px] text-txt-3 tracking-wider uppercase leading-none">
                      Software Studio
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-primary/[0.05] cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5 text-txt-2" />
                </button>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={item.path === "/" ? handleHomeClick : undefined}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        location.pathname === item.path
                          ? "text-primary bg-primary/[0.08]"
                          : "text-txt-2 hover:text-txt hover:bg-primary/[0.05]",
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/cuentanos-tu-idea"
                className="flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-full font-semibold text-base mt-4"
              >
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
