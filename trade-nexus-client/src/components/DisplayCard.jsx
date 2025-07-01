import React from "react";
import { Link } from "react-router";
import ReactStars from "react-stars";

const DisplayCard = ({ product }) => {
  const { img, _id, name, description } = product;
  return (
    <div className="">
      <div className="card  bg-base-300 shadow-sm ">
        <div className="w-auto h-60 relative">
          
            <img src={img} alt="Movie" className="object-cover h-full w-full" />
          
        </div>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-base-content">{name}</h2>
          <p className="text-base-content"> {description}</p>

          <div className="card-actions ">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary w-full">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
