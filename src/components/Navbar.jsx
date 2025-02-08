import { User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Define readable page names based on the route path
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/tasks": "Daily Tasks",
    "/profile": "Profile",
    "/resources": "Resources",
    "/join": "Join Us",
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold">{pageTitles[location.pathname] || "Dashboard"}</h2>
      <Link to="/profile">
        <User size={24} className="cursor-pointer hover:text-gray-400 transition" />
      </Link>
    </div>
  );
};

export default Navbar;
