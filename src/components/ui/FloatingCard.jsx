import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";

const FloatingCard = ({
  children,
  className,
  delay = 0,
  floatRange = 8,
  floatDuration = 6,
}) => (
  <motion.div
    className={cn(
      "rounded-xl border border-primary/[0.12] bg-surface-alt/80 backdrop-blur-xl shadow-2xl shadow-primary/10 glass-panel",
      className,
    )}
    initial={{ opacity: 0, y: 30, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: ease.out }}
  >
    <motion.div
      animate={{
        y: [-floatRange / 2, floatRange / 2, -floatRange / 2],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default FloatingCard;
