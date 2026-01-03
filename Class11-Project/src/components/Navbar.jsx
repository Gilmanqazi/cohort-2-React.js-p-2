import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full bg-emerald-700 text-white flex justify-between py-5 px-10'>
      
      <div className='text-2xl font-semibold'>
        <h1>Logo</h1>
      </div>

      <div className='flex gap-5 text-xl font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Blog'>Blog</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

    </div>
  )
}

export default Navbar