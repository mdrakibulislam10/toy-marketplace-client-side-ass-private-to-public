import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import SIgnUp from "../SignUp/SIgnUp";
import AddToys from "../pages/AddToys/AddToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SIgnUp />
            },
            {
                path: "/addToys",
                element: <AddToys />
            }
        ]
    },
]);

export default router;