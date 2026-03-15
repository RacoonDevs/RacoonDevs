// src/components/portfolio/PortfolioStats.jsx
import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../utils/motion";
import { portfolioStats } from "../../data/portfolioData";

const colors = [
  { text: "text-primary", bg: "bg-primary/[0.08]", border: "border-primary/[0.15]" },
  { text: "text-secondary", bg: "bg-secondary/[0.08]", border: "border-secondary/[0.15]" },
  { text: "text-accent", bg: "bg-accent/[0.08]", border: "border-accent/[0.15]" },
  { text: "text-emerald-500", bg: "bg-emerald-500/[0.08]", border: "border-emerald-500/[0.15]" },
];

const PortfolioStats = () => {
  return (
    <section className="py-10 sm:py-14 border-t border-primary/[0.08]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            {...staggerContainer(0.1)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {portfolioStats.map((stat, i) => {
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={stat.label}
                  variants={staggerChild}
                  className={`rounded-xl p-5 ${color.bg} border ${color.border} text-center`}
                >
                  <div className={`text-3xl sm:text-4xl font-bold ${color.text} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-txt-3">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
