import React from 'react'
import { useParams } from 'react-router-dom'
const Product = ({data}) => {

    const {id} = useParams()

   let item = data.products?.find((el) => el.id==id)

console.log(item)
    
  return (
    <div className='container border mx-auto'>
    <div  className='grid grid-cols-2 gap-3'>
       
        <div>
            <img className=' m-auto' src={item.images[0]} alt="" loading='lazy' />
        </div>
        <div className=' shadow shadow-slate-300 rounded-2xl p-10'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-xl font-medium'>{item.title}</h1>
                <p>{item.description}</p>
                <b>$ {item.price} /-</b>
                <b>⭐ {item.rating}</b>
              </div>
        </div>
    </div>
  </div>
  )
}

export default Product