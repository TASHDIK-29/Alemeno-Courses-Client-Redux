import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo } from "../../utils/loadUserInfo";
import { useEffect } from "react";
import { fetchEnrolledCourses } from "../../features/dashboardSlice";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import Swal from "sweetalert2";
import axios from "axios";

const EnrollCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.dashboard.enrolledCourses);
    const user = loadUserInfo();

    useEffect(() => {
        dispatch(fetchEnrolledCourses(user.email))
    }, [])

    console.log(courses);

    const handleConfirm = async (id, name) => {
        const res = await axios.patch('http://localhost:5000/courseComplete', { email: user.email, id });

        console.log(res.data);

        if (res.data.modifiedCount) {
            dispatch(fetchEnrolledCourses(user.email))
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Congratulations for successfully complete ${name}`,
                showConfirmButton: false,
                timer: 2500
            });

        } 
    }

    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Your Enrolled Courses</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                        pie.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    {
                        courses.map(course => (
                            <div key={course._id} >
                                <div>
                                    <div className="relative">
                                        <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div className="absolute bottom-0 flex p-3 bg-white  ">
                                            <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                            <div className="mx-4">
                                                <h1 className="text-sm text-gray-700 ">{course?.instructor}</h1>
                                                <p className="text-sm text-gray-500 ">Creative Director</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="mt-6 text-xl font-semibold text-gray-800">
                                        {course?.name}
                                    </h1>

                                    <hr className="w-32 my-6 text-blue-500" />

                                    {
                                        course.state === 'on-going' ?
                                            <ProgressBar completed={60} className="" /> :
                                            <ProgressBar completed={100} className="" />
                                    }
                                    {
                                        course.state === 'on-going' ?
                                            <button onClick={() => handleConfirm(course._id, course.name)} className="w-full py-1 px-2 text-blue-500 font-semibold border border-blue-500 mt-2">Complete</button> : ''
                                    }

                                    <Link to={`/course/${course._id}`} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Detail</Link>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default EnrollCourses;