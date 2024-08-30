import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Dropdown = () => {



    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handelLogout = () => {

        navigate('/');
    }

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Dropdown toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 flex items-center p-2 text-sm  border border-transparent rounded-md text-white focus:outline-none bg-gradient-to-r from-orange-500  to-yellow-400"
            >
                <span className="mx-1">Name</span>
                <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className="absolute -right-1/2 lg:right-0 z-20 w-56 py-2 mt-4 overflow-hidden origin-top-right rounded-md shadow-xl bg-white"
                    style={{ transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}
                >
                    <div
                        className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform text-black font-medium hover:bg-gray-300 hover:text-black"
                    >
                        <img
                            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src={''}
                            alt='image'
                        />
                        <div className="mx-1">
                            <h1 className="text-sm font-semibold text-black">Name</h1>
                            <p className="text-sm text-black">Email</p>
                        </div>
                    </div>

                    <hr className="border-gray-400" />

                    <Link
                        to={'/profile'}
                        onClick={() => setIsOpen(!isOpen)}
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-black font-medium hover:bg-gray-300 hover:text-black w-full text-start"
                    >
                        View Profile
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-black font-medium hover:bg-gray-300 hover:text-black w-full text-start"
                    >
                        Cart
                    </button>

                    <Link
                        to={'/orders'}
                        onClick={() => setIsOpen(!isOpen)}
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-black font-medium hover:bg-gray-300 hover:text-black w-full text-start"
                    >
                        Order History
                    </Link>

                    <hr className="border-gray-400" />

                    <button
                        onClick={handelLogout}
                        className=" px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-black font-medium hover:bg-gray-300 hover:text-black w-full text-start flex items-center gap-2"
                    >
                        Sign Out <FaArrowRightFromBracket />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dropdown;