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
        <h2 className="card-title">Product Name: {name}</h2>
        <p>Price: {price}</p>
        <p>Brand Name: {brandName}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <div className="flex  justify-start space-x-2">
          <p className="text-base-content">Ratings:</p>
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
