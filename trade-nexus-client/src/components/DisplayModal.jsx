import React, { useState } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";

import axios from "axios";
const DisplayModal = ({ user, sellQuantity, data }) => {
  const [buyQuantity, setBuyQuantity] = useState(Number(sellQuantity));
  const handleDecrease = () => {
    setBuyQuantity(buyQuantity - 1);
  };
  const handleIncrease = () => {
    setBuyQuantity(buyQuantity + 1);
  };

  const handleBuy = (name) => {
    if (buyQuantity < sellQuantity) {
      Swal.fire({
        icon: "error",
        title: "Sorry Try Again!!!",
        text: `You must buy this product at least ${sellQuantity} units`,
        foter: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    const order = {
      img: data.img,
      name: data.name,
      quantity: data.quantity,
      minSellQuantity: data.sellQuantity,
      brandName: data.brandName,
      category: data.category,
      description: data.description,
      price: data.price,
      rating: data.rating,
      content: data.content,
      email: user?.email,

      buyQuantity: buyQuantity,

      buyingDate: format(new Date(), "dd/MM/yyyy hh.mm.ss a"),
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/cart`, order)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Product added to your cart successfully!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Error adding Product post",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Network error",
          icon: "error",
          draggable: true,
        });
      });
    axios
      .patch(`${import.meta.env.VITE_API_URL}/product/${name}`, {
        buyQuantity: buyQuantity,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Product added successfully!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Error adding Product patch",
            icon: "error",
            draggable: true,
          });
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-base-content">
            Please, Check this out.
          </h3>
          <p className="pt-4 text-base-content">Your E-mail: {user?.email}</p>
          <p className="pb-4 text-base-content">
            User Name: {user?.displayName}
          </p>
          <p className="  text-accent">Select quantity to buy this product</p>
          <div className="join">
            <button onClick={handleDecrease} className="btn join-item">
              -
            </button>

            <div className="w-10 h-10 text-center border border-base-300 items-center ">
              <p className="text-base-content text-center">{buyQuantity}</p>
            </div>
            <button onClick={handleIncrease} className="btn join-item">
              +
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <button
                onClick={() => handleBuy(data.name)}
                className="btn btn-primary"
              >
                Buy
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DisplayModal;
