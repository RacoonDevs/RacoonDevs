import { useNavigate, useLocation } from "react-router-dom";

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (path) => {
    if (path.startsWith("/#")) {
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
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  return navigateToSection;
};
