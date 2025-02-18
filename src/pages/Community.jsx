import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const communityPlatforms = [
  {
    name: "Telegram",
    url: "https://t.me/your-telegram-group",
    description: "Join our Telegram group for quick updates and discussions.",
    icon: "/icons8-telegram-48.png",
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/your-whatsapp-group",
    description: "Stay connected with the community on WhatsApp.",
    icon: "/icons8-whatsapp-48.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/your-instagram-page",
    description: "Follow us on Instagram for insights and updates.",
    icon: "/icons8-instagram-48.png",
  },
  {
    name: "Discord",
    url: "https://discord.gg/your-discord-server",
    description: "Join our Discord server for deeper discussions.",
    icon: "/icons8-discord-48.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-twitter-page",
    description: "Follow us on Twitter for news and updates.",
    icon: "/icons8-twitter-30.png",
  },
];

const CommunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      {/* Back Button & Heading Wrapper */}
      <div className="flex items-center justify-between w-full max-w-4xl mb-6">
        <motion.button
          onClick={() => navigate("/")} // Navigates back to the Landing Page
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-all"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronLeft size={24} />
          <span className="text-lg font-medium">Back</span>
        </motion.button>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center flex-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the Code Nexus Community
        </motion.h1>
      </div>

      {/* Community Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-6xl">
        {communityPlatforms.map((platform, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={platform.icon} alt={platform.name} className="w-12 h-12" />
            <div>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-400 hover:underline"
              >
                {platform.name}
              </a>
              <p className="text-gray-400 text-sm mt-1">{platform.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
