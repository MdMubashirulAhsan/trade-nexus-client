import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import PrivateRoute from "../routes/PrivateRoute";

import Categories from "../components/Categories";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import MyProduct from "../pages/MyProduct";
import Cart from "../pages/Cart";
import Details from "../pages/Details";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Update from "../pages/Update";
import ErrorPage from "../pages/ErrorPage";

import Display from "../pages/Display";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
        Component: Home,
      },
      {
        path: "/categories",
        Component: Categories,
        
      },
      {
        path: "/all-products",
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),

        element: (
          
            <AllProducts></AllProducts>
          
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-product",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/my-product/${params.email}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/display-product/:category",
        element: <Display></Display>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/display/${params.category}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
    ],
  },
]);

export default router;
