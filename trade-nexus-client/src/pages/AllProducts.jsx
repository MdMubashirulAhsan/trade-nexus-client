// import { format } from "date-fns";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  const products = useLoaderData() || [];
  console.log(products.data)
// const {_id, img, name, brand, category, rating, quantity} = products.data;
    // const now = format(new Date(), "eee, dd MMMM, yyyy || hh.mm.ss a");


  return (
    <>
    <Helmet>
                <title>
                    All Products - Trade Nexus
                </title>
            </Helmet>
    <div className="p-6 bg-base-100 text-base-content rounded-md shadow-sm">
  <h1 className="text-2xl font-bold mb-3 text-primary text-center">All Products</h1>

  {/* <div className="text-center text-secondary mb-3">{now}</div> */}

  <div className="overflow-x-auto">
    <table className="table w-full border-collapse border border-accent">
      <thead>
        <tr className="bg-base-200 text-base-content">
            <th className="border border-accent px-4 py-2">Product Image</th>
          <th className="border border-accent px-4 py-2">Product Name</th>
          <th className="border border-accent px-4 py-2">Brand Name</th>
          <th className="border border-accent px-4 py-2">Category</th>
          <th className="border border-accent px-4 py-2">Ratings</th>
          <th className="border border-accent px-4 py-2">Product Quantity</th>
          <th className="border border-accent px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.data.length ? (
          products.data.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-base-200 text-center cursor-pointer"
            >
              <td className="border border-accent px-4 py-2">{product.img}</td>
              <td className="border border-accent px-4 py-2">{product.name}</td>
              <td className="border border-accent px-4 py-2">{product.brand}</td>
              <td className="border border-accent px-4 py-2">{product.category}</td>
              <td className="border border-accent px-4 py-2">{product.rating}</td>
              <td className="border border-accent px-4 py-2">{product.quantity}</td>

              <td className="border border-accent px-4 py-2">
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
            <td colSpan="4" className="text-center py-4 text-base-content text-opacity-60">
              No product found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
    </>

  );
};

export default AllProducts;