import React, { useContext } from 'react'
import { ProductContextdata } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductData = () => {
  const ProductData = useContext(ProductContextdata)
  const {ProductId} = useParams()

  let selecteProduct = 'Loading...'
 if(ProductData.length > 0){
  selecteProduct = ProductData.find((elem)=> elem.id == ProductId)
 }

  return (
    <div className='h-110 rounded w-80 bg-zinc-600 m-5 p-2 inline-block'>
    <img className='h-80 w-60 object-fit' src={selecteProduct.image} alt="" />
    <h2 className='text-white font-semibold text-lg'>{selecteProduct.title}</h2>
    <h5 className='text-white font-semibold text-sm'>${selecteProduct.price}</h5>
    </div>
  )
}

export default ProductData