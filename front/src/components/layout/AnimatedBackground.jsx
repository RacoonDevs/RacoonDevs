// src/components/layout/AnimatedBackground.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const containerRef = useRef(null);

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

      {/* Colorful mesh gradients - Light mode */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-300/25 via-purple-200/20 to-indigo-200/15 blur-3xl dark:from-violet-900/15 dark:via-purple-900/10 dark:to-indigo-900/10 transition-all duration-700" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-teal-100/20 to-blue-200/15 blur-3xl dark:from-cyan-900/12 dark:via-teal-900/10 dark:to-blue-900/8 transition-all duration-700" />
      <div className="absolute top-[25%] left-[45%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-100/20 via-rose-100/15 to-pink-200/10 blur-3xl dark:from-orange-900/8 dark:via-rose-900/6 dark:to-pink-900/5 transition-all duration-700" />
      <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-100/15 to-cyan-100/10 blur-3xl dark:from-emerald-900/8 dark:to-cyan-900/5 transition-all duration-700" />

      {/* Animated noise / grain */}
      <div className="absolute inset-0 opacity-[0.018] animate-grain" />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(var(--primary-rgb) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Primary glow — follows cursor */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--primary-rgb) / 0.08) 0%, rgba(var(--secondary-rgb) / 0.04) 40%, transparent 70%)",
          x: smoothX,
          y: smoothY,
          left: "-250px",
          top: "-250px",
        }}
        animate={{
          left: `calc(${mousePos.x * 100}% - 250px)`,
          top: `calc(${mousePos.y * 100}% - 250px)`,
        }}
        transition={{ duration: 0 }}
      />

      {/* Ambient orb 1 — violet drift top-right */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--primary-rgb) / 0.06) 0%, transparent 60%)",
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

      {/* Ambient orb 2 — cyan drift bottom-left */}
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--secondary-rgb) / 0.05) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 15, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient orb 3 — warm accent drift center */}
      <motion.div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--accent-rgb) / 0.03) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
