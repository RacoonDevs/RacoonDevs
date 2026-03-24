import { cn } from "../../utils/cn";

const DeviceMockup = ({ type = "desktop", children, className }) => {
  if (type === "mobile") {
    return (
      <div
        className={cn(
          "relative rounded-3xl border-2 border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl",
          className,
        )}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-surface-alt rounded-b-xl z-10" />
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-primary/[0.06]">
          <span className="text-[8px] text-txt-3">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-2 rounded-sm bg-primary/10" />
            <div className="w-2 h-2 rounded-sm bg-primary/10" />
          </div>
        </div>
        {/* Screen */}
        <div className="relative">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center py-2">
          <div className="w-24 h-1 rounded-full bg-primary/[0.15]" />
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div
        className={cn(
          "relative rounded-2xl border-2 border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl",
          className,
        )}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-primary/[0.06]">
          <div className="w-2 h-2 rounded-full bg-red-400/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
          <div className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
        <div className="relative">{children}</div>
      </div>
    );
  }

  // Desktop
  return (
    <div
      className={cn(
        "relative rounded-xl border border-primary/[0.12] bg-surface-alt/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/10",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-primary/[0.08]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <div className="ml-3 h-2.5 flex-1 max-w-[200px] bg-primary/[0.06] rounded-md" />
      </div>
      {/* Screen */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default DeviceMockup;
