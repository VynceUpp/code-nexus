import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleLogin, handleGoogleSignIn, handleGitHubSignIn } from "../../services/authService";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    const result = await handleLogin(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.error);
    } else {
      navigate("/dashboard"); // Redirect after successful login
    }
  };

  const signInWithGoogle = async () => {
    const result = await handleGoogleSignIn();
    if (!result.success) setError(result.error);
    else navigate("/dashboard"); // Redirect
  };

  const signInWithGitHub = async () => {
    const result = await handleGitHubSignIn();
    if (!result.success) setError(result.error);
    else navigate("/dashboard"); // Redirect
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl text-white flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section - Email/Password Login */}
        <div className="w-1/2 pr-6 border-r border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-10 right-4 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </div>

        {/* Right Section - Social Logins */}
        <div className="w-1/2 pl-6 flex flex-col items-center justify-center">
          <p className="text-gray-400 mb-4">Or sign in with</p>
          <button
            onClick={signInWithGoogle}
            className="bg-white text-black px-6 py-2 mb-3 rounded-md flex items-center gap-2 hover:bg-gray-300 w-full text-center justify-center"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
          <button
            onClick={signInWithGitHub}
            className="bg-gray-800 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-700 w-full text-center justify-center"
          >
            <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
