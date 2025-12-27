import React, { useState } from 'react';



const Form = ({ allUsers, setAllUsers,  allEmails ,setAllEmails}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")


  function submitHandler(e) {
    e.preventDefault()
    setAllUsers([...allUsers, username ])
    setUsername("")

  }
  function submitEmailHandler(e) {
    e.preventDefault()
    setAllEmails([...allEmails,email])
   setEmail("")
  }

  return (
    <div>
    <form onSubmit={submitHandler} className='h-20 flex justify-center items-center gap-4 bg-black text-white'>
      <input className='py-3 px-6 border-2 rounded-3xl'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <button className='py-1 px-4 bg-red-600 rounded-2xl font-semibold'>Submit</button>
    </form>


    <form onSubmit={submitEmailHandler} className='h-20 flex justify-center items-center gap-4 bg-black text-white'>
      <input type='email' className='py-3 px-6 border-2 rounded-3xl'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button className='py-1 px-4 bg-red-600 rounded-2xl font-semibold'>Submit</button>
    </form>

    </div>
    
  )
}

export default Form
