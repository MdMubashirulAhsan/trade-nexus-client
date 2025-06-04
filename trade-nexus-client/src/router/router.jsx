import {
    createBrowserRouter,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import PrivateRoute from "../routes/PrivateRoute";

import Categories from "../pages/Categories";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import MyProduct from "../pages/MyProduct";
import Cart from "../pages/Cart";
import Details from "../pages/Details";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Update from "../pages/Update";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'/categories',
                Component: Categories,
                // loader: ({params}) => fetch(`https://career-code-server-taupe.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/all-products',
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },

            {
                path:'/my-product',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/details',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                // loader: ({params}) => fetch(`https://career-code-server-taupe.vercel.app/applications/job/${params.job_id}`)
            },
            {
                path: '/update',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                // loader: ({params}) => fetch(`https://career-code-server-taupe.vercel.app/applications/job/${params.job_id}`)
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/sign-in',
                Component: SignIn
            }
        ]
    },
]);

export default router;