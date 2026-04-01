import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { seoConfig } from "../data/seoData";
import PricingSection from "../components/sections/PricingSection";
import FAQSection from "../components/sections/FAQSection";
import FinalCTASection from "../components/sections/FinalCTASection";

const PricingPage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.pricing} />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
  </PageLayout>
);

export default PricingPage;
