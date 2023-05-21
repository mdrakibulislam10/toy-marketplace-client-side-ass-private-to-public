import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";
import Swal from 'sweetalert2';

const Login = () => {
    const [focus, setFocus] = useState(false);
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to Little Cars',
                    text: 'Sign in successfully',
                    showConfirmButton: true,
                    timer: 10000
                });
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => {
                // console.log(err.message);
                Swal.fire({
                    icon: 'warning',
                    title: 'Please try again!',
                    text: err.message,
                    showConfirmButton: true,
                    showCancelButton: true,
                    timer: 10000
                });
            })
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <p className="text-3xl font-semibold mb-1">Please Login!</p>
            <form onSubmit={handleLogin} className="bg-white shadow-xl rounded px-8 py-10 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" required placeholder="Your Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                        ${!focus ? "border-red-500" : ""}`} id="password" required type="password" name="password" placeholder="******************" />
                    {
                        !focus ? <p className="text-red-500 text-xs italic">Please choose a password.</p> : <p className="text-xs italic">Password at least 6 characters long.</p>
                    }
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-between">

                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Login" />
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>

                <p className="italic mt-6">You don't have an account? Please <Link className="text-blue-600 underline" to={"/sign-up"}>Create an account.</Link></p>
            </form>
            <div className="text-center">

                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;