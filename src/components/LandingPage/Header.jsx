import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Users,
  Send,
  MessageSquare,
  Github,
  LogIn,
  UserPlus,
} from "lucide-react";
import Button from "../ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide flex items-center gap-2"
        >
          <span>Code Nexus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">

          <Link to="/challenges" className="hover:text-white transition">
            Challenges
          </Link>
          <a
            href="https://t.me/codenexus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Send size={16} /> Community
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Github size={16} /> GitHub
          </a>
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            variant="secondary"
            className="flex items-center gap-2 hover:bg-gray-600 transition"
          >
            <LogIn size={14} /> Sign In
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="flex items-center gap-2"
          >
            <UserPlus size={14} /> Register
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden mt-4 flex flex-col bg-gray-800 p-4 rounded-lg items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/challenges" className="py-2 hover:text-white transition">
            Challenges
          </Link>
          <a
            href="https://t.me/codenexus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 py-2 hover:text-white transition"
          >
            <Send size={16} /> Community
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 py-2 hover:text-white transition"
          >
            <Github size={16} /> GitHub
          </a>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 justify-center transition w-full"
          >
            <LogIn size={16} /> Sign In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="mt-2 flex items-center gap-3 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 justify-center transition w-full"
          >
            <UserPlus size={16} /> Register
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
