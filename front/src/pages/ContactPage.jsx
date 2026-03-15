// src/pages/ContactPage.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/layout/AnimatedBackground";
import ContactSection from "../components/sections/ContactSection";
import { motion } from "framer-motion";
import { ease } from "../utils/motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        {/* Brief intro */}
        <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-4">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
              <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: ease.out }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-txt mb-4">
                  <span className="gradient-text">Hablemos</span> de tu proyecto
                </h1>
                <p className="text-txt-2 text-lg leading-relaxed">
                  Completa el formulario y nos pondremos en contacto contigo
                  para platicar tu idea.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <ContactSection hideHeader />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
