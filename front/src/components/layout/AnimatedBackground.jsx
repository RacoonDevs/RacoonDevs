// src/components/layout/AnimatedBackground.jsx

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle noise texture via CSS */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-white/[0.015] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
