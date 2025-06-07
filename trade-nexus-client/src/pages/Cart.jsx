import axios from 'axios'
// import { use } from 'react'
import { useEffect, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
// import OrderCard from './OrderCard'
import useAuth from '../hooks/useAuth'
import CartCard from '../components/CartCard'

const Cart = () => {
  const { user } = useAuth();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/cart/${user?.email}`)
      .then(data => {
        // console.log(data?.data)
        setCarts(data?.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user])
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
        {/* Coffee Cards */}
        {carts.map(cart => (
          <CartCard key={cart._id} cart={cart} />
        ))}
      </div>
    </div>
  )
}

export default Cart