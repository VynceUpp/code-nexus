import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center bg-gray-900 bg-opacity-90 shadow-lg">
      <h1 
        className="text-2xl font-bold text-white cursor-pointer" 
        onClick={() => handleNavigation("/")}
      >
        Code Nexus
      </h1>
      <nav>
        <ul className="flex items-center gap-6 text-white text-md">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Challenges</li>
          <Button variant="secondary" className="text-sm" onClick={() => handleNavigation("/login")}>
            Log In
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
