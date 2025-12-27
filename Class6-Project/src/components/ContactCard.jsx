import React from 'react'

const ContactCard = ({ users , emails} ) => {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center ">

      <div className='h-100 w-70 bg-gray-600 rounded-2xl '>

        <div className='h-20 w-full  rounded-2xl  px-4  flex justify-between items-center border-b-2 '>
        <h1 className='font-bold'>My Contacts</h1>
      <div className='h-15 w-15 rounded-full bg-blue-600  '>
 
      <img className='h-full w-full object-cover rounded-full ' src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" />
 
      </div>
      </div>
      <div>
     <div className='flex flex-col gap-2'>
      {users.map((user, index) => (
        <h1 className='px-2 font-bold border-b-2' key={index}> {index+1} =  {user}</h1>
      ))}
    

{emails.map((email, index) => (
        <p className='px-2 font-bold border-b-2' key={index} > {index+1} = {email}</p>
      ))}
       </div>
      </div>
      </div>
    </div>
  )
}

export default ContactCard



