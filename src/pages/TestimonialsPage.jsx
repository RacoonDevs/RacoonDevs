import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TestimonialsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la homepage con el hash de la seccion de testimonios
    navigate("/#testimonios", { replace: true });
  }, [navigate]);

  return null;
};

export default TestimonialsPage;
