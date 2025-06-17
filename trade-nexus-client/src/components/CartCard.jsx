import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CartCard = ({ cart, setCarts }) => {
  console.log(cart);
  const {
    _id,
    name,
    brandName,
    category,
    minSellQuantity,
    img,
    description,
    buyQuantity,
    buyingDate,
  } = cart;

  const handleRemove = (name, buyQuantity) => {
    setCarts((prev) => prev.filter((item) => item._id !== _id));
    axios
      .delete(`${import.meta.env.VITE_API_URL}/cart/${name}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Product deleted from cart successfully!",
            icon: "success",
            draggable: true,
          });
        } else {
          console.warn("No item deleted");
        }
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });

    axios
      .patch(`${import.meta.env.VITE_API_URL}/product/${name}`, {
        cancelQuantity: buyQuantity,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log(res);
        } else {
          console.warn("No item deleted");
        }
      });
  };

  return (
    <div className="card  bg-base-100 shadow-sm border-2">
      <figure>
        <img src={img} alt="Movie" />
      </figure>

      <div className="card-body">
        <h2 className="text-base-content card-title">{category}</h2>
        <p className="text-base-content"><span className="font-bold ">Brand Name:</span> {brandName}</p>
        <p className="text-base-content">
          <span className="font-bold ">Minimum Selling Quantity:</span> {minSellQuantity}
        </p>
        <p className="text-base-content"><span className="font-bold ">Buying Quantity:</span> {buyQuantity}</p>
        <p className="text-base-content"><span className="font-bold ">Description:</span> {description}</p>
        <p className="text-base-content"><span className="font-bold ">Buying Date:</span> {buyingDate}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleRemove(name, buyQuantity)}
            className="btn btn-primary"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
