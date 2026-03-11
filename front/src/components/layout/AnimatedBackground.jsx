// src/components/layout/AnimatedBackground.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const containerRef = useRef(null);

  // Smooth spring-based mouse tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.3);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 30 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-surface" />

      {/* Light-mode color mesh — soft blobs behind glass panels */}
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/20 blur-3xl dark:opacity-0 transition-opacity duration-700" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-indigo-100/25 to-cyan-100/20 blur-3xl dark:opacity-0 transition-opacity duration-700" />
      <div className="absolute top-[30%] left-[50%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-100/20 to-pink-100/15 blur-3xl dark:opacity-0 transition-opacity duration-700" />

      {/* Animated noise / grain */}
      <div className="absolute inset-0 opacity-[0.025] animate-grain" />

      {/* Faint grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--ink-rgb) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--ink-rgb) / 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Primary glow — follows cursor softly */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ink-rgb) / 0.03) 0%, transparent 70%)",
          x: smoothX,
          y: smoothY,
          left: "-300px",
          top: "-300px",
        }}
        animate={{
          left: `calc(${mousePos.x * 100}% - 300px)`,
          top: `calc(${mousePos.y * 100}% - 300px)`,
        }}
        transition={{ duration: 0 }}
      />

      {/* Ambient orb 1 — slow drift top-right */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ink-rgb) / 0.025) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient orb 2 — slow drift bottom-left */}
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ink-rgb) / 0.018) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, -15, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient orb 3 — center drift */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--ink-rgb) / 0.012) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgb(var(--surface-rgb)) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
