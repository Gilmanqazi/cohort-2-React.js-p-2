import React, { useState } from 'react'

const Hero = (props) => {

const [newUsername, setNewUsername] = useState('')



function submitHandler(e){
  e.preventDefault()
  setNewUsername('')
props.getuserName(newUsername)
}

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-200 border-2'>
      <h1>Name is {props.usrname}</h1>
      <form onSubmit={(e)=>{
submitHandler(e)
      }} className='flex flex-col gap-4 bg-white p-8 rounded shadow-md'>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>{
setNewUsername(e.target.value)
        }} value={newUsername} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Hero