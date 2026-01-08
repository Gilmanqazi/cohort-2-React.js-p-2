import React from 'react'
import { useContext } from 'react'
import { ProductContextdata } from '../context/ProductContext.jsx'
import { Link } from 'react-router-dom'



const Products = () => {
  
  const ProductsData = useContext(ProductContextdata)
  
console.log(ProductsData[0])
  return (
    <div className='flex flex-wrap justify-center text-center h-full w-full bg-white'>
    {ProductsData.map((elem,idx)=>{
      return <Link key={idx} href="" to={`/products/${elem.id}`}> 
      <div className='h-[70vh] rounded w-80 bg-zinc-800 m-5 p-2 inline-block hover:scale-105 duration-300 cursor-pointer'>
        {/* <h1 className='text-white font-semibold text-lg text-center'>{elem.category}</h1> */}
      <img className='h-80 w-60 object-fit ' src={elem.image} alt="" />
      <h2 className='text-white font-semibold text-lg'>{elem.title}</h2>
      <h5 className='text-white font-semibold text-sm'>${elem.price}</h5>
     
      </div>
      </Link>
    })}
        </div>
    
  )
}

export default Products