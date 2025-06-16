import React, { Suspense, useEffect, useState } from "react";
import MyProductCard from "../components/MyProductCard";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { getIdToken } from "firebase/auth";
import useProductApi from "../api/useProductApi";
import Lottie from "lottie-react";
import noProduct from '../assets/lotties/no product.json'

const MyProduct = () => {
  const { user, loading } = useAuth();
  const { myProductPromise } = useProductApi();
  const [myProducts, setMyProducts] = useState([]);

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

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-base-200">
          {myProducts && myProducts.length > 0 ? (
            myProducts.map((myProduct, index) => (
              <MyProductCard key={index} myProduct={myProduct} />
            ))
          ) : (
            <div className="bg-base-200 text-accent min-h-[30vh] text-center text-2xl font-bold">
<Lottie
            animationData={noProduct}
            loop
            autoplay
            className="w-[50vw] mx-auto h-[40vh]"
          />            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProduct;
