import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import ActiveLink from "../../../ActiveLink/ActiveLink";

const Navbar = () => {
    const [hide, setHide] = useState(false);

    const navMenu = <>
        <li><ActiveLink to={"/"}>Home</ActiveLink></li>
        <li><ActiveLink to={"/allToys"}>All Toys</ActiveLink></li>
        <li><ActiveLink to={"/myToys"}>My Toys</ActiveLink></li>
        <li><ActiveLink to={"/addToys"}>Add A Toy</ActiveLink></li>
        <li><ActiveLink to={"/blogs"}>Blogs</ActiveLink></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 px-0 flex items-start sm:items-center">
                <div className="navbar-start flex flex-wrap">
                    <div className="dropdown ms-2" onClick={() => setHide(!hide)}>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`flex flex-col gap-y-3 dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 ${!hide ? "hidden" : "block"}`}>
                            {navMenu}
                        </ul>
                    </div>

                    <Link to={"/"}>
                        <img className="w-36" src="https://i.ibb.co/vmTPGCM/cute-cat-driving-car-cartoon-character-animal-transportation-isolated-138676-3153-1-removebg-preview.png" alt="" />
                    </Link>

                    <p className="text-4xl font-bold text-pink-500 custom-title-style1">
                        LITTLE CARS
                    </p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 px-1 font-bold">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end mt-3 sm:mt-0">
                    <div className="gap-8 px-1 flex flex-col sm:flex-row items-center justify-end">
                        {/* <img src="" alt="" /> */}
                        <p>img</p>
                        <Link to={"/login"}><button className="btn bg-sky-400 py-2 px-4 rounded-lg font-bold border-0 hover:bg-sky-500">Login</button></Link>
                    </div>

                </div>
            </div>

            <p className="text-4xl font-bold text-pink-500 custom-title-style2">
                LITTLE CARS
            </p>
        </>
    );
};

export default Navbar;