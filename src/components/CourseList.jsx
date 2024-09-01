import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, updateCourseLikes } from '../features/coursesSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillLike } from "react-icons/ai";


const CourseList = () => {

    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.list);
    const status = useSelector((state) => state.courses.status);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchCourses(searchTerm));
    }, [dispatch, searchTerm]);

    const handleLike = (courseId) => {
        dispatch(updateCourseLikes(courseId));
        dispatch(fetchCourses(searchTerm));
    };


    return (
        <div className=" text-gray-900">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle lg:col-span-6 ">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">Empower Your Tech Journey with ALEMENO</h1>

                        <p className="mt-6 text-gray-500 ">
                        Dive into our expertly crafted courses and unlock the skills you need to thrive in the digital world.
                        </p>

                        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md border-gray-700  focus-within:ring focus-within:ring-orange-300 focus-within:border-orange-300 focus-within:ring-opacity-40">
                            <form
                                onChange={e => setSearchTerm(e.target.value)}
                                className="flex flex-col md:flex-row">
                                <input type="text" placeholder="Search course..." className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300  h-screen overflow-y-auto">
                    {
                        courses.map(course => (
                            <div key={course._id} className="pt-6 pb-4 space-y-2">
                                <span className='py-1 px-2 rounded-md bg-green-400 text-white font-semibold'>{course?.location}</span>
                                <h1 className="text-3xl font-bold">{course?.name}</h1>
                                <div className='flex items-center gap-3'>
                                    <img src={course?.instructorImg} className='w-10 h-10 rounded-full' alt="" />
                                    <p className='font-semibold'>{course?.instructor}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Link to={`/course/${course._id}`} rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-orange-600">
                                        <span>Details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                    <div className='flex'>
                                        <span className='border rounded-md px-2 py-1 border-orange-500 text-orange-600 font-semibold'>{course?.likes}</span>
                                        <button className='border py-1 px-2 rounded-md bg-orange-400' onClick={() => handleLike(course._id)}><AiFillLike className='text-white text-lg' /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default CourseList;