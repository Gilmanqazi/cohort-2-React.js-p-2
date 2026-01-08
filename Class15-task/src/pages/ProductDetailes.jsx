import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'


const ProductDetailes = () => {

  const ProductData = useContext(ProductDataContext)
  
const {productId} = useParams()

let selectedProduct = ''
if(ProductData.length > 0) {
  selectedProduct = ProductData.find((elem) => elem.id == productId)
}

  return (
    <div>
 <div>
        <img className='img' src={selectedProduct.image}/>
          <h2>{selectedProduct.title}</h2>
          <h5>${selectedProduct.price}</h5>
        </div>
    </div>
  )
}

export default ProductDetailes