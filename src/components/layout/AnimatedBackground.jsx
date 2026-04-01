const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-surface" />

    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-300/25 via-purple-200/20 to-indigo-200/15 blur-3xl dark:from-violet-900/15 dark:via-purple-900/10 dark:to-indigo-900/10" />
    <div className="absolute bottom-[-15%] left-[-15%] w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-cyan-200/25 via-teal-100/20 to-blue-200/15 blur-3xl dark:from-cyan-900/12 dark:via-teal-900/10 dark:to-blue-900/8" />
    <div className="absolute top-[25%] left-[45%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-100/20 via-rose-100/15 to-pink-200/10 blur-3xl dark:from-orange-900/8 dark:via-rose-900/6 dark:to-pink-900/5" />
    <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-100/15 to-cyan-100/10 blur-3xl dark:from-emerald-900/8 dark:to-cyan-900/5" />

    <div className="absolute inset-0 opacity-[0.018] animate-grain" />

    <div
      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgb(var(--primary-rgb) / 0.15) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export default AnimatedBackground;
