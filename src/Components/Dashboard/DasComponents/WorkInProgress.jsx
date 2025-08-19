/* eslint-disable no-unused-vars */
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/70 shadow-2xl rounded-3xl p-8 sm:p-12 max-w-xl w-full text-center border border-white/40"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-6 rounded-full shadow-inner">
            <FiSettings className="text-yellow-600 text-6xl animate-spin-slow" />
          </div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800"
        >
          Work in Progress
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed"
        >
          This section is currently under development. <br /> Please check back
          later for exciting updates 🚀
        </motion.p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkInProgress;
