import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../features/coursesSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const CourseList = () => {

    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.list);
    const status = useSelector((state) => state.courses.status);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchCourses());
        }
      }, [status, dispatch]);

    return (
        <div>
            Total courses {courses.length}
        </div>
    );
};

export default CourseList;