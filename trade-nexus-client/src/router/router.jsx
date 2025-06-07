import {
    createBrowserRouter,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
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
import axios from "axios";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => axios(`${import.meta.env.VITE_API_URL}/products`),
                Component: Home
            },
            // {
            //     path:'/categories',
            //     Component: Categories,
            //     loader: () => axios(`${import.meta.env.VITE_API_URL}/products`)
            // },
            {
                path: '/all-products',
                                loader: () => axios(`${import.meta.env.VITE_API_URL}/products`),

                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },

            {
                path:'/my-product/:email',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>,
                loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/my-product/${params.email}`)
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/details',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => axios(`${import.meta.env.VITE_API_URL}/products`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
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