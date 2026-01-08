import React, { createContext, useEffect, useState,  } from 'react';

import { getAllProductData,  } from '../API/ProductAPI';


export const ProductDataContext = createContext()

const ProductContext = ({children}) => {

  const [productdata, setProductdata] = useState([])

  const [selectedProduct, setSelectedProduct] = useState(null)



   const setData = async ()=>{
setProductdata(await getAllProductData())
   }
  
  useEffect(()=>{
setData()
  },[])


  return (
    <div>
      <ProductDataContext.Provider value={productdata}>
      {children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext;
