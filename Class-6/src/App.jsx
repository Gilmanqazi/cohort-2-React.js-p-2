//Form Handling 
//Tow Way Binding
//input onChange
//value in input
import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')

  const [allUsers, setAllUsers] = useState([])


  function submitHandler (e){
    e.preventDefault()
const oldUsers = [...allUsers]

oldUsers.push(username)

   setAllUsers(oldUsers)
setUsername('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Name' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} />
        
        <button>Submit</button>
      </form>
      {allUsers.map(function(elem,idx){
        return <h1 key={idx}>{elem}</h1>
      })}
    </div>
  )
}

export default App
