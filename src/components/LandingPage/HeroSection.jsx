import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const codingLogos = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Python", color: "#3776AB" },
  { name: "HTML", color: "#E44D26" },
  { name: "CSS", color: "#1572B6" },
  { name: "Node.js", color: "#83CD29" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "C++", color: "#00599C" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Floating Background Icons */}
      {codingLogos.map((logo, index) => (
        <motion.span
          key={index}
          className="absolute text-6xl font-bold opacity-20"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            color: logo.color,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.08,
            scale: 1,
            x: ["0%", "5%", "-5%", "0%"], 
            y: ["0%", "-5%", "5%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {logo.name}
        </motion.span>
      ))}

      {/* Main Content */}
      <motion.h1
        className="text-5xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-blue-400">Code Nexus</span>
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl mb-8 relative z-10 text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Enhance your coding skills with daily tasks, share your results, and
        join a thriving community of developers. Solve challenges, improve, and
        grow together.
      </motion.p>
      <motion.div
        className="flex gap-4 relative z-10"
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
