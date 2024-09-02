import Swal from "sweetalert2";
import img from '../../../assets/placeholderImg.jpg';
import axios from "axios";
import { loadUserInfo } from "../../../utils/loadUserInfo";
import { imageUpload } from "../../../utils/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../../../features/userSlice";

const UserProfile = () => {

    
    const storedUser = loadUserInfo(); 

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        dispatch(fetchUser(storedUser.email))
    }, [])
    
console.log('user = ', user);

    // Image Update
    const handelImage = async (image) => {
        console.log('Image =', image);

        const imageURL = await imageUpload(image)

        console.log('URL = ', imageURL);

        if (imageURL) {

            try {
                const { data } = await axios.put(`https://alemeno-course-server.vercel.app/users/image/${storedUser?.email}`, { imageURL })

                console.log(data);

                if (data.modifiedCount) {
                    dispatch(fetchUser(storedUser?.email))

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Image Update Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });


                    // updateUserProfile(user.displayName, imageURL)
                }
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <section className="bg-white">
            
            <div className="  mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                    Hello, {user?.firstName}
                </h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-slate-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-slate-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-slate-500 rounded-full"></span>
                </div>

                <div className="mt-8 xl:mt-12 lg:flex lg:flex-row-reverse lg:items-center space-y-4">
                    <div className=" lg:flex lg:w-1/2 lg:justify-center" data-aos="flip-right">
                        <img
                            className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[30rem] xl:h-[30rem] rounded-full"
                            src={user?.image ? user?.image : img}
                        />
                    </div>
                    <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2" data-aos="fade-up">
                        {/* Mum */}
                        <div className=" flex flex-col p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                            <h2 className="text-2xl font-semibold">Your Information</h2>
                            <ul className="flex flex-col pt-4 space-y-2">
                                <li className="flex items-start justify-between">
                                    <h3>Name : {user?.firstName} {user?.lastName}</h3>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>Email : {user?.email}</h3>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>Phone : {user?.phone}</h3>
                                </li>
                            </ul>
                            <div className="pt-4 space-y-2">
                                <li className="flex items-start justify-between">
                                    <h3>Role : User</h3>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>User ID : {user?._id}</h3>
                                </li>
                            </div>
                            <div className="pt-4 space-y-2">
                                <li className="flex items-start justify-between">
                                    <h3>Total Enrolled : <span className="uppercase">{user?.enrolled}</span></h3>
                                </li>
                            </div>

                            <div className="pt-4 space-y-2">
                                <div className="space-y-6">

                                    <div>
                                        {/* <label htmlFor="file" className="block text-sm text-gray-500 dark:text-gray-300">File</label> */}

                                        <label
                                            htmlFor="dropzone-file"
                                            className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer  dark:border-gray-700 rounded-xl"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                />
                                            </svg>

                                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">Upload Image</h2>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                name='image'
                                                onChange={(e) => handelImage(e.target.files[0])}
                                                accept="image/*"
                                                className="hidden" />
                                        </label>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default UserProfile;