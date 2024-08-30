import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../features/authSlice";

const Login = () => {

    const dispatch = useDispatch();
    const loginInfo = useSelector((state) => state.auth.loginInfo);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);


    const navigate = useNavigate();

    const handelLogin = async e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;


        dispatch(loginUser({ email, password }))

        if (!loginInfo.user) {
            return alert('User not registered')
        } else if (loginInfo.user && !loginInfo.password) {
            return alert('Invalid Password')
        }

        localStorage.setItem('token', loginInfo.token);
        localStorage.setItem('credential', email);
        localStorage.setItem('user', JSON.stringify(loginInfo.user));

        navigate('/');


    }


    return (
        <div className="min-h-[70vh] flex justify-center items-center ">

            <div className="space-y-4 lg:w-1/2">
                <h1 className="text-4xl font-bold">Login To Your Account</h1>
                <p>Have no account with us ? please <Link to={'/register'} className="text-left font-bold text-orange-400 text-lg"><span>Register</span></Link> now.</p>

                <div>
                    <form onSubmit={handelLogin}>
                        <div className="grid grid-cols-5 gap-6 items-center">
                            <label className="text-slate-400 font-semibold">Email</label>
                            <input type="email" name="email" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Your Email" />

                            <label className="text-slate-400 font-semibold">Password</label>
                            <input type="password" name="password" className="col-span-4 p-2 border border-slate-300 hover:border-2 hover:border-black" placeholder="Enter Password" />
                            <div></div>
                            <button type="submit" className="border-2 border-orange-400 p-2 text-orange-600 font-bold col-span-4">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;