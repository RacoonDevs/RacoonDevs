// src/utils/motion.js
// Centralized motion system for consistent premium animations

// Soft, premium easing curves
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
};

// Section reveal — fade + y translate
export const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: ease.out },
};

// Stagger container for children
export const staggerContainer = (staggerDelay = 0.08) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.05 },
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  },
});

// Stagger child — used inside staggerContainer
export const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

// Hero headline reveal — word by word
export const heroReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.7,
      ease: ease.out,
    },
  }),
};

// Fade in only
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.6, ease: ease.smooth },
});

// Fade + slide up
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: ease.out },
});

// Card hover lift
export const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: ease.smooth },
  },
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: ease.smooth },
  },
};

// Subtle scale on hover
export const scaleHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};
