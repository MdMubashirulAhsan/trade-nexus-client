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
      <div className="mx-[5vw]">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-primary mb-5">
          Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-base-200">
          {products.map((product) => (
            <motion.div
              key={product}
              className="card  bg-base-100 shadow-sm border-2"
              initial={{ scale: 0.5, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={`/display-product/${product}`}>
                <div className="card-body ">
                  <h2 className="card-title  text-accent">{product}</h2>
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
