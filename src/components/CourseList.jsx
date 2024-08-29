import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../features/coursesSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CourseList = () => {

    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.list);
    const status = useSelector((state) => state.courses.status);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchCourses(searchTerm));
    }, [dispatch, searchTerm]);


    return (
        <div>
            Total courses {courses.length}
            <input
                type="text"
                placeholder="Search by course name or instructor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <div className='h-40 border-2 p-2 overflow-y-auto'>
                {
                    courses.map(course => (
                        <Link to={`/course/${course._id}`} key={course._id}>
                            <div className='bg-slate-300 my-2 p-2'>
                                <p>{course.name}</p>
                                <p>{course.instructor}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CourseList;