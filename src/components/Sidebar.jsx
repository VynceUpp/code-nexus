import { useState } from "react";
import {
  Menu,
  Home,
  CheckCircle,
  User,
  BookOpen,
  MessageCircle,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { handleLogout } from "../services/authService";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Daily Tasks", icon: <CheckCircle size={20} />, path: "/tasks" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Resources", icon: <BookOpen size={20} />, path: "/resources" },
    { name: "Join Us", icon: <MessageCircle size={20} />, path: "/join" },
  ];

  const logout = async () => {
    const result = await handleLogout();
    if (result.success) {
      navigate("/login"); // Redirect to login after logout
    } else {
      console.error("Logout failed:", result.error);
    }
  };

  return (
    <div
      className={clsx(
        "h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col",
        isOpen ? "w-60" : "w-16"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <h2 className="text-xl font-bold">Code Nexus</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>

      <nav className="mt-6 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={clsx(
              "flex items-center gap-4 p-3 text-md rounded-md transition-all duration-200 hover:bg-gray-700",
              selected === item.name.toLowerCase() && "bg-gray-700"
            )}
            onClick={() => setSelected(item.name.toLowerCase())}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </Link>
        ))}
        {/* Logout Button */}
      <button
        onClick={logout}
        className="flex items-center gap-3 w-full mt-4 p-2 text-red-500 hover:bg-gray-700 rounded-md"
      >
        <LogOut size={20} />
        {isOpen && <span>Logout</span>}
      </button>
      </nav>
      
      {/* User Profile at Bottom */}
      <div className="border-t border-gray-600 p-4">
        <div
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md"
          onClick={() => navigate("/profile")}
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          {isOpen && <span>John Doe</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
