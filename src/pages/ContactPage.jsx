import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import ContactSection from "../components/sections/ContactSection";

const ContactPage = () => (
  <PageLayout>
    <SEOHead
      title="Contacto | Racoon Devs"
      description="Contáctanos para discutir tu próximo proyecto de desarrollo web o software. Estamos en Puerto Vallarta, listos para ayudarte."
      canonical="https://racoondevs.com/contacto"
    />
    <ContactSection />
  </PageLayout>
);

export default ContactPage;
