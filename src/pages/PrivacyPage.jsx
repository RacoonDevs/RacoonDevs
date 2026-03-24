import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";

const PrivacyPage = () => (
  <PageLayout>
    <SEOHead
      title="Privacidad | Racoon Devs"
      description="Política de privacidad de Racoon Devs. Conoce cómo protegemos y manejamos tu información personal."
      canonical="https://racoondevs.com/privacidad"
    />
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-display)] text-txt mb-8">
          Política de Privacidad
        </h1>
        <p className="text-lg text-txt-2 leading-relaxed">
          Contenido próximamente.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default PrivacyPage;
