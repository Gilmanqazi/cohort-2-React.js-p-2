import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 px-10 gap-5 bg-blue-800 '>
      <div>
        <h1>Gilman</h1>
      </div>
      <div className='flex gap-8'>
    <Link to='/'>Home</Link>
    <Link to='/About'>About</Link>
    <Link to='/Product'>Product</Link>


      </div>
    </div>
  )
}

export default Navbar