import { motion } from "framer-motion";
import { MessageSquare, Rocket, TrendingUp, Users } from "lucide-react";

const InformationSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center min-h-screen">
      {/* Introduction */}
      <motion.p
        className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Code Nexus is a dynamic platform for developers to enhance their skills through daily coding challenges. Whether you're into frontend or backend development, Code Nexus provides an interactive space to practice, collaborate, and grow.
      </motion.p>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Rocket className="text-blue-400 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Daily Challenges</h3>
          <p className="text-gray-300 text-center">Receive new coding tasks every day to sharpen your skills.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <MessageSquare className="text-green-400 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Share & Get Feedback</h3>
          <p className="text-gray-300 text-center">Post your solutions in our communities and receive constructive feedback.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <Users className="text-yellow-400 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Connect with Developers</h3>
          <p className="text-gray-300 text-center">Engage with like-minded developers on Telegram, WhatsApp, and Discord.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <TrendingUp className="text-red-400 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Improve & Grow</h3>
          <p className="text-gray-300 text-center">Push yourself, learn new technologies, and grow as a developer.</p>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-3xl font-bold">1</span>
            <p className="text-gray-300">
              <strong>Register on Code Nexus</strong> – Sign up and create your account to start receiving challenges.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-3xl font-bold">2</span>
            <p className="text-gray-300">
              <strong>Receive Daily Challenges</strong> – Get new frontend or backend coding tasks directly from the platform.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-3xl font-bold">3</span>
            <p className="text-gray-300">
              <strong>Complete & Share</strong> – Solve the challenge and share your results in our Telegram, WhatsApp, or Discord groups.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <span className="text-blue-500 text-3xl font-bold">4</span>
            <p className="text-gray-300">
              <strong>Ask & Collaborate</strong> – If you're stuck, ask questions and get help from the community.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InformationSection;
