
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import { loadUserInfo } from '../utils/loadUserInfo';

const Navbar = () => {

    // const loginInfo = useSelector((state) => state.auth.loginInfo);
    // console.log('loginInfo = ', loginInfo);
    // console.log('user = ', loginInfo.user);

    // const {user} = loginInfo;

    const user = loadUserInfo();



    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" shadow bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-50">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <Link to={'/'}>
                            <span className="text-3xl font-bold bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient">ALEMENO</span>
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" text-gray-200 hover:text-gray-400 focus:outline-none  focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black opacity-90 mt-4 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col capitalize text-white font-semibold lg:flex lg:pl-16 lg:-mx-4 lg:flex-row lg:items-center lg:justify-center w-10/12 lg:gap-6">
                            <NavLink
                                to={'/cloths'}
                                className={({ isActive }) => isActive ? 'text-base font-bold my-3 bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient' : 'text-base text-white my-3'}
                            >
                                Cloths
                            </NavLink>
                            <NavLink
                                to={'/gadgets'}
                                className={({ isActive }) => isActive ? 'text-base font-bold my-3 bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient' : 'text-base text-white my-3'}
                            >
                                Gadgets
                            </NavLink>
                            <NavLink
                                to={'/toys'}
                                className={({ isActive }) => isActive ? 'text-base font-bold my-3 bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient' : 'text-base text-white my-3'}
                            >
                                Toys
                            </NavLink>
                            <NavLink
                                to={'/furniture'}
                                className={({ isActive }) => isActive ? 'text-base font-bold my-3 bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient' : 'text-base text-white my-3'}
                            >
                                Furniture
                            </NavLink>



                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                            {
                                user ? <Dropdown />
                                    :
                                    <Link to={'/login'} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-r from-orange-500  to-yellow-400 group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Login</span>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
