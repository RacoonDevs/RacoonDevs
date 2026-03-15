// src/App.jsx
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RacoonDevsLanding from "./components/RacoonDevsLanding";
import PortfolioPage from "./pages/PortfolioPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RacoonDevsLanding />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/proceso" element={<ProcessPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/terminos" element={<TermsPage />} />
        </Routes>
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;
