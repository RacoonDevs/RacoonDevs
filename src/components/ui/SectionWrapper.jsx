import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";

const SectionWrapper = ({ id, children, className, noPadding, noBorder }) => (
  <motion.section
    id={id}
    className={cn(
      !noPadding && "py-20 sm:py-24 lg:py-32",
      !noBorder && "border-t border-primary/[0.06]",
      "relative",
      className,
    )}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.7, ease: ease.out }}
  >
    <div className="relative z-10 w-full flex justify-center">
      <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">{children}</div>
    </div>
  </motion.section>
);

export default SectionWrapper;
