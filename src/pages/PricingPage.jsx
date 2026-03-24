import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la homepage con el hash de pricing
    navigate("/#pricing", { replace: true });
  }, [navigate]);

  return null;
};

export default PricingPage;
