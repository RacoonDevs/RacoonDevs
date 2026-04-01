import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialCard from "../components/ui/TestimonialCard";
import Button from "../components/ui/Button";
import { staggerContainer, staggerChild } from "../utils/motion";
import { seoConfig } from "../data/seoData";
import { testimonials } from "../data/testimonialsData";

const TestimonialsPage = () => (
  <PageLayout>
    <SEOHead {...seoConfig.testimonials} />

    <SectionWrapper id="testimoniales">
      <SectionHeading
        as="h1"
        badge="Testimoniales"
        title="Lo que dicen nuestros clientes en Puerto Vallarta"
        gradient="Puerto Vallarta"
        subtitle="Cada proyecto es una historia de transformación. Estas son las palabras de quienes confiaron en nosotros para crear sus páginas web, apps y sistemas."
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        {...staggerContainer(0.1)}
      >
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={staggerChild}>
            <TestimonialCard {...t} featured={i === 0} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-txt-2 text-lg mb-6">
          ¿Listo para ser el próximo caso de éxito?
        </p>
        <Button variant="cta" to="/cuentanos-tu-idea">
          Iniciar un Proyecto
        </Button>
      </motion.div>
    </SectionWrapper>
  </PageLayout>
);

export default TestimonialsPage;
