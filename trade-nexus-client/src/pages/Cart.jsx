// import axios from 'axios'
// import { use } from 'react'
// import {  useState } from "react";
// import { AuthContext } from '../contexts/AuthContext'
// import OrderCard from './OrderCard'
import useAuth from "../hooks/useAuth";
import CartCard from "../components/CartCard";
import { Helmet } from "react-helmet";
import useCartApi from "../api/useCartApi";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";
import { getIdToken } from "firebase/auth";
import noProduct from '../assets/lotties/no product.json'
import Lottie from "lottie-react";

const Cart = () => {
  const { user, loading } = useAuth();
  const { myCartPromise } = useCartApi();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (loading || !user?.email) return;

    getIdToken(user)
      .then((token) => {
        return myCartPromise(user?.email, token);
      })
      .then((res) => {
        setCarts(res || []);
      })
      .catch((err) => {
        console.error("Cart fetch error:", err);
      });
  }, [loading, user?.email]);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title> Cart - Trade Nexus</title>
      </Helmet>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-base-200">
          {carts && carts.length > 0 ? (
            carts.map((cart, index) => (
              <CartCard key={index} cart={cart} setCarts={setCarts} />
            ))
          ) : (
            <div className="bg-base-200 justify-center min-h-[40vh] text-center text-2xl font-bold">
              <Lottie
            animationData={noProduct}
            loop
            autoplay
            className="w-[50vw] mx-auto h-[40vh]"
          />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
