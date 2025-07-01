import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { getIdToken } from "firebase/auth";
import useProductApi from "../api/useProductApi";
import Lottie from "lottie-react";
import noProduct from "../assets/lotties/no product.json";
import { useNavigate } from "react-router-dom"; // make sure this is correct
import Loading from "../pages/Loading"; // assuming you have this

const MyProduct = () => {
  const { user, loading } = useAuth();
  const { myProductPromise } = useProductApi();
  const [myProducts, setMyProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || !user?.email) return;

    getIdToken(user)
      .then((token) => {
        return myProductPromise(user.email, token);
      })
      .then((res) => {
        setMyProducts(res || []);
      })
      .catch((err) => {
        console.error("My Product fetch error:", err);
      });
  }, [loading, user?.email]);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>My Product - Trade Nexus</title>
      </Helmet>

      <div className="overflow-x-auto p-5 bg-base-200">
        {myProducts.length > 0 ? (
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-base-200 text-base-content text-center">
                <th className="px-4 py-2">Product Image</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Brand Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Ratings</th>
                <th className="px-4 py-2">Product Quantity</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((myProduct) => (
                <tr
                  key={myProduct._id}
                  className="hover:bg-base-200 text-center cursor-pointer"
                >
                  <td className="px-4 py-2">
                    <img
                      src={myProduct.img}
                      alt={myProduct.name}
                      className="w-20 h-20 mx-auto object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-base-content">{myProduct.name}</td>
                  <td className="px-4 py-2 text-base-content">{myProduct.brandName}</td>
                  <td className="px-4 py-2 text-base-content">{myProduct.category}</td>
                  <td className="px-4 py-2 text-base-content">{myProduct.rating}</td>
                  <td className="px-4 py-2 text-base-content">{myProduct.quantity}</td>
                  <td className="px-4 py-2 text-base-content">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/update/${myProduct._id}`)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="bg-base-200 text-accent min-h-[50vh] flex flex-col items-center justify-center text-2xl font-bold text-center">
            <Lottie
              animationData={noProduct}
              loop
              autoplay
              className="w-[50vw] h-[40vh]"
            />
            <p>No products found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProduct;
