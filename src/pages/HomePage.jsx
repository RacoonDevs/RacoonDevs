import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { seoConfig } from "../data/seoData";
import HeroSection from "../components/sections/HeroSection";
import HomeServicesSection from "../components/sections/HomeServicesSection";
import ResultsSection from "../components/sections/ResultsSection";
import TechnologySection from "../components/sections/TechnologySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FinalCTASection from "../components/sections/FinalCTASection";

const HomePage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.home} />
    <HeroSection />
    <HomeServicesSection />
    <ResultsSection />
    <TechnologySection />
    <TestimonialsSection />
    <FinalCTASection />
  </PageLayout>
);

export default HomePage;
