import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";

/* ── Colored screen placeholder for each device ───────────────────── */
const DeviceScreen = ({ gradient, type }) => {
  const heights = {
    desktop: "aspect-video",
    tablet: "aspect-[3/4]",
    mobile: "aspect-[9/16]",
  };

  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br relative overflow-hidden",
        gradient,
        heights[type],
      )}
    >
      {/* Simulated UI content */}
      <div className="absolute inset-0 p-3 sm:p-4 flex flex-col opacity-30">
        {/* Nav */}
        <div className="flex items-center justify-between mb-3">
          <div className="h-2 w-14 bg-white/30 rounded" />
          <div className="flex gap-1.5">
            <div className="h-2 w-8 bg-white/20 rounded" />
            <div className="h-2 w-8 bg-white/20 rounded" />
          </div>
        </div>
        {/* Content blocks */}
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <div className="h-3 w-2/3 bg-white/25 rounded" />
          <div className="h-2 w-1/2 bg-white/15 rounded" />
          <div className="h-5 w-20 bg-white/20 rounded-lg mt-2" />
        </div>
        {/* Cards row */}
        <div className="flex gap-2 mt-auto">
          {[...Array(type === "mobile" ? 2 : 3)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-8 bg-white/10 rounded-md border border-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MultiDeviceSection = () => (
  <SectionWrapper id="multi-device">
    <SectionHeading
      badge="Diseño Responsivo"
      title="Diseñado para cada pantalla"
      gradient="cada pantalla"
    />

    {/* ─── Device Composition ──────────────────────────────────── */}
    <div className="relative flex items-end justify-center mt-4 mb-10 min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
      {/* Desktop — center stage */}
      <motion.div
        className="relative z-10 w-[75%] sm:w-[65%] lg:w-[58%] max-w-[680px]"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: ease.out }}
      >
        <DeviceMockup type="desktop">
          <DeviceScreen
            gradient="from-violet-600 via-purple-500 to-indigo-600"
            type="desktop"
          />
        </DeviceMockup>
      </motion.div>

      {/* Tablet — overlapping right */}
      <motion.div
        className="absolute right-0 sm:right-[2%] lg:right-[6%] bottom-0 z-20 w-[30%] sm:w-[26%] lg:w-[22%] max-w-[260px]"
        initial={{ opacity: 0, x: 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.25, duration: 0.7, ease: ease.out }}
      >
        <DeviceMockup type="tablet">
          <DeviceScreen
            gradient="from-cyan-600 via-blue-500 to-teal-600"
            type="tablet"
          />
        </DeviceMockup>
      </motion.div>

      {/* Phone — overlapping left with float */}
      <motion.div
        className="absolute left-0 sm:left-[2%] lg:left-[8%] bottom-0 z-20 w-[18%] sm:w-[16%] lg:w-[13%] max-w-[155px]"
        initial={{ opacity: 0, x: -40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.45, duration: 0.7, ease: ease.out }}
      >
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <DeviceMockup type="mobile">
            <DeviceScreen
              gradient="from-emerald-600 via-green-500 to-teal-600"
              type="mobile"
            />
          </DeviceMockup>
        </motion.div>
      </motion.div>
    </div>

    {/* Supporting text */}
    <motion.p
      className="text-center text-lg sm:text-xl text-txt-2 leading-relaxed max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6, ease: ease.out }}
    >
      Cada interfaz que creamos está pensada desde el primer pixel para
      funcionar perfectamente en desktop, tablet y móvil.
    </motion.p>
  </SectionWrapper>
);

export default MultiDeviceSection;
