import { Link, NavLink } from "react-router-dom";
import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaSearch, FaStar, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import { FaBookJournalWhills, FaMoneyBill, FaSpoon } from "react-icons/fa6";
import { MdOutlineRestaurantMenu, MdPhone } from "react-icons/md";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { IoIosStats } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { MdReviews } from "react-icons/md";


const Sidebar = () => {


    // Responsive
    const [isActive, setActive] = useState(true)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <h1 className="flex items-center gap-2 text-2xl text-blue-400 font-semibold">
                                <TbTruckDelivery className="text-3xl text-orange-500" />
                                ALEMENO
                            </h1>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div className={`w-64 min-h-screen h-full bg-blue-500 z-50 md:fixed absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}>
                <ul className="pl-4">
                    
                    <li className="flex items-center gap-2 p-4"><FaList /><NavLink
                        className={({ isActive }) => isActive ? 'text-base text-orange-300 font-bold' : 'text-base dark:text-gray-600 font-bold'}
                        to='/dashboard/allCourses'>Enrolled Courses</NavLink></li>
                    
                    <li className="flex items-center gap-2 p-4"><GrUserWorker /><NavLink
                        className={({ isActive }) => isActive ? 'text-base text-orange-300 font-bold' : 'text-base dark:text-gray-600 font-bold'}
                        to='/dashboard/profile'>User Profile</NavLink></li>

                </ul>
                <hr className="border-white mt-6" />
                <div className="divider p-4"></div>
                <ul className="pl-4">
                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink className='text-base text-gray-600 font-bold' to='/'>Home</NavLink></li>

                </ul>
            </div>
        </>
    );
};

export default Sidebar;