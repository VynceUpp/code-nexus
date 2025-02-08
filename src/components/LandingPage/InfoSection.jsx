import { motion } from "framer-motion";

const InformationSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white text-center min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Join Code Nexus?
      </motion.h2>
      <motion.p
        className="text-lg max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Access daily coding tasks  
        🏆 Share results & get feedback  
        🤝 Join a supportive developer community  
        🔥 Improve skills & grow together  
      </motion.p>
    </section>
  );
};

export default InformationSection;
