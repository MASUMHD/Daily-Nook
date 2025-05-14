import { useState } from "react";
import DasNavbar from "./DasComponents/DasNavbar";
import Sidebar from "./DasComponents/Sidebar";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Backdrop for small devices */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 min-h-screen bg-gray-50">
        <DasNavbar toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
