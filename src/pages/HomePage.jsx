import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { seoConfig } from "../data/seoData";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";

import DifferentiationSection from "../components/sections/DifferentiationSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import MultiDeviceSection from "../components/sections/MultiDeviceSection";
import TechnologySection from "../components/sections/TechnologySection";
import ProcessSection from "../components/sections/ProcessSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import ResultsSection from "../components/sections/ResultsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import PricingSection from "../components/sections/PricingSection";
import ContactSection from "../components/sections/ContactSection";
import FinalCTASection from "../components/sections/FinalCTASection";

const HomePage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.home} />
    <HeroSection />
    <ServicesSection />
    <DifferentiationSection />
    <PortfolioSection />
    <MultiDeviceSection />
    <TechnologySection />
    <ProcessSection />
    <IndustriesSection />
    <ResultsSection />
    <TestimonialsSection />
    <FAQSection />
    <PricingSection />
    <ContactSection />
    <FinalCTASection />
  </PageLayout>
);

export default HomePage;
