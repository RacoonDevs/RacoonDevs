import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import ContactSection from "../components/sections/ContactSection";
import { seoConfig } from "../data/seoData";

const ContactPage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.contact} />
    <ContactSection />
  </PageLayout>
);

export default ContactPage;
