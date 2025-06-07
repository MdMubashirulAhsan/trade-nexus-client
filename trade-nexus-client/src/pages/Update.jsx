
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData(); 
 
console.log(product)
  const navigate = useNavigate();

 

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedProduct = Object.fromEntries(formData.entries());

    axios.put(`${import.meta.env.VITE_API_URL}/products/${product.data._id}`, updatedProduct)
      
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            "Product information updated successfully.",
            "success"
          );
          navigate("/all-products"); 
        }
      });
  };

  // if (!products) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
    <Helmet>
                <title>
                    Update - Trade Nexus
                </title>
            </Helmet>
    <div>
      
      <form
      onSubmit={handleUpdate}
      className="max-w-3xl mx-auto p-6 bg-base-200 rounded-box shadow"
    >
      <h2 className="text-primary text-3xl font-bold mb-4 text-center">Update Plant</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
            <label className="label text-accent-content font-semibold mb-2 block">Product Image</label>
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
              <label className="label text-accent-content font-semibold mb-2 block">
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
              <label className="label text-accent-content font-semibold mb-2 block">
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
              <label className="label text-accent-content font-semibold mb-2 block">
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
              <label className="label text-accent-content font-semibold mb-2 block">
                Brand Name
              </label>
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
              <label className="label text-accent-content font-semibold mb-2 block">Category</label>
              <select
                name="category"
                required
                className="select select-bordered w-full"
                defaultValue={product.category}
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
              <label className="label text-accent-content font-semibold mb-2 block">
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
              <label className="label text-accent-content font-semibold mb-2 block">
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

            

            
      </div>

      <button type="submit" className="btn btn-primary w-full mt-6">
        Submit 
      </button>
      
    </form>
    </div>
    </>
  );
};

export default Update;
