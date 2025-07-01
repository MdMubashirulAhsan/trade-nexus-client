import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => {
        setProducts(response?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className=" mt-20 bg-base-200 p-5 rounded">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-primary mb-10">
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  bg-base-200">
          {products.map((product) => (
            <motion.div
              key={product}
              className="card  bg-base-300 shadow-sm border border-neutral"
              initial={{ scale: 0.5, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/display-product/${product}`}>
                <div className="card-body ">
                  <h2 className="card-title  text-base-content">{product}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
