import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { seoConfig } from "../data/seoData";
import WizardSection from "../components/wizard/WizardSection";

const WizardPage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.wizard} />
    <WizardSection />
  </PageLayout>
);

export default WizardPage;
