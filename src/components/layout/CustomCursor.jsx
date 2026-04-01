import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  /* Outer ring: slow, elastic follow */
  const ringSpringX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const ringSpringY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  /* Inner dot: fast, snappy follow */
  const dotSpringX = useSpring(mouseX, { stiffness: 700, damping: 32 });
  const dotSpringY = useSpring(mouseY, { stiffness: 700, damping: 32 });

  /* Center the cursor elements (ring = 36px, dot = 8px) */
  const ringX = useTransform(ringSpringX, (v) => v - 18);
  const ringY = useTransform(ringSpringY, (v) => v - 18);
  const dotX = useTransform(dotSpringX, (v) => v - 4);
  const dotY = useTransform(dotSpringY, (v) => v - 4);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch || window.innerWidth < 1024) return;

    /* Activate cursor-none globally */
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e) => {
      setHovering(
        !!e.target.closest(
          "button, a, [role='button'], input, textarea, select, label",
        ),
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring — slow spring, scales up on hover */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-primary/50 pointer-events-none z-[9999] hidden lg:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.9 : 1,
          opacity: visible ? (hovering ? 1 : 0.65) : 0,
        }}
        transition={{
          scale: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 },
        }}
      />

      {/* Inner dot — fast spring, disappears on hover */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden lg:block"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
