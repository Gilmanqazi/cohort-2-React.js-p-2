import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
 
  const navigate = useNavigate();

  return (
    <div className='h-full w-full flex flex-col justify-center items-center bg-gray-200'>
      <h2 className='text-5xl font-semibold'>This Is Home Page</h2>
      <button className='py-1 px-4 bg-emerald-500 rounded border-none active:scale-95 mt-5 font-medium text-xl cursor-pointer'  onClick={()=>{
        navigate('/products')
      }}>View Products</button>
    </div>
  )
}

export default Home