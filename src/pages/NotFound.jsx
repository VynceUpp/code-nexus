import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Home
      </motion.button>
    </div>
  );
};

export default NotFound;
