import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className=" bg-gray-900 mt-20">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl text-white">Subscribe our newsletter to get update.</h1>

                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                        <p className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span>Subscribe Now</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </p>
                    </div>
                </div>

                <hr className="my-6 border-gray-600 md:my-10 " />

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    

                    <div>
                        <p className="font-semibold text-white">Catagories</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Cloths</p>
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Gadgets</p>
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Toys</p>
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Furniture</p>
                        </div>
                    </div>

                    <div className=" lg:col-span-1">
                        <p className="font-semibold text-white">Services</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">E-Commerce</a>
                            <a href="#" className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Sells</a>
                            <a href="#" className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Promotion</a>
                            <a href="#" className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500">Marketing</a>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <p className="font-semibold text-white">Contact Us</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <h3 className="text-white text-base">Got questions? Call us 24/7!</h3>
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500 flex items-center gap-4"><MdOutlinePhonelinkRing className="text-lg" /> +880 768 473 4978</p>
                            <p className="text-white text-lg flex items-start gap-4"><RiMapPinLine className="text-2xl" />561 Wellington Road, Street 32, San Francisco</p>
                            <p className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500 flex items-center gap-4"><MdOutlineMarkEmailRead className="text-lg" />support@trixmart.com</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-600 md:my-10 " />

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <h1>
                        <span className="text-3xl font-bold bg-300% bg-gradient-to-r from-orange-500  to-yellow-400 text-transparent bg-clip-text animate-gradient">ALEMENO</span>
                    </h1>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">© Copyright 2021. All Rights Reserved.</p>
                    <div className="flex gap-5 items-center">
                        <button className="rounded-full p-2 bg-slate-300 hover:bg-orange-400"><FaTwitter className="text-2xl text-slate-700 hover:text-blue-500" /></button>
                        <button className="rounded-full p-2 bg-slate-300 hover:bg-orange-400"><FaFacebook className="text-2xl text-slate-700 hover:text-blue-500" /></button>
                        <button className="rounded-full p-2 bg-slate-300 hover:bg-orange-400"><FaInstagram className="text-2xl text-slate-700 hover:text-blue-500" /></button>
                        <button className="rounded-full p-2 bg-slate-300 hover:bg-orange-400"><FaPinterest className="text-2xl text-slate-700 hover:text-blue-500" /></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;