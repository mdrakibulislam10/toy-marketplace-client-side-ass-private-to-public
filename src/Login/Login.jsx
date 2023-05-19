import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div className="w-full max-w-xs mx-auto">
            <p className="text-3xl font-semibold mb-1">Please Login!</p>
            <form className="bg-white shadow-xl rounded px-8 py-10 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" required placeholder="Your Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                        ${!focus ? "border-red-500" : ""}`} id="password" required type="password" placeholder="******************" />
                    {
                        !focus ? <p className="text-red-500 text-xs italic">Please choose a password.</p> : <p className="text-xs italic">Password at least 6 characters long.</p>
                    }
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Login
                    </button>
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