//useEffect-> kisi bhi task ko kisi bhi kam ko side stack me chalane ke liye 

import axios from "axios";
import { useEffect, useState } from "react";

//React -> UI banana
//useEffect-> Side Stack me chalane ke liye 



const App = () => {

  const [userName, setUserName] = useState([])

useEffect(function(){
getData()
},[])

  async function getData(){
const response = await axios.get('https://dog.ceo/api/breeds/image/random') 
setUserName(prev =>[...prev,response.data.message])
console.log(response.data.message)
  }


  return (
    <div className='h-screen w-full bg-black  text-white'>


{userName.map(function(user,idx){
return <img key={idx} src={user} alt="" />
})}
    </div>
  );
};

export default App;