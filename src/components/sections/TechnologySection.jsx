import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../utils/motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { techItems } from "../../data/techData";

const useIsDark = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
};

const TechIcon = ({ name, color, colorLight, icon: Icon, isDark }) => {
  const [active, setActive] = useState(false);
  const isTouchRef = useRef(false);
  const activeColor = isDark ? color : colorLight || color;
  const mutedColor = isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.12)";

  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
    setActive((a) => !a);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchRef.current) setActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchRef.current) setActive(false);
  }, []);

  return (
    <motion.div
      variants={staggerChild}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-surface cursor-default transition-all duration-300"
      style={
        active
          ? {
              backgroundColor: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(124,58,237,0.04)",
            }
          : undefined
      }
    >
      <Icon
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-all duration-500"
        style={{
          color: active ? activeColor : mutedColor,
          filter: active ? `drop-shadow(0 0 8px ${activeColor}40)` : "none",
          transform: active ? "scale(1.12)" : "scale(1)",
        }}
      />

      <span
        className={`mt-2 text-[10px] sm:text-xs font-medium transition-all duration-300 select-none whitespace-nowrap ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{ color: active ? activeColor : "transparent" }}
      >
        {name}
      </span>
    </motion.div>
  );
};

const TechnologySection = () => {
  const isDark = useIsDark();

  return (
    <SectionWrapper id="tecnologia">
      <SectionHeading
        badge="Tecnología"
        title="Stack moderno para soluciones serias"
        gradient="moderno"
      />

      <div className="overflow-hidden rounded-2xl ring-1 ring-black/[0.06] dark:ring-white/[0.06]">
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-px"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.06)",
          }}
          {...staggerContainer(0.03)}
        >
          {techItems.map((item) => (
            <TechIcon key={item.name} {...item} isDark={isDark} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default TechnologySection;
