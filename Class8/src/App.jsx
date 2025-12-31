// localStorage.clear() - to clear localStorage
//localStorage.setItem("key,"value") - to add new item or overwrite to existing ones
//localStorage.getItem("key) - to get any item
//localStorage.removeItem("key") - to remove any item


//localStorage.setItem("key",JSON.stringify(value))

//localStorage kisi bhi object ko direct save nhi karta uske save karne ke liye JSON.stringify karna padta hai 
// or agar hume usko real object bana na hai to JSON.parce karna pdata hai

//JSON.stringfy : Array/Object -> String
//JSON.stringfy :  -> String Array/Object

import React, {  useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [userName, setUserName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userdesc, setUserDesc] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || []
console.log(localData)

  


  const [allUsers, setAllUsers] = useState([localData]);


  function submitHandeler(e) {
    e.preventDefault();
    
    const oldData = [...allUsers];

    oldData.push({userName,userRole,userdesc,imageURL})


setAllUsers(oldData)
localStorage.setItem("all-users", JSON.stringify(oldData))


    setUserName("");
    setImageURL("");
    setUserRole("");
    setUserDesc("");
  }

 const deleteHandler = (idx)=>{
 const copyUser = [...allUsers]
 copyUser.splice(idx,1)
 setAllUsers(copyUser)

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
