// src/App.jsx
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RacoonDevsLanding from "./components/RacoonDevsLanding";
import PortfolioPage from "./pages/PortfolioPage";
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
        </Routes>
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;
