import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DailyTasks from "../components/Dashboard/DailyTasks";
import UserProgress from "../components/Dashboard/UserProgress";
import JoinLinks from "../components/Dashboard/JoinLinks";
import Resources from "../components/Dashboard/Resources";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-900">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <DailyTasks />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <UserProgress />
          <JoinLinks />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
