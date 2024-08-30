import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);




    const handelLogin = async e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);



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