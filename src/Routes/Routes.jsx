import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import SIgnUp from "../SignUp/SIgnUp";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";

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
            },
            {
                path: "/allToys",
                element: <AllToys />,
                loader: async () => fetch("https://toy-marketplace-server-side-six.vercel.app/toys?limit=20"),
            },
            {
                path: "/myToys",
                element: <MyToys />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    },
]);

export default router;