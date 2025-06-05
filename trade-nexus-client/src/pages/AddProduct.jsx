import Swal from "sweetalert2";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    setLoading(true);

    fetch("https://localhost:3333/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Plant added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Error adding plant",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch(() => {
        setLoading(false);
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
      </Helmet>

      <div className="bg-base-100 text-base-content p-8 rounded-xl shadow-md max-w-4xl mx-auto my-10">
        <div>
          <h1 className="text-primary text-3xl font-bold text-center mb-[3vh]">Add Product</h1>
        </div>
        <form onSubmit={handleAddProduct} className="space-y-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label font-semibold mb-2 block">Product Image</label>
            <input
              type="text"
              name="img"
              required
              className="input input-bordered w-full"
              placeholder="Enter product image"
            />
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
              <label className="label font-semibold mb-2 block">
                Product Name
              </label>
              <input
                type="url"
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
                type="url"
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
                type="url"
                name="sellQuantity"
                required
                className="input input-bordered w-full"
                placeholder="Enter minimum selling quantity"
              />
            </fieldset>

            <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
              <label className="label font-semibold mb-2 block">
                Brand Name
              </label>
              <input
                type="url"
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
                <option value="succulent">Electronics & Gadgets</option>
                <option value="fern">Home & Kitchen Appliances</option>
                <option value="flowering">Fashion & Apparel</option>
                <option value="cactus">Industrial Machinery & Tools</option>
                <option value="herb">Health & Beauty</option>
                <option value="foliage">Automotive Parts & Accessories</option>
                <option value="tree">Office Supplies & Stationery</option>
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
                type="rating"
                name="wateringFrequency"
                min="1"
                max={5}
                required
                className="input input-bordered w-full"
                placeholder="Enter product rating"
              />
            </fieldset>

            <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 text-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Adding Plant..." : "Add Plant"}
          </button>

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

            
          </div>

          
        </form>
      </div>
    </>
  );
};

export default AddProduct;