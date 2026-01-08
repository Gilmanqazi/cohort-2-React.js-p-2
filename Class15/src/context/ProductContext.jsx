 import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { useEffect } from 'react'
import { getData } from '../API/Product.API'

 export const ProductContextdata = createContext()

 
 const Productcontext = ({children}) => {

  const [productsData, setProductsData] = useState([])

  

const setData = async ()=>{
  setProductsData(await getData())
}
    
  
useEffect(()=>{
setData()
},[])

   return (
     <div>
      <ProductContextdata.Provider value={productsData}>
      {children}
      </ProductContextdata.Provider>
    
     </div>
   )
 }
 
 export default Productcontext