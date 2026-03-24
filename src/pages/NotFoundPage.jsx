import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import SEOHead from "../components/seo/SEOHead";
import Button from "../components/ui/Button";
import { ease } from "../utils/motion";

const NotFoundPage = () => (
  <PageLayout>
    <SEOHead
      title="404 — Página no encontrada | Racoon Devs"
      description="La página que buscas no existe o ha sido movida."
    />
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-[8rem] sm:text-[12rem] font-bold font-[family-name:var(--font-display)] gradient-text leading-none mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: ease.out }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl text-txt-2 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: ease.out }}
      >
        Página no encontrada
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: ease.out }}
      >
        <Button variant="primary" to="/" size="lg">
          Volver al Inicio
        </Button>
      </motion.div>
    </div>
  </PageLayout>
);

export default NotFoundPage;
