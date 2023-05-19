// import { useRouteError } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    // const error = useRouteError();
    // console.error(error);

    return (
        <div id="error-page" className="my-10">
            <img className="rounded mx-auto w-2/3 md:w-2/6" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1901.jpg?w=740&t=st=1684495014~exp=1684495614~hmac=ec7037fac595faa29e641a1c9f9bc17fd0ce9a34edcab43dabbfe51bc6aefb27" alt="" />
            <div className="text-center">
                {/* <i>{error.statusText || error.message}</i> */}
                <p className="text-2xl font-semibold my-4">PAGE NOT FOUND</p>

                <Link to={"/"}>
                    <button className="btn bg-orange-400 border-0 font-semibold text-lg">
                        <FaArrowLeft className="me-2" />
                        GO BACK TO HOME PAGE
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;