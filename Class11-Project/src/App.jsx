import React from 'react';
import { Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Product from './Pages/Product';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import Men from './Pages/Men';
import Women from './Pages/Women';
import PageNotFound from './Pages/PageNotFound';
import Gender from './Pages/Gender';

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>

<Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Product/Men' element={<Men/>}/>
        <Route path='/Product/Men/Gender' element={<Gender/>}/>
      


        <Route path='/Product/Women' element={<Women/>}/>
        <Route path='*' element={<PageNotFound/>}/>
  
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
};

export default App;