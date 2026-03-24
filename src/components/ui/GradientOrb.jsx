import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const colorMap = {
  primary: "from-primary/20 to-primary/5",
  secondary: "from-secondary/20 to-secondary/5",
  accent: "from-accent/20 to-accent/5",
};

const GradientOrb = ({
  color = "primary",
  size = 400,
  className,
  animate: doAnimate = true,
}) => (
  <motion.div
    className={cn(
      "absolute rounded-full pointer-events-none z-0 blur-3xl",
      `bg-gradient-to-br ${colorMap[color] || colorMap.primary}`,
      className,
    )}
    style={{ width: size, height: size }}
    {...(doAnimate
      ? {
          animate: { scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] },
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }
      : {})}
  />
);

export default GradientOrb;
