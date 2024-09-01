import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../../features/authSlice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {

    const dispatch = useDispatch();
    const registerInfo = useSelector((state) => state.auth.registerInfo);

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);

        if (registerInfo.insertedId) {

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You have successfully create an account",
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/login');
        }else{
            toast.error("Email Already Used. Try another")
        }

    }, [registerInfo]);



    const handelRegister = async e => {
        e.preventDefault();

        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, phone, email, password, type);
        const userInfo = {
            firstName, lastName, email, phone, password
        }

        dispatch(createUser(userInfo))

    }



    return (
        <div className="space-y-4">

            <h1 className="text-4xl font-bold">Register Your Account</h1>
            <p>If you have an account with us, please login at the <Link to={'/login'} className="text-orange-400 font-bold text-lg">Login</Link> page</p>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-500 font-semibold">Your Personal Details</h3>

                <div>
                    <form onSubmit={handelRegister}>
                        <div className="grid grid-cols-5 gap-6 items-center lg:w-4/6">
                            <label className="text-slate-400 font-semibold">First Name</label>
                            <input type="text" name="firstName" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="First Name" />

                            <label className="text-slate-400 font-semibold">Last Name</label>
                            <input type="text" name="lastName" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Last Name" />

                            <label className="text-slate-400 font-semibold">Email</label>
                            <input type="email" name="email" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Your Email" />

                            <label className="text-slate-400 font-semibold">Phone</label>
                            <input type="text" name="phone" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Your Phone" />

                            <label className="text-slate-400 font-semibold">Password</label>
                            <input type="password" name="password" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Enter Password" />
                            <div></div>
                            <button type="submit" className="border-2 border-orange-400 p-2 text-orange-600 font-bold col-span-4">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;