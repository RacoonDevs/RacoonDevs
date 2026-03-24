import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { staggerContainer, staggerChild } from "../../utils/motion";
import { testimonials } from "../../data/testimonialsData";

const TestimonialsSection = () => {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <SectionWrapper id="testimonios">
      <SectionHeading
        badge="Testimonios"
        title="Lo que dicen nuestros clientes"
        gradient="clientes"
        subtitle="La mejor prueba de nuestro trabajo son las palabras de quienes ya confiaron en nosotros."
      />

      {/* Featured Testimonial */}
      {featured && (
        <motion.div
          className="max-w-3xl mx-auto mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <TestimonialCard
            quote={featured.quote}
            name={featured.name}
            company={featured.company}
            project={featured.project}
            featured
          />
        </motion.div>
      )}

      {/* Remaining Testimonials */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        {...staggerContainer(0.08)}
      >
        {rest.map((testimonial) => (
          <motion.div key={testimonial.name} variants={staggerChild}>
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              project={testimonial.project}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
