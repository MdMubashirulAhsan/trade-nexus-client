import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getIdToken } from "firebase/auth";
import Lottie from "lottie-react";

import useAuth from "../hooks/useAuth";
import useCartApi from "../api/useCartApi";
import Loading from "./Loading";
import noProduct from "../assets/lotties/no product.json";

const Cart = () => {
  const { user, loading } = useAuth();
  const { myCartPromise } = useCartApi();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (loading || !user?.email) return;

    getIdToken(user)
      .then((token) => myCartPromise(user.email, token))
      .then((res) => setCarts(res || []))
      .catch((err) => console.error("Cart fetch error:", err));
  }, [loading, user?.email]);

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Cart - Trade Nexus</title>
      </Helmet>

      <div className="overflow-x-auto p-4 min-h-[60vh]">
        {carts.length > 0 ? (
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-base-200 text-base-content text-center">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr
                  key={cart._id}
                  className="hover:bg-base-100 text-center transition text-base-content"
                >
                  <td className="px-4 py-2">
                    <img
                      src={cart.img}
                      alt={cart.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{cart.name}</td>
                  <td className="px-4 py-2">{cart.brandName}</td>
                  <td className="px-4 py-2">${cart.price}</td>
                  <td className="px-4 py-2">{cart.quantity}</td>
                  <td className="px-4 py-2">
                    ${parseFloat(cart.price * cart.quantity).toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => {
                        // implement remove logic here
                        // optional: update setCarts after deletion
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-2xl font-bold text-accent h-[40vh]">
            <Lottie
              animationData={noProduct}
              loop
              autoplay
              className="w-[50vw] h-[40vh]"
            />
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
