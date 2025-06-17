import React from "react";
import { Link } from "react-router";
import ReactStars from "react-stars";

const DisplayCard = ({ product }) => {
  const { img, _id, name, brandName, category, price, rating, quantity } =
    product;
  return (
    <div className="min-h-[40vh]">
      <div className="card  bg-base-100 shadow-sm border-2">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-base-content">{name}</h2>
          <p className="text-base-content"><span className="font-bold ">Price:</span> {price}</p>
          <p className="text-base-content"><span className="font-bold ">Brand Name:</span> {brandName}</p>
          <p className="text-base-content"><span className="font-bold ">Category:</span> {category}</p>
          <p className="text-base-content"><span className="font-bold ">Quantity:</span> {quantity}</p>

          <div className="flex  justify-start items-center space-x-2">
            <p className="text-base-content">
            <span className="font-bold ">Ratings:</span></p>
            <ReactStars
              count={5}
              value={rating}
              edit={false}
              readOnly
              size={24}
              color2={"#ffd700"}
            />
          
          </div>
          <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DisplayCard;
