import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourseDetails } from '../../features/coursesSlice';

const CourseDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const courseDetails = useSelector((state) => state.courses.details);

    useEffect(() => {
        dispatch(fetchCourseDetails(id));
    }, [id, dispatch]);

    return (
        <div>
            <h1>{courseDetails?.name}</h1>
            <p>{courseDetails?.description}</p>
        </div>
    );
};

export default CourseDetails;
