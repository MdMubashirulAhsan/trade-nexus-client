import React from "react";
import { useLoaderData } from "react-router";
import DisplayModal from "../components/DisplayModal";
import useAuth from "../hooks/useAuth";
import ReactStars from "react-stars";
import { Helmet } from "react-helmet";

const Details = () => {
  const { user } = useAuth();

  const { data } = useLoaderData();

  const {
    name,
    img,
    quantity,
    sellQuantity,
    description,
    brandName,
    price,
    category,
    content,
    rating,
  } = data || {};

  return (
    <>
      <Helmet>
        <title> Product Details - Trade Nexus</title>
      </Helmet>

      <div className="hero bg-base-100 min-h-screen text-base-content">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6"><span className="font-bold ">Description:</span> {description}</p>
            <p className="py-6"><span className="font-bold ">Brand Name:</span> {brandName}</p>
            <div className="badge badge-secondary">{category}</div>
            <p className="py-6"><span className="font-bold ">Price:</span> {price}</p>
            <p className="py-6"><span className="font-bold ">Total Quantity:</span> {quantity}</p>
            <p className="py-6"><span className="font-bold ">Minimum Qunatity to Buy:</span> {sellQuantity}</p>
            <div className="flex items-center gap-3">
              <p className="text-base-content"><span className="font-bold ">Ratings:</span></p>
              <ReactStars
                count={5}
                value={rating}
                edit={false}
                readOnly
                size={24}
                color2={"#ffd700"}
              />
            </div>
            <p className="py-6">{content}</p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Buy
            </button>
            <DisplayModal user={user} sellQuantity={sellQuantity} data={data} />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
