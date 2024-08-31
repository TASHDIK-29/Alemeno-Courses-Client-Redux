import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo } from "../../utils/loadUserInfo";
import { useEffect } from "react";
import { fetchEnrolledCourses } from "../../features/dashboardSlice";

const EnrollCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.dashboard.enrolledCourses);
    const user = loadUserInfo();

    useEffect(() =>{
        dispatch(fetchEnrolledCourses(user.email))
    }, [])

    return (
        <div>
            enroll courses {courses.length}
        </div>
    );
};

export default EnrollCourses;