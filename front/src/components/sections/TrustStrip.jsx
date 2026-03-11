import { motion } from "framer-motion";
import { ease } from "../../utils/motion";

const capabilities = [
  "Software a la Medida",
  "Aplicaciones Web Escalables",
  "eCommerce",
  "Landing Pages",
  "Dashboards & Paneles",
  "Sistemas Internos",
  "Plataformas Mobile-First",
  "Integraciones & APIs",
];

const TrustStrip = () => {
  return (
    <section className="relative py-12 sm:py-16 border-y border-white/5">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.p
            className="text-center text-gray-500 text-sm tracking-widest uppercase mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            Lo que construimos
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 },
              },
            }}
          >
            {capabilities.map((item) => (
              <motion.span
                key={item}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-gray-300 text-sm sm:text-base font-medium hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: ease.out },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
