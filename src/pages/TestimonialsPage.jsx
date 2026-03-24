import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TestimonialsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la homepage con el hash de testimoniales
    navigate("/#testimoniales", { replace: true });
  }, [navigate]);

  return null;
};

export default TestimonialsPage;
