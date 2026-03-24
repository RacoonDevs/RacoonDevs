import { motion } from "framer-motion";
import { ease } from "../../utils/motion";

const SectionBadge = ({ children }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-5"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: ease.out }}
  >
    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    <span className="text-xs sm:text-sm tracking-[0.15em] uppercase text-primary font-medium">
      {children}
    </span>
  </motion.div>
);

export default SectionBadge;
