import { motion } from "framer-motion";
import { portfolioStats } from "../../data/portfolioData";

const PortfolioStats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-ink/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-semibold text-txt mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-txt/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
