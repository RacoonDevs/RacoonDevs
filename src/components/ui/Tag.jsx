import { cn } from "../../utils/cn";

const variantStyles = {
  primary: "bg-primary/[0.1] text-primary border-primary/[0.15]",
  secondary: "bg-secondary/[0.1] text-secondary border-secondary/[0.15]",
  accent: "bg-accent/[0.1] text-accent border-accent/[0.15]",
  neutral: "bg-txt-3/[0.08] text-txt-3 border-txt-3/[0.1]",
};

const Tag = ({ children, variant = "primary", className }) => (
  <span
    className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </span>
);

export default Tag;
