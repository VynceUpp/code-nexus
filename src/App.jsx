import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import CommunityPage from "./pages/Community";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default App;
