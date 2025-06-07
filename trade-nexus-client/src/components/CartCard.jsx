import { Link } from 'react-router'

const CartCard = ({ cart }) => {
  const { _id, brand, category, sellQuantity, img , description} = cart;

  const handleRemove = () => {

  }

  return (
    <div className='card card-side bg-base-100 shadow-sm border-2'>
      <figure>
        <img src={img} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{category}</h2>
          <p>Brand Name: {brand}</p>
          <p>Minimum Selling Quantity: {sellQuantity}</p>
          <p>Description: {description}</p>
        </div>
        <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
            <button onClick={handleRemove} className='btn join-item'>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard