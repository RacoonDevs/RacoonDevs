import { motion } from "framer-motion";
import { ease } from "../../utils/motion";

const stepVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: ease.out },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.25, ease: ease.inOut },
  }),
};

const WizardStep = ({ children, direction }) => (
  <motion.div
    custom={direction}
    variants={stepVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="w-full"
  >
    {children}
  </motion.div>
);

export default WizardStep;
