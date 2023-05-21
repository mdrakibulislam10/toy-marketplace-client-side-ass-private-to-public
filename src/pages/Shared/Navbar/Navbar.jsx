import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Swal from "sweetalert2";

const Navbar = () => {
    const [hide, setHide] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    // logout
    const handleLogout = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logout successfully',
                    showConfirmButton: true,
                    timer: 10000
                });

                navigate("/", { replace: true });
            })
            .catch(err => {
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

    const navMenu = (
        <>
            <li><ActiveLink to={"/"}>Home</ActiveLink></li>
            <li><ActiveLink to={"/allToys"}>All Toys</ActiveLink></li>
            {user && (
                <>
                    <li><ActiveLink to={"/myToys"}>My Toys</ActiveLink></li>
                    <li><ActiveLink to={"/addToys"}>Add A Toy</ActiveLink></li>
                </>
            )}
            <li><ActiveLink to={"/blogs"}>Blogs</ActiveLink></li>
        </>
    );

    return (
        <div className="navbar-wrapper mb-6 lg:px-12 py-1 px-2 bg-[#ee8eb4] rounded">
            <div className="navbar-container flex items-center justify-between">
                <div className="navbar-start flex items-center">
                    <div className="dropdown sm:hidden" onClick={() => setHide(!hide)}>
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className={`font-semibold flex flex-col gap-y-2 dropdown-content p-3 shadow bg-base-100 rounded-box w-52 ${hide ? "block" : "hidden"}`}>
                            {navMenu}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <Link className="w-20 sm:w-28" to={"/"}>
                            <img className="" src="https://i.ibb.co/vmTPGCM/cute-cat-driving-car-cartoon-character-animal-transportation-isolated-138676-3153-1-removebg-preview.png" alt="" />
                        </Link>
                        <p className="text-xl md:text-4xl font-bold text-white ml-2 sm:ml-4">
                            LITTLE CARS
                        </p>
                    </div>
                </div>

                <div className="navbar-end flex items-center">
                    <ul className="hidden sm:flex gap-6 font-bold">
                        {navMenu}
                    </ul>

                    {user ? (
                        <div className="flex items-center ml-4">
                            <span id="clickable" data-tooltip-place="left">
                                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                            </span>
                            <Tooltip anchorSelect="#clickable" clickable>
                                <p className="mb-2 font-semibold">Name: {user?.displayName}</p>
                                <button onClick={handleLogout} className="flex items-center gap-2">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </Tooltip>
                        </div>
                    ) : (
                        <Link to={"/login"}>
                            <div className="flex text-center">
                                <button className="btn bg-white hover:bg-white py-2 px-4 rounded-lg font-bold border-0 ml-4 text-black hidden md:block">
                                    <span className="flex items-center">Login <FaUserAlt className="ms-2" /></span>
                                </button>

                                <span id="clickable" data-tooltip-place="bottom">
                                    <button className="btn bg-white hover:bg-white py-2 px-4 rounded-full font-bold border-0 ml-4 text-black md:hidden">
                                        <FaUserAlt />
                                    </button>
                                </span>
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <p>Login</p>
                                </Tooltip>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;