import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

const SelectableCard = ({
  icon: Icon,
  label,
  description,
  selected,
  onClick,
  className,
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileTap={{ scale: 0.97 }}
    className={cn(
      "relative w-full text-left rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer",
      "glass-panel",
      selected
        ? "border-primary/40 bg-primary/[0.08] shadow-lg shadow-primary/10"
        : "border-white/[0.08] hover:border-primary/20 hover:bg-primary/[0.03]",
      className,
    )}
    role="option"
    aria-selected={selected}
  >
    {selected && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-3 right-3 w-6 h-6 rounded-full gradient-primary flex items-center justify-center"
      >
        <Check className="w-3.5 h-3.5 text-white" />
      </motion.div>
    )}
    <div className="flex items-start gap-4">
      {Icon && (
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
            selected
              ? "bg-primary/20 text-primary"
              : "bg-primary/[0.06] text-txt-2",
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <p
          className={cn(
            "font-semibold transition-colors duration-300",
            selected ? "text-txt" : "text-txt",
          )}
        >
          {label}
        </p>
        {description && (
          <p className="text-sm text-txt-3 mt-0.5">{description}</p>
        )}
      </div>
    </div>
  </motion.button>
);

export default SelectableCard;
