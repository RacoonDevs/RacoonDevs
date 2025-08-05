// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import Icon from "../../assets/RD_TRANS_W.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Servicios", "Portfolio", "Proceso", "Contacto"];

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10"
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 px-2">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <img
                      src={Icon}
                      alt="Logo"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl lg:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Racoon Devs
                  </span>
                  <div className="text-xs text-gray-400 font-mono -mt-1 hidden sm:block">
                    Digital Architects
                  </div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-300 hover:text-white transition-colors duration-300 group px-4 py-2 rounded-lg hover:bg-white/5 text-sm xl:text-base"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-3/4 transition-all duration-300" />
                  </motion.a>
                ))}
                <motion.button
                  className="ml-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-full font-medium text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-4 h-4 mr-2 inline" />
                  Crear Magia
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors duration-200 relative z-[60]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <img src={Icon} alt="Logo" className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Racoon Devs
                    </span>
                    <div className="text-xs text-gray-400 font-mono -mt-1">
                      Digital Architects
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-white/10">
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5 mr-3 inline" />
                  Crear Magia
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;
