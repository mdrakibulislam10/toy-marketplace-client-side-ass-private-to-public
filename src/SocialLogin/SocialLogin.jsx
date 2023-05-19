import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSIgnIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to Little Cars',
                    text: 'Sign in With Google successfully',
                    showConfirmButton: true,
                    timer: 10000 // automatically close after 10 seconds
                });
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
        <div className="mb-12">
            <div className="divider">OR</div>
            <div className="place-items-center">
                <button onClick={handleGoogleSIgnIn} className="flex flex-row flex-wrap justify-center gap-1 items-center card w-full border-2 border-sky-500 py-2 font-bold rounded-box">
                    <FaGoogle /> Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;