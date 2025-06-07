import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryCard = () => {
const [products, setProducts] = useState([])

    useEffect(() => {
    // Axios GET request returns a promise
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => {
        setProducts(response.data); // Handle success
        
      })
      .catch((err) => {
        
        console.error(err); // Log error
      });
  }, []);
                            
  console.log(products)

    return (
        <>
        
        <div className='grid grid-cols-3 gap-3'>
          {products.map(p =><>
          <div key={p.id} className="card bg-base-100 w-96 shadow-sm">
  {/* <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure> */}
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="badge badge-secondary">{p.category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
          
          </>)}
        </div>
        
        </>
    );
};

export default CategoryCard;