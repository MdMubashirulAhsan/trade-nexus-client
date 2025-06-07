
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";

const Categories = () => {

const [products, setProducts] = useState([])

    useEffect(() => {
    // Axios GET request returns a promise
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        setProducts(response.data); // Handle success
        
      })
      .catch((err) => {
        
        console.error(err); // Log error
      });
  }, []);
                            
  
  
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Click ⬇️
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {products.map(d => <li key={d._id}>{d.category}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
