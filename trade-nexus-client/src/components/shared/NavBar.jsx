
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

//   const [isDark, setIsDark] = useState(false); // default light

//   // On mount, apply initial theme based on isDark (false = light)
//   useEffect(() => {
//     const theme = isDark ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", theme);
//   }, []); // run once on mount

//   // Update theme when isDark changes
//   useEffect(() => {
//     const theme = isDark ? "dark" : "light";
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: error.message,
          }));
  };

  const links = [
  <li key="home">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `hover:text-accent font-medium transition ${
          isActive ? 'text-accent underline' : 'text-base-content'
        }`
      }
    >
      Home
    </NavLink>
  </li>,
  <li key="all">
    <NavLink
      to="/allPlants"
      className={({ isActive }) =>
        `hover:text-accent font-medium transition ${
          isActive ? 'text-accent underline' : 'text-base-content'
        }`
      }
    >
      All Plants
    </NavLink>
  </li>,
  <li key="add">
    <NavLink
      to="/addPlant"
      className={({ isActive }) =>
        `hover:text-accent font-medium transition ${
          isActive ? 'text-accent underline' : 'text-base-content'
        }`
      }
    >
      Add Plants
    </NavLink>
  </li>,
  <li key="my">
    <NavLink
      to="/myPlants"
      className={({ isActive }) =>
        `hover:text-accent font-medium transition ${
          isActive ? 'text-accent underline' : 'text-base-content'
        }`
      }
    >
      My Plants
    </NavLink>
  </li>,
];


  return (
    <div className="navbar bg-base-200     shadow-sm px-[5vw]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden text-primary">
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
    <h1 className="text-3xl font-bold text-primary hidden sm:block">Plant Care Tracker</h1>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base-content">{links}</ul>
  </div>

  <div className="navbar-end flex items-center gap-4">
    
    {/* <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={toggleTheme}
        checked={isDark}
      />
      
      <svg
        className="swap-on fill-current w-6 h-6"
        aria-label="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </g>
      </svg>
      
      <svg
        className="swap-off fill-current w-6 h-6"
        aria-label="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </g>
      </svg>
    </label */}

    {user ? (
      <>
        <div className="flex items-center gap-2">
          <div className="relative group cursor-pointer inline-block">
            <span className="text-sm font-semibold text-base-content hover:text-accent">User</span>

            {/* Popover on hover */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 z-10 hidden group-hover:flex flex-col items-start gap-2 rounded-lg bg-base-200 p-3 shadow-lg border border-base-300 w-56 transition-all duration-200 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm break-words text-base-content">
                {user.displayName}
              </span>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="btn px-5 py-2 btn-primary">
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to="/login">
          <button className="btn px-5 py-2 btn-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn px-5 py-2 btn-primary">Register</button>
        </Link>
      </>
    )}
  </div>
</div>

  );
};

export default NavBar;
