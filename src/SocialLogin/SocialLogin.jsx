import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSIgnIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
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