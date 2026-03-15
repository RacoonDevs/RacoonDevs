// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useNavigateToSection } from "../utils/NavigateToSection";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import IconWhite from "../../assets/RD_TRANS_W.webp";
import IconBlack from "../../assets/RD_TRANS_B.webp";
import { ease } from "../../utils/motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigateToSection = useNavigateToSection();

  const {
    ref: themeToggleRef,
    toggleSwitchTheme,
    isDarkMode,
  } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: 750,
  });

  const Icon = isDarkMode ? IconWhite : IconBlack;

  const isHome = location.pathname === "/";

  const getNavItems = () => {
    if (isHome) {
      return [
        { name: "Servicios", path: "#servicios", isAnchor: true },
        { name: "Precios", path: "#precios", isAnchor: true },
        { name: "Portafolio", path: "/portafolio", isAnchor: false },
        { name: "Proceso", path: "/proceso", isAnchor: false },
        { name: "Contacto", path: "#contacto", isAnchor: true },
      ];
    }
    return [
      { name: "Inicio", path: "/", isAnchor: false },
      { name: "Servicios", path: "/#servicios", isAnchor: false },
      { name: "Portafolio", path: "/portafolio", isAnchor: false },
      { name: "Proceso", path: "/proceso", isAnchor: false },
      { name: "Contacto", path: "/contacto", isAnchor: false },
    ];
  };

  const navItems = getNavItems();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: ease.out }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-2xl backdrop-saturate-150 shadow-sm shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        {/* Raccoon watermark */}
        <img
          src={Icon}
          alt=""
          aria-hidden="true"
          className="absolute right-[15%] top-1/2 -translate-y-1/2 h-10 lg:h-12 opacity-[0.04] pointer-events-none select-none hidden sm:block"
        />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
              {/* Logo */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-ink/10 flex items-center justify-center"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={Icon}
                    alt="Racoon Devs"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-txt tracking-tight">
                    Racoon Devs
                  </span>
                  <span className="text-[10px] text-txt-3 -mt-0.5 tracking-wider uppercase">
                    Software Studio
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigateToSection(item.path)}
                    className={`relative px-4 py-2 rounded-lg text-sm transition-colors duration-200 cursor-pointer group ${
                      location.pathname === item.path
                        ? "text-txt"
                        : "text-txt-2 hover:text-txt"
                    }`}
                  >
                    {item.name}
                    {/* Hover underline */}
                    <span className="absolute bottom-0.5 left-4 right-4 h-px bg-ink/0 group-hover:bg-ink/30 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
                  </button>
                ))}
                <motion.button
                  onClick={() =>
                    navigateToSection(isHome ? "#contacto" : "/contacto")
                  }
                  className="ml-4 inline-flex items-center gap-2 px-5 py-2 gradient-primary text-white rounded-full text-sm font-medium cursor-pointer overflow-hidden relative shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Iniciar Proyecto
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              </nav>

              {/* Right controls */}
              <div className="flex items-center gap-1">
                {/* Theme toggle */}
                <button
                  ref={themeToggleRef}
                  onClick={toggleSwitchTheme}
                  className="p-2 rounded-lg hover:bg-ink/5 transition-colors duration-200 text-txt cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-4.5 h-4.5" />
                  ) : (
                    <Moon className="w-4.5 h-4.5" />
                  )}
                </button>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden text-txt p-2 rounded-lg hover:bg-ink/5 transition-colors duration-200 relative z-[60]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink-inv/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-alt border-l border-ink/[0.06] z-50 lg:hidden glass-panel"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar header */}
              <div className="flex items-center justify-between p-6 border-b border-ink/[0.06]">
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-ink/10 flex items-center justify-center">
                    <img src={Icon} alt="Logo" className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-semibold text-txt">
                    Racoon Devs
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-txt p-2 rounded-lg hover:bg-ink/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        navigateToSection(item.path);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-txt-2 hover:text-txt hover:bg-ink/5 transition-all duration-200 py-3 px-4 rounded-lg text-lg"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-ink/[0.06]">
                <button
                  onClick={() => {
                    navigateToSection(isHome ? "#contacto" : "/contacto");
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 gradient-primary text-white rounded-full font-medium text-base shadow-lg shadow-primary/25"
                >
                  Iniciar Proyecto
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
