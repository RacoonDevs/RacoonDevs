import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  gradient,
  align = "center",
  as: Tag = "h2",
}) => {
  const MotionHeading = motion[Tag];

  const renderTitle = () => {
    if (!gradient) return title;
    const parts = title.split(gradient);
    if (parts.length === 1) return title;
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradient}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "mb-12 lg:mb-16",
      )}
    >
      {badge && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <SectionBadge>{badge}</SectionBadge>
        </div>
      )}
      <MotionHeading
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-txt leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: ease.out, delay: 0.1 }}
      >
        {renderTitle()}
      </MotionHeading>
      {subtitle && (
        <motion.p
          className={cn(
            "text-lg sm:text-xl text-txt-2 mt-4 leading-relaxed",
            align === "center" && "max-w-2xl mx-auto",
            align === "left" && "max-w-xl",
          )}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease.out, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
