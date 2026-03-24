import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { cardHover } from "../../utils/motion";

const GlassCard = ({ children, className, hover = true, ...rest }) => {
  const Comp = hover ? motion.div : "div";
  const motionProps = hover
    ? { variants: cardHover, initial: "rest", whileHover: "hover" }
    : {};

  return (
    <Comp
      className={cn(
        "glass-panel rounded-2xl border border-white/[0.08] p-6 transition-all duration-300",
        className,
      )}
      {...motionProps}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default GlassCard;
