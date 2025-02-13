import { Github, MessageCircle, HelpCircle, Shield, Users, Send, MessageSquare, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Brand Name & Tagline */}
        <p className="text-lg font-semibold">Code Nexus</p>
        <p className="text-gray-400 mt-2">
          Daily coding challenges | Developer communities | Improve & grow
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mt-4 text-gray-300 text-sm flex-wrap">
          <a href="/about" className="flex items-center gap-1 hover:text-white">
            <Users size={16} /> About
          </a>
          <a href="/contact" className="flex items-center gap-1 hover:text-white">
            <MessageCircle size={16} /> Contact
          </a>
          <a href="/faq" className="flex items-center gap-1 hover:text-white">
            <HelpCircle size={16} /> FAQ
          </a>
          <a href="/privacy" className="flex items-center gap-1 hover:text-white">
            <Shield size={16} /> Privacy Policy
          </a>
        </div>

        {/* Community Links with Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://t.me/codenexus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Send size={18} /> Telegram
          </a>
          <a
            href="https://discord.gg/codenexus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <MessageSquare size={18} /> Discord
          </a>
          <a
            href="https://wa.me/codenexus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Phone size={18} /> WhatsApp
          </a>
        </div>

        {/* GitHub Repo */}
        <div className="mt-6">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm"
          >
            <Github size={18} /> View on GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Code Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
