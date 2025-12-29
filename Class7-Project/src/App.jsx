import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [userName, setUserName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userdesc, setUserDesc] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("allUsers"))
    if(savedUser){
      setAllUsers(savedUser)
    }
  },[])

  function submitHandeler(e) {
    e.preventDefault();
    
const newUser = ([...allUsers,{userName,userRole,userdesc,imageURL}])
setAllUsers(newUser)
localStorage.setItem("allUsers",JSON.stringify(newUser))
    setUserName("");
    setImageURL("");
    setUserRole("");
    setUserDesc("");
  }

 const deleteHandler = (idx)=>{
 const copyUser = [...allUsers]
 copyUser.splice(idx,1)
 setAllUsers(copyUser)
 localStorage.setItem("allUsers",JSON.stringify(copyUser))
 }

  return (
    <div className="h-full w-full bg-black text-white">
      <form
        className="p-10 flex gap-4 flex-col  items-center"
        onSubmit={(e) => {
          submitHandeler(e);
        }}
      >
        <input
          className="border-2 py-2 px-5 rounded w-fit "
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <input
          className="border-2 py-2 px-5 rounded "
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />

        <input
          className="border-2 py-2 px-5 rounded "
          type="text"
          placeholder="Enter Role"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        />

        <input
          className="border-2 py-2 px-5 rounded "
          type="text"
          placeholder="Enter Description"
          value={userdesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
        />

        <button className="bg-green-900 py-1 px-5 rounded active:scale-95">
          Submit
        </button>
      </form>

      <div className="p-2 flex gap-4 flex-wrap  items-center">

   {allUsers.map(function(elem,idx){
    return    <Card idx={idx} elem ={elem} deleteHandler = {deleteHandler}/>
   })}
      </div>
    
    </div>
  );
};

export default App;
