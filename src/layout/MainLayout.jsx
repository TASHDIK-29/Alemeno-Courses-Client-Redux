import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="h-20"></div>
            <div className="p-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;