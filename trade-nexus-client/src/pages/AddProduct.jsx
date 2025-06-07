import Swal from "sweetalert2";
import React, { use } from "react";
import { Helmet } from "react-helmet";
// import {useAuth} from '../hooks/useAuth';
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";


const AddProduct = () => {
  // const [loading, setLoading] = useState(false);
  const { user } = use(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const newProduct = Object.fromEntries(formData.entries());
    newProduct.email = user?.email;
    
    // setLoading(true);

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/products`,

        newProduct
      )

      .then((data) => {
        // setLoading(false);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Product added successfully!",
            icon: "success",
            draggable: true,
          });
          // form.reset();
        } else {
          Swal.fire({
            title: "Error adding Product",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch(() => {
        // setLoading(false);
        Swal.fire({
          title: "Network error",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add Product - Trade Nexus</title>
        <meta name="description" content="My page description" />
      </Helmet>

      <div className="bg-base-100 text-base-content p-8 rounded-xl shadow-md max-w-4xl mx-auto my-10">
        <div>
          <h1 className="text-primary text-3xl font-bold text-center mb-[3vh]">
            Add Product
          </h1>
        </div>
        <form onSubmit={handleAddProduct} className="space-y-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Image
            </label>
            <input
              type="text"
              name="img"
              required
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
              defaultValue=""
            >
              <option value="" disabled>
                Product Category
              </option>
                <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                <option value="Fashion & Apparel">Fashion & Apparel</option>
                <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
                <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
            </select>
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4 md:col-span-2">
            <label className="label font-semibold mb-2 block">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={3}
              className="textarea textarea-bordered w-full"
              placeholder="Describe the product"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              min="1"
              required
              className="input input-bordered w-full"
              placeholder="Enter product price"
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
              className="input input-bordered w-full"
              placeholder="Enter product rating"
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">
              Product Content
            </label>
            <textarea
              name="content"
              required
              rows={3}
              className="textarea textarea-bordered w-full"
              placeholder="Enter product content"
            />
          </fieldset>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold disabled:opacity-60"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
