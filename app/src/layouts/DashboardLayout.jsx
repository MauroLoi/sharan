import { Outlet } from "react-router-dom"
import Navbar from "../components/app/Navbar"
import Sidebar from "../components/app/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout