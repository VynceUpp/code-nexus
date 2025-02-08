import ProfileAvatar from "../components/Profile/ProfileAvatar";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileActions from "../components/Profile/ProfileActions";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-900">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <ProfileAvatar />
        <div className="flex-1 max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
          <ProfileInfo />
          <ProfileActions />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
