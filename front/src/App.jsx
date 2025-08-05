// src/App.jsx
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import RacoonDevsLanding from "./components/RacoonDevsLanding";

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    >
      <RacoonDevsLanding />
    </GoogleReCaptchaProvider>
  );
}

export default App;
