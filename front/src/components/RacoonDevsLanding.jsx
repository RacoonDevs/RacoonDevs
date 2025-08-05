// src/components/RacoonDevsLanding.jsx
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProcessSection from "./sections/ProcessSection";
import ContactSection from "./sections/ContactSection";
import AnimatedBackground from "./layout/AnimatedBackground";

const RacoonDevsLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatedBackground mousePosition={mousePosition} />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default RacoonDevsLanding;
