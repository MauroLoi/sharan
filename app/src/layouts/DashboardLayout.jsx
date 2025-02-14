import { Outlet } from "react-router-dom"
import Navbar from "../components/app/Navbar"
import Sidebar from "../components/app/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="bg-slate-100 h-full flex justify-center">
          <div className="max-w-[1320px] w-full pt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout