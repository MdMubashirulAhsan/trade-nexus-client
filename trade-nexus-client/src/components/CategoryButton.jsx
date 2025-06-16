import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const CategoryButton = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-right hover:text-primary font-medium transition">
        <div tabIndex={0} role="" className="">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {products.map((d) => (
            <li key={d}>
              <NavLink
                to={`/display-product/${d}`}
                className="hover:text-primary font-medium transition"
              >
                {d}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryButton;
