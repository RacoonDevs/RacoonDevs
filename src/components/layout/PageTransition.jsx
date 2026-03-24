import { motion } from "framer-motion";
import { pageTransition } from "../../utils/motion";

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default PageTransition;
