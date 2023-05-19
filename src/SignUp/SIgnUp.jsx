import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';

const SIgnUp = () => {
    const [focus, setFocus] = useState(false);
    const { signUp } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        // console.log(name, email, password, image);

        // sign up
        signUp(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to Little Cars',
                    text: 'Sign up successfully',
                    showConfirmButton: true,
                    timer: 10000
                });

                updateUserInfo(result.user, name, image);
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

    const updateUserInfo = (currentUser, name, image) => {
        updateProfile(currentUser, {
            displayName: name,
            photoURL: image,
        });
    };

    return (
        <div className="w-full max-w-xs mx-auto mb-12">
            <p className="text-3xl font-semibold mb-1">Please Sign up!</p>

            <form onSubmit={handleSignUp} className="bg-white shadow-xl rounded px-8 py-10 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="name" type="text" required placeholder="Your Name" />
                </div>
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
                        ${!focus ? "border-red-500" : ""}`} id="password" required name="password" type="password" placeholder="******************" />
                    {
                        !focus ? <p className="text-red-500 text-xs italic">Please choose a password.</p> : <p className="text-xs italic">Password at least 6 characters long.</p>
                    }
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                        Photo URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" name="image" type="photo" required placeholder="paste your photo url" />
                </div>
                <div className="flex items-center justify-between">
                    <input className="bg-blue-500 hover:bg-blue-700 w-full mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign Up" />
                </div>

                <p className="italic mt-6">You have an account? Please <Link className="text-blue-600 underline" to={"/login"}>Login.</Link></p>
            </form>
        </div>
    );
};

export default SIgnUp;