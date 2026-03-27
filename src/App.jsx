import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/utils/ScrollToTop";
import AnalyticsTracker from "./components/utils/AnalyticsTracker";
import PageTransition from "./components/layout/PageTransition";

const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const WizardPage = lazy(() => import("./pages/WizardPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="popLayout">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/portafolio"
            element={
              <PageTransition>
                <PortfolioPage />
              </PageTransition>
            }
          />
          <Route
            path="/servicios"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />
          <Route
            path="/proceso"
            element={
              <PageTransition>
                <ProcessPage />
              </PageTransition>
            }
          />
          <Route
            path="/precios"
            element={
              <PageTransition>
                <PricingPage />
              </PageTransition>
            }
          />
          <Route
            path="/pricing"
            element={
              <PageTransition>
                <PricingPage />
              </PageTransition>
            }
          />
          <Route
            path="/testimoniales"
            element={
              <PageTransition>
                <TestimonialsPage />
              </PageTransition>
            }
          />
          <Route
            path="/contacto"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="/cuentanos-tu-idea"
            element={
              <PageTransition>
                <WizardPage />
              </PageTransition>
            }
          />
          <Route
            path="/privacidad"
            element={
              <PageTransition>
                <PrivacyPage />
              </PageTransition>
            }
          />
          <Route
            path="/terminos"
            element={
              <PageTransition>
                <TermsPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const content = (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsTracker />
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );

  if (recaptchaKey) {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
        {content}
      </GoogleReCaptchaProvider>
    );
  }

  return content;
}

export default App;
