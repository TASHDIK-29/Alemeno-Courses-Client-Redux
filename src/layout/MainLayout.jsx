import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="h-20"></div>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;