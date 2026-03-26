import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { CURRENCIES, getCurrencyInfo } from "../../hooks/useCurrency";
import { ease } from "../../utils/motion";

const CurrencySelector = ({ currency, onSelect, className }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const info = getCurrencyInfo(currency);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass-panel border border-white/[0.08] hover:border-primary/20 text-sm font-medium text-txt-2 hover:text-txt transition-all duration-200 cursor-pointer"
      >
        <span className="text-base leading-none">{info.flag}</span>
        <span>{info.code}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: ease.out }}
            className="absolute right-0 top-full mt-2 z-50 w-56 rounded-xl bg-white dark:bg-[#111128] border border-white/[0.08] shadow-xl shadow-black/20 overflow-hidden"
          >
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  onSelect(c.code);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer text-left",
                  c.code === currency
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-txt-2 hover:bg-primary/[0.05] hover:text-txt",
                )}
              >
                <span className="text-base leading-none">{c.flag}</span>
                <span className="font-medium">{c.code}</span>
                <span className="text-txt-3 text-xs truncate">{c.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrencySelector;
