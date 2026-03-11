// src/components/RacoonDevsLanding.jsx
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import TrustStrip from "./sections/TrustStrip";
import ShowcaseSection from "./sections/ShowcaseSection";
import ServicesSection from "./sections/ServicesSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProcessSection from "./sections/ProcessSection";
import TechnologySection from "./sections/TechnologySection";
import ContactSection from "./sections/ContactSection";
import AnimatedBackground from "./layout/AnimatedBackground";

const RacoonDevsLanding = () => {
  return (
    <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        <HeroSection />
        <TrustStrip />
        <ShowcaseSection />
        <ServicesSection />
        <CapabilitiesSection />
        <PortfolioSection />
        <ProcessSection />
        <TechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default RacoonDevsLanding;
