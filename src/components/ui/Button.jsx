import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35",
  secondary:
    "glass-panel border border-primary/[0.15] text-txt hover:border-primary/30 hover:bg-primary/[0.05]",
  ghost: "text-txt-2 hover:text-txt hover:bg-primary/[0.06]",
  outline:
    "border border-primary/20 text-txt hover:bg-primary/[0.06] hover:border-primary/30",
  cta: "gradient-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg gap-2",
  md: "px-6 py-3 text-sm rounded-xl gap-2.5",
  lg: "px-8 py-4 text-base rounded-full gap-3",
};

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  to,
  icon,
  iconPosition = "right",
  ...rest
}) => {
  const classes = cn(
    "relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all duration-300 cursor-pointer",
    variants[variant],
    variant === "cta" ? sizes.lg : sizes[size],
    className,
  );

  const content = (
    <>
      {variant === "primary" || variant === "cta" ? (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      ) : null}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && icon}
        {children}
        {variant === "cta" && !icon ? (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        ) : null}
        {icon && iconPosition === "right" && icon}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <Link to={to} className={cn(classes, "group")} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(classes, "group")}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={cn(classes, "group")} {...motionProps} {...rest}>
      {content}
    </motion.button>
  );
};

export default Button;
