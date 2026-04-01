import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import GradientOrb from "../ui/GradientOrb";
import { ease } from "../../utils/motion";
import { WHATSAPP_URL } from "../../utils/constants";

const FinalCTASection = () => (
  <SectionWrapper id="cta-final" noBorder className="relative overflow-hidden">
    {/* Gradient mesh background */}
    <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />

    {/* Decorative Orbs */}
    <GradientOrb color="primary" size={500} className="-top-40 -left-40" />
    <GradientOrb
      color="secondary"
      size={400}
      className="-bottom-32 -right-32"
    />
    <GradientOrb
      color="accent"
      size={300}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />

    <div className="relative z-10 text-center max-w-3xl mx-auto py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: ease.out }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/[0.15] text-sm text-primary font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Tu siguiente paso
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-display)] text-txt leading-tight mb-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: ease.out, delay: 0.1 }}
      >
        ¿Listo para llevar tu negocio al{" "}
        <span className="gradient-text">siguiente nivel</span>?
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-txt-2 leading-relaxed max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: ease.out, delay: 0.2 }}
      >
        Hablemos sobre tu proyecto. Te ayudamos a crear la solución digital que
        tu negocio necesita para crecer y destacar.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: ease.out, delay: 0.35 }}
      >
        {/* WhatsApp — primary CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-semibold text-base transition-colors shadow-lg shadow-emerald-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <MessageCircle className="w-5 h-5" />
          Hablar por WhatsApp
        </a>
        <Button variant="cta" to="/cuentanos-tu-idea">
          Iniciar un Proyecto
        </Button>
        <Button variant="outline" to="/portafolio" size="lg">
          Ver Portafolio
        </Button>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FinalCTASection;
