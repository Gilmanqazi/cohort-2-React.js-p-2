import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './pages/Products';
import ProductData from './pages/ProductData';

const App = () => {

 

  return (
 <div className='h-screen w-full bg-black text-white'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/products/:ProductId' element={<ProductData/>}/>

</Routes>
 </div>
  );
};

export default App;