import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactLoading from 'react-loading';

const Main = () => {
    const navigation = useNavigation();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="my-3">
                {
                    navigation.state === "loading"
                        ? <ReactLoading className="mx-auto" type={"spokes"} color={"gray"} height={50} width={50} />
                        : ""
                }
            </div>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;