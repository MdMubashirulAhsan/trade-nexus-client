import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Update = () => {
  
  const axiosSecure = useAxiosSecure();
  const product = useLoaderData();

  
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedProduct = Object.fromEntries(formData.entries());

    axiosSecure
      .put(`/products/${product._id}`, updatedProduct)

      .then((data) => {
        if (data.data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            "Product information updated successfully.",
            "success"
          );
          // success();
          navigate("/all-products");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Update - Trade Nexus</title>
      </Helmet>
      <div className="bg-base-100 text-base-content p-8 rounded-xl shadow-md max-w-xl mx-auto ">
        <div>
          <h1 className="text-primary text-3xl font-bold text-center mb-[3vh]">
            Update Product
          </h1>
        </div>
        <form onSubmit={handleUpdate} className="space-y-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Image
            </label>
            <input
              type="url"
              name="img"
              required
              defaultValue={product.img}
              className="input input-bordered w-full"
              placeholder="Enter product image"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              required
              defaultValue={product.name}
              className="input input-bordered w-full"
              placeholder="Enter product name"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Main Quantity
            </label>
            <input
              type="number"
              name="quantity"
              required
              defaultValue={product.quantity}
              className="input input-bordered w-full"
              placeholder="Enter product main quantity"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Minimum Selling Quantity
            </label>
            <input
              type="number"
              name="sellQuantity"
              required
              defaultValue={product.sellQuantity}
              className="input input-bordered w-full"
              placeholder="Enter minimum selling quantity"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">Brand Name</label>
            <input
              type="text"
              name="brandName"
              required
              defaultValue={product.brandName}
              className="input input-bordered w-full"
              placeholder="Enter brand name"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">Category</label>
            <select
              name="category"
              required
              className="select select-bordered w-full"
              defaultValue={product.category}
            >
              <option value="" disabled>
                Product Category
              </option>
              <option value="Electronics & Gadgets">
                Electronics & Gadgets
              </option>
              <option value="Home & Kitchen Appliances">
                Home & Kitchen Appliances
              </option>
              <option value="Fashion & Apparel">Fashion & Apparel</option>
              <option value="Industrial Machinery & Tools">
                Industrial Machinery & Tools
              </option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Automotive Parts & Accessories">
                Automotive Parts & Accessories
              </option>
              <option value="Office Supplies & Stationery">
                Office Supplies & Stationery
              </option>
            </select>
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4 md:col-span-2">
            <label className="label font-semibold mb-2 block">
              Description
            </label>
            <textarea
              name="description"
              required
              defaultValue={product.description}
              rows={3}
              className="textarea textarea-bordered w-full"
              placeholder="Describe the product"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Rating
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max={5}
              required
              defaultValue={product.rating}
              className="input input-bordered w-full"
              placeholder="Enter product rating"
            />
          </fieldset>

          <button type="submit" className="btn btn-primary w-full mt-6">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
