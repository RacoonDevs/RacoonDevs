import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "../../utils/cn";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";
import { services } from "../../data/servicesData";

/* ─── Tilt card hook ─── */
const useTilt = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

/* ─── Single service card ─── */
const ServiceCard = ({ service, featured = false }) => {
  const Icon = service.icon;
  const tilt = useTilt();

  return (
    <motion.article
      variants={staggerChild}
      className={cn("h-full group", featured && "md:col-span-2")}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div
        className={cn(
          "relative h-full glass-panel rounded-2xl border border-primary/[0.08] overflow-hidden transition-all duration-500",
          "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.08]",
          featured ? "p-8 sm:p-10" : "p-6 sm:p-8",
        )}
      >
        {/* Gradient background reveal on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            `bg-gradient-to-br ${service.bgTint}`,
          )}
        />

        <div
          className={cn(
            "relative z-10",
            featured && "flex flex-col sm:flex-row gap-8 items-start",
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              "flex-shrink-0 rounded-xl flex items-center justify-center mb-5",
              featured ? "w-14 h-14 sm:mb-0" : "w-12 h-12",
              `bg-gradient-to-br ${service.gradient}`,
            )}
          >
            <Icon
              className={cn("text-white", featured ? "w-7 h-7" : "w-6 h-6")}
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3
              className={cn(
                "font-bold font-[family-name:var(--font-display)] text-txt mb-3 leading-tight",
                featured ? "text-2xl sm:text-3xl" : "text-xl",
              )}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={cn(
                "text-txt-2 leading-relaxed mb-5",
                featured ? "text-base sm:text-lg" : "text-sm sm:text-base",
              )}
            >
              {service.description}
            </p>

            {/* Features tags */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="px-2.5 py-1 rounded-lg bg-primary/[0.06] border border-primary/[0.1] text-xs text-txt-2 font-medium"
                >
                  {f}
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link
              to="/servicios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
              aria-label={`Ver detalles de ${service.title}`}
            >
              <span>Ver detalles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   HOME SERVICES SECTION — compact bento for landing
   ═══════════════════════════════════════════════════════════════════ */
const HomeServicesSection = () => {
  const topServices = services.filter((s) => s.featured); // Software + UI/UX
  const thirdService = services.find((s) => s.id === "landing");

  return (
    <SectionWrapper id="servicios">
      <SectionHeading
        badge="Servicios"
        title="Diseño web y marketing para tu negocio"
        gradient="marketing"
        subtitle="Diseño y desarrollo a la medida en Puerto Vallarta — sin atajos, sin plantillas genéricas."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        {...staggerContainer(0.1)}
      >
        {/* Top two cards — equal width */}
        {topServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        {/* Third card — full width / featured treatment */}
        {thirdService && <ServiceCard service={thirdService} featured />}
      </motion.div>

      {/* CTA — see all services */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.4 }}
      >
        <Link
          to="/servicios"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-primary/[0.1] hover:border-primary/25 text-sm font-semibold text-txt hover:text-primary transition-all duration-300"
        >
          Explorar todos los servicios
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
};

export default HomeServicesSection;
