import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import { seoConfig } from "../data/seoData";

const TermsPage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.terms} />
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-display)] text-txt mb-8">
          Términos y Condiciones
        </h1>
        <p className="text-lg text-txt-2 leading-relaxed">
          Contenido próximamente.
        </p>
      </div>
    </div>
  </PageLayout>
);

export default TermsPage;
