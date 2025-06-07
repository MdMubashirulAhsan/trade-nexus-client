import React from 'react';

const MyProductCard = ({product}) => {
    const {img, _id, name, brand, category, price, description, rating} = product;
    return (
        <div>
            <div className='card card-side bg-base-100 shadow-sm border-2'>
      <figure>
        <img src={img} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {brand}</p>
          <p>Quantity: {category}</p>
          <p>Quantity: {description}</p>
          <p>Quantity: {rating}</p>

        </div>
        {/* <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
            <Link to={`/product/${_id}`}>
              <button className='btn join-item'>View Details</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className='btn join-item'>Edit</button>
            </Link>
            <button className='btn join-item'>X</button>
          </div>
        </div> */}
      </div>
    </div>
        </div>
    );
};

export default MyProductCard;