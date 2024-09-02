import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCourseDetails } from '../../features/coursesSlice';
import { loadUserInfo } from '../../utils/loadUserInfo';
import axios from 'axios';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { price, syllabus, prerequisites, location, schedule, duration, thumbnail, enrollmentStatus, description, instructor, name, instructorImg, instructorStatus, _id } = useSelector((state) => state.courses.details);

    useEffect(() => {
        dispatch(fetchCourseDetails(id));
    }, [id, dispatch]);


    const user = loadUserInfo();
    const handleEnroll = async () => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You hav to login first!",
            });

            navigate('/login')

        }
        const res = await axios.put('https://alemeno-course-server.vercel.app/enroll', { email: user.email, id });

        console.log(res.data);

        if (res.data.result) {

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `You have successfully enroll ${name}`,
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You already enrolled in this course !",
            });
        }
    }

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={thumbnail} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                    <div className="space-y-2 grid grid-cols-6">
                        <div className='col-span-6 lg:col-span-5'>
                            <h1 rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">{name}</h1>
                            <div className='flex items-center gap-3'>
                                <img src={instructorImg} className='w-10 h-10 rounded-full' alt="" />
                                <p className='font-semibold'>{instructor} <span>({instructorStatus})</span></p>
                            </div>
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <h3 className='py-1 px-2 rounded-md bg-green-400 text-white font-semibold text-center'>{location}</h3>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        <p>{description}</p>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='font-medium'>Status : <span>{enrollmentStatus}</span></h3>
                        <h3 className='font-medium'>Duration : <span>{duration}</span></h3>
                        <h3 className='font-medium'>Prerequisite : {prerequisites?.map(i => (<span key={i}>{i} </span>))}</h3>
                        <h3>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                {syllabus?.map((item, idx) => (
                                    <div key={idx} className='border-2 rounded-md p-1 border-gray-700'>
                                        <h3 className='font-medium'><span className='font-bold'>Week :</span> {item.week}</h3>
                                        <h3 className='font-medium'><span className='font-bold'>Topic :</span> {item.topic}</h3>
                                        <p className='font-medium'><span className='font-bold'>Content :</span> {item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </h3>
                        <h3 className='font-medium'>Schedule : <span>{schedule}</span></h3>
                        <h3 className='font-medium'>Course Fee : $<span>{price}</span></h3>
                    </div>
                    <button onClick={handleEnroll} className='rounded py-2 w-full bg-gradient-to-r from-orange-500  to-yellow-400 text-white font-semibold'>Enroll Course</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
