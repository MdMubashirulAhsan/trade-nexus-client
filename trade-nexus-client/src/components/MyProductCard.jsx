import React from "react";
import ReactStars from "react-stars";

const MyProductCard = ({ myProduct }) => {
  const { rating, description, category, brandName, price, name, img } =
    myProduct || {};
  return (
    <div className="card  bg-base-100 shadow-sm border-2">
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-base-content">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-bold ">Price:</span> {price}</p>
        {/* <span className="font-bold "></span> */}
        <p><span className="font-bold ">Brand Name:</span> {brandName}</p>
        <p><span className="font-bold ">Category:</span> {category}</p>
        <p><span className="font-bold ">Description:</span> {description}</p>
        <div className="flex  justify-start items-center space-x-2">
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
      </div>
    </div>
  );
};

export default MyProductCard;
