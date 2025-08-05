// src/components/ui/StatCard.jsx
import { motion } from "framer-motion";

const StatCard = ({ stat, index, delay }) => {
  return (
    <motion.div
      className="text-center group p-6 sm:p-8 rounded-xl hover:bg-white/5 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-cyan-400" />
      </div>
      <div className="text-2xl sm:text-3xl lg:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3">
        {stat.number}
      </div>
      <div className="text-gray-400 font-medium text-sm sm:text-base lg:text-base">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default StatCard;
