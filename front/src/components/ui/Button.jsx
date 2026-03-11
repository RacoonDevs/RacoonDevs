// src/components/ui/Button.jsx
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-txt shadow-2xl hover:shadow-cyan-500/50",
    secondary:
      "border-2 border-ink/20 bg-ink/5 backdrop-blur-sm hover:bg-ink/10 text-txt",
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base",
    lg: "px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg",
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
