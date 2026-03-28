import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import { cn } from "../utils/cn";
import { ease, staggerContainer, staggerChild } from "../utils/motion";
import { services } from "../data/servicesData";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const ServiceCard = ({ service, large = false }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div variants={staggerChild}>
      <GlassCard
        className={cn(
          "relative overflow-hidden group h-full",
          large ? "p-7 sm:p-8" : "p-5 sm:p-6",
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            `bg-gradient-to-br ${service.gradient}`,
          )}
          style={{ opacity: hovered ? 0.04 : 0 }}
        />

        <div
          className={cn(
            "flex items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
            service.gradient,
            large ? "w-14 h-14 mb-5" : "w-11 h-11 mb-4",
          )}
        >
          <Icon className={cn("text-white", large ? "w-6 h-6" : "w-5 h-5")} />
        </div>

        <h3
          className={cn(
            "font-bold font-[family-name:var(--font-display)] text-txt",
            large ? "text-xl sm:text-2xl mb-3" : "text-lg mb-2",
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "text-txt-2 leading-relaxed",
            large ? "text-base" : "text-sm",
          )}
        >
          {service.description}
        </p>

        <ul className={cn("space-y-1.5", large ? "mt-5" : "mt-4")}>
          {service.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2 text-sm text-txt-2"
            >
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
};

const ServicesPage = () => {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <PageLayout>
      <SEOHead
        title="Servicios | Racoon Devs"
        description="Servicios de desarrollo web, diseño UI/UX, apps móviles, eCommerce, dashboards e integraciones."
        canonical="https://racoondevs.com/servicios"
      />

      {/* Hero */}
      <section className="relative pt-8 sm:pt-12 pb-20 sm:pb-24 lg:pb-32">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-6"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: ease.out }}
              >
                <span className="text-sm tracking-widest uppercase text-primary font-medium">
                  Servicios
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-txt leading-tight mb-6">
                Todo lo que necesitas para{" "}
                <span className="gradient-text">
                  dominar tu presencia digital.
                </span>
              </h1>
              <p className="text-txt-2 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Desde landing pages hasta plataformas completas. Diseñamos,
                desarrollamos y optimizamos productos digitales que impulsan tu
                negocio.
              </p>
              <Link
                to="/cuentanos-tu-idea"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-full font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              >
                Iniciar un Proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <SectionWrapper noBorder>
        <SectionHeading
          badge="Nuestros Servicios"
          title="Soluciones digitales para cada necesidad"
          gradient="cada necesidad"
          subtitle="Cada servicio está respaldado por un equipo multidisciplinario que combina diseño, ingeniería y estrategia."
        />

        {/* Featured row — 2 large cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5"
          {...staggerContainer(0.12)}
        >
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} large />
          ))}
        </motion.div>

        {/* Remaining services — 3-col grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          {...staggerContainer(0.08)}
        >
          {rest.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-32 border-t border-primary/[0.06]">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: ease.out }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-txt-2 text-lg mb-8 max-w-lg mx-auto">
                Cuéntanos tu idea y diseñamos la solución perfecta para tu
                negocio.
              </p>
              <Link
                to="/cuentanos-tu-idea"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white rounded-full font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              >
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
