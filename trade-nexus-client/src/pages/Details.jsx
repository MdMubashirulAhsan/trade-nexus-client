import React, {  useState } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'
import useAuth from '../hooks/useAuth'

const Details = () => {
  const { user } = useAuth();

  const { data } = useLoaderData()
  const [coffee, setCoffee] = useState(data)
  const { name, photo, details, _id, email, quantity,  } = coffee || {}
//   const [liked, setLiked] = useState(likedBy.includes(user?.email))
//   const [likeCount, setLikeCount] = useState(likedBy.length)
  // console.log('is liked?: ', liked)
  // console.log(likedBy)
  // console.log(user?.email)
  // console.log(coffee)

  

  // Handle like/dislike
  

  // handle order
  const handleBuy = () => {
    if (user?.email === email) return alert('tomar nijer coffee')
    const orderInfo = {
      coffeeId: _id,
      customerEmail: user?.email,
    }
    // save order info in db
    axios
      .post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`, orderInfo)
      .then(data => {
        console.log(data)
        setCoffee(prev => {
          return { ...prev, quantity: prev.quantity - 1 }
        })
      })
  }
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-around items-center py-12 gap-12'>
        <div className='flex-1'>
          <img className='w-full' src={photo} alt='' />
        </div>
        <div className='flex-1'>
          <p>Name: {name}</p>
          <p>Details: {details}</p>
          <p>Quantity: {quantity}</p>
          {/* <p>Likes: {likeCount}</p> */}

          <div className='flex gap-4'>
            
            <button onClick={handleBuy} className='btn btn-secondary'>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details