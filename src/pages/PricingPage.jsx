import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la homepage con el hash de la seccion de planes
    navigate("/#planes", { replace: true });
  }, [navigate]);

  return null;
};

export default PricingPage;
