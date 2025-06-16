import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { ShoppingCart } from "lucide-react";
import ThemeControl from "./ThemeControl";
import logo from "../../assets/Logo.png";
import { CiMenuKebab } from "react-icons/ci";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        })
      );
  };

  const links = [
    <li key="home">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-primary font-medium transition ${
            isActive ? "text-primary underline" : "text-base-content"
          }`
        }
      >
        Home
      </NavLink>
    </li>,
    <li key="categories">
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          `hover:text-primary font-medium transition ${
            isActive ? "text-primary underline" : "text-base-content"
          }`
        }
      >
        Categories
      </NavLink>
    </li>,
    <li key="allProducts">
      <NavLink
        to="/all-products"
        className={({ isActive }) =>
          `hover:text-primary font-medium transition ${
            isActive ? "text-primary underline" : "text-base-content"
          }`
        }
      >
        All Product
      </NavLink>
    </li>,
    <li key="addProduct">
      <NavLink
        to="/add-product"
        className={({ isActive }) =>
          `hover:text-primary font-medium transition ${
            isActive ? "text-primary underline" : "text-base-content"
          }`
        }
      >
        Add Product
      </NavLink>
    </li>,
    <li key="myProduct">
      <NavLink
        to={"/my-product"}
        className={({ isActive }) =>
          `hover:text-primary font-medium transition ${
            isActive ? "text-primary underline" : "text-base-content"
          }`
        }
      >
        My Product
      </NavLink>
    </li>,
  ];

  return (
    <>
      <div className="navbar   bg-base-200   text-base-content  shadow-sm px-[5vw] border-b-2 border-base-300">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden text-primary"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-box z-10 mt-3 w-52 p-2 shadow border border-base-300"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="w-13">
              <img
              src={logo}
              alt=""
              className="rounded-full w-full lg:hidden"
            />
            </div>
          </Link>
          <Link to="/">
            <div className="whitespace-normal">
              <h1 className="text-3xl font-bold text-primary hidden lg:block -ml-10  ">
              Trade Nexus
            </h1>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base-content">
            {links}
          </ul>
        </div>

        <div className=" navbar-end flex items-center gap-4">
          <ThemeControl></ThemeControl>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `hover:text-primary font-medium transition ${
                isActive ? "text-primary underline" : "text-base-content"
              }`
            }
          >
            <ShoppingCart />
          </NavLink>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pr-0 md:hidden text-primary"
            >
             <CiMenuKebab size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-box z-10 mt-3 w-30 p-2 shadow border border-base-300"
            >
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="relative group cursor-pointer inline-block">
                      {/* <span className="text-sm font-semibold text-base-content hover:text-accent">User</span> */}
                      <div className="w-10 h-10 shrink-0 mb-2">
                        <img
                          src={user.photoURL}
                          alt="User"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {/* Popover on hover */}
                      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 z-10 hidden group-hover:flex flex-col items-start gap-2 rounded-lg bg-base-200 p-3 shadow-lg border border-base-300 w-56 transition-all duration-200 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                        <span className="text-sm break-words text-base-content">
                          {user.displayName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn px-5 py-2 btn-primary"
                  >
                    Signout
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-end">
                    <Link to="/sign-in">
                    <button className="btn btn-outline btn-primary mb-2">
                      Signin
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn  btn-primary">Register</button>
                  </Link>
                  </div>
                </>
              )}
            </ul>
          </div>


          
          {user ? (
            <>
              <div className=" items-center gap-2 hidden  md:flex
">
                <div className="relative group cursor-pointer inline-block">
                  {/* <span className="text-sm font-semibold text-base-content hover:text-accent">User</span> */}
                  <div className="w-10 h-10 shrink-0">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Popover on hover */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 z-10 hidden group-hover:flex flex-col items-start gap-2 rounded-lg bg-base-200 p-3 shadow-lg border border-base-300 w-56 transition-all duration-200 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                    <span className="text-sm break-words text-base-content">
                      {user.displayName}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn px-5 py-2 btn-primary hidden  md:flex"
              >
                Signout
              </button>
            </>
          ) : (
            <>
              <div className="hidden  md:flex">
                <Link to="/sign-in">
                <button className="btn btn-outline btn-primary mr-3">Signin</button>
              </Link>
              <Link to="/register">
                <button className="btn  btn-primary">Register</button>
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
