import React from 'react'
import { Link} from 'react-router-dom'

const Home = ({data}) => {



  return (
    <div className='container border mx-auto'>
      <div  className='grid grid-cols-4 gap-3'>
      {
        data.products?.map((item)=> (
            <div key={item.id} className=' shadow shadow-slate-300 rounded-2xl p-2.5'>
              <img className=' h-50 m-auto' src={item.images[0]} alt="" loading='lazy' />
              <div className='flex justify-between'>
                <b>{item.price}</b>
                <b className='ms-auto'>{item.rating}</b>
              </div>
              <p>{item.title}</p>
              <Link to={`/product/${item.id}`}>
               <button className='bg-slate-500 text-white font-medium px-5 shadow rounded-sm py-1 mx-auto'>More</button>
              </Link>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home