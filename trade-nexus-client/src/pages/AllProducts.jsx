import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const AllProducts = () => {
  const data = useLoaderData() || [];
  const products = data || [];
  const [viewMode, setViewMode] = useState("table");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false); // or "card"

  const navigate = useNavigate();

  const displayedProducts = showAvailableOnly
    ? products.filter((product) => product.quantity > 100)
    : products;

  return (
    <>
      <Helmet>
        <title>All Products - Trade Nexus</title>
      </Helmet>

      <div className="p-6 bg-base-100 text-base-content rounded-md shadow-sm">
        <h1 className="text-2xl font-bold mb-3 text-base-content text-start ">
          All Products
        </h1>

        <div className="flex flex-col gap-5 py-5">
          <button
            onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
            className="btn btn-outline max-w-sm"
          >
            Switch to {viewMode === "table" ? "Card" : "Table"} View
          </button>

          <button
            onClick={() => setShowAvailableOnly((prev) => !prev)}
            className="btn btn-outline max-w-sm"
          >
            {showAvailableOnly
              ? "Show All Products"
              : "Show Available Products"}
          </button>
        </div>

        {viewMode === "table" ? (
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse  ">
              <thead>
                <tr className="bg-base-200 text-base-content">
                  <th className=" px-4 py-2">
                    Product Image
                  </th>
                  <th className=" px-4 py-2">
                    Product Name
                  </th>
                  <th className=" px-4 py-2">
                    Brand Name
                  </th>
                  <th className=" px-4 py-2">
                    Category
                  </th>
                  <th className=" px-4 py-2">
                    Ratings
                  </th>
                  <th className=" px-4 py-2">
                    Product Quantity
                  </th>
                  <th className=" px-4 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.length ? (
                  displayedProducts.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-base-200 text-center cursor-pointer"
                    >
                      <td className=" px-4 py-2 text-center">
                        <img src={product.img} alt="" className="w-20 h-20 mx-auto" />
                      </td>
                      <td className=" px-4 py-2">
                        {product.name}
                      </td>
                      <td className=" px-4 py-2">
                        {product.brandName}
                      </td>
                      <td className=" px-4 py-2">
                        {product.category}
                      </td>
                      <td className=" px-4 py-2">
                        {product.rating}
                      </td>
                      <td className=" px-4 py-2">
                        {product.quantity}
                      </td>

                      <td className=" px-4 py-2">
                        <button
                          className="btn  btn-primary"
                          onClick={() => navigate(`/update/${product._id}`)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-4 text-accent text-2xl font-bold text-opacity-60"
                    >
                      No product found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                className="card bg-base-200  shadow-sm "
              >
                <div className="relativew-64 h-64 relative overflow-hidden rounded-lg">
                  <figure className="p-2 ">
                  <img src={product.img} alt="" className="w-full h-full object-cover"/>
                </figure>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p><span className="font-bold ">Brand Name:</span>  {product.brandName}</p>

                    <p className="text-accent">{product.category}</p>
                  <div className="flex  justify-start items-center gap-2">
                    <div>
                      <p className="text-base-content"><span className="font-bold ">Ratings:</span></p>
                    </div>
                    <div>
                      <ReactStars
                      count={5}
                      value={product.rating}
                      edit={false}
                      readOnly
                      size={24}
                      color2={"#ffd700"}
                    />
                    </div>
                  </div>{" "}
                  <p><span className="font-bold ">Main Quantity:</span> {product.quantity}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn  btn-primary w-full"
                      onClick={() => navigate(`/update/${product._id}`)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
