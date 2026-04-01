import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionBadge from "../ui/SectionBadge";
import { ease } from "../../utils/motion";
import { testimonials } from "../../data/testimonialsData";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonios">
      <div className="max-w-3xl mx-auto text-center">
        <SectionBadge>Testimonios</SectionBadge>

        {/* Large decorative quote mark */}
        <div
          aria-hidden="true"
          className="text-8xl sm:text-9xl font-serif text-primary/10 leading-none select-none mt-4"
        >
          &ldquo;
        </div>

        {/* Animated quote */}
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: ease.out }}
            className="text-xl sm:text-2xl text-txt leading-relaxed italic -mt-4"
          >
            {t.quote}
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
          >
            <p className="font-semibold text-txt">{t.name}</p>
            {t.company && (
              <p className="text-sm text-primary/70 mt-0.5">{t.company}</p>
            )}
            <p className="text-sm text-txt-3 mt-0.5">{t.project}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigator */}
        <div
          className="flex justify-center items-center gap-2 mt-8"
          role="tablist"
          aria-label="Testimonios"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonio ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/20 hover:bg-primary/40",
              ].join(" ")}
            />
          ))}
        </div>

        {/* "Ver todos" link */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/testimoniales"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Ver todos los testimonios
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
