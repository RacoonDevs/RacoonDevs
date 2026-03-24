import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    className={cn(
      "border-b border-primary/[0.06] transition-all duration-300",
      isOpen && "border-l-2 border-l-primary pl-4",
    )}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
    >
      <span
        className={cn(
          "text-base sm:text-lg font-medium transition-colors duration-300",
          isOpen ? "text-txt" : "text-txt-2 group-hover:text-txt",
        )}
      >
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: ease.smooth }}
        className="flex-shrink-0 ml-4"
      >
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-colors",
            isOpen ? "text-primary" : "text-txt-3",
          )}
        />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: { duration: 0.35, ease: ease.out },
              opacity: { duration: 0.25, delay: 0.1 },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: { duration: 0.3, ease: ease.inOut },
              opacity: { duration: 0.15 },
            },
          }}
          className="overflow-hidden"
        >
          <p className="text-txt-2 text-sm sm:text-base leading-relaxed pb-5">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AccordionItem;
