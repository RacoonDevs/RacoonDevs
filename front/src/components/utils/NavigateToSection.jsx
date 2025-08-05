// src/components/utils/NavigateToSection.jsx
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (path) => {
    if (path.startsWith("/#")) {
      // Si estamos en la página principal, hacer scroll directo
      if (location.pathname === "/") {
        const sectionId = path.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // Si estamos en otra página, navegar a la principal con el hash
        navigate(path);
      }
    } else {
      // Navegación normal
      navigate(path);
    }
  };

  return navigateToSection;
};
