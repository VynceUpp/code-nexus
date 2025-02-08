import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Code Nexus
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Enhance your coding skills with daily tasks, share your results, and
        join a thriving community of developers. Solve challenges, improve, and
        grow together.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Button onClick={goToRegister}>Get Started</Button>
        <Button variant="secondary" onClick={() => alert("Join Community Clicked")}>
          Join the Community
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
