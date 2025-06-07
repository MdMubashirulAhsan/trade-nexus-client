import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import MyProductCard from '../components/MyProductCard';
import { AuthContext } from '../contexts/AuthContext';

const MyProduct = () => {
    const data = useLoaderData()
    const {user} = use(AuthContext)
    // const [myProducts, setMyProducts] = useState(data?.data || [])
    console.log(user)
    
    //   const [products, setProducts] = useState(data?.data || [])
//   console.log(coffees)
console.log(data)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
        {}
        { data?.data.map(p => (
          <MyProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  )
};

export default MyProduct;