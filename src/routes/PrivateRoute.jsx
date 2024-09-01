import Swal from "sweetalert2";
import { loadUserInfo } from "../utils/loadUserInfo";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();

    const user = loadUserInfo();
    if (user) {
        return children
    }

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You hav to login first!",
    });
    
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
    // if (!user) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "You hav to login first!",
    //     });

    //     navigate('/login')

    // }
    // return children;
};

export default PrivateRoute;