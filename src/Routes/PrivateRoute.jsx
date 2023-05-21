import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import ReactLoading from 'react-loading';


const PrivateRoute = ({ children }) => {
    const { user, spinner } = useContext(AuthContext);
    const location = useLocation();

    if (spinner) {
        return <ReactLoading className="mx-auto" type={"spokes"} color={"gray"} height={50} width={50} />
    }

    if (user) {
        return children;
    }

    Swal.fire({
        icon: 'warning',
        text: 'Please log in to continue!',
        showConfirmButton: true,
        timer: 10000
    });

    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;
