import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionAliases = {
  testimoniales: "testimonios",
  pricing: "planes",
};

const normalizeSectionId = (rawHash) => {
  const hash = rawHash.replace("#", "");
  return sectionAliases[hash] || hash;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(normalizeSectionId(hash));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
