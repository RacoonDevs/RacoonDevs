import { useNavigate, useLocation } from "react-router-dom";

const sectionAliases = {
  testimoniales: "testimonios",
  pricing: "planes",
};

const normalizeSectionPath = (path) => {
  if (!path.includes("#")) {
    return path;
  }

  const [basePath, rawHash] = path.split("#");
  const normalizedHash = sectionAliases[rawHash] || rawHash;

  return `${basePath}#${normalizedHash}`;
};

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (path) => {
    const normalizedPath = normalizeSectionPath(path);

    if (normalizedPath.startsWith("/#")) {
      if (location.pathname === "/") {
        const sectionId = normalizedPath.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        navigate(normalizedPath);
      }
    } else {
      navigate(normalizedPath);
    }
  };

  return navigateToSection;
};
