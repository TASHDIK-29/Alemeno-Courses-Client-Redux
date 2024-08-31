import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="relative md:flex">

            <div>
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 md:ml-64 px-2 md:px-10 py-2">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;