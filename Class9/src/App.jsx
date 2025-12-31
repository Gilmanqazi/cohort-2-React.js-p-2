//CSR ->  (Client side rendering)
//SSr -> (Server side rendering)

//API Handling (Axios)

import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import UserCard from './components/UserCard';

const App = () => {

  const [allData, setAllData] = useState([])


async function getData (){
const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=8")
setAllData(response.data)
console.log(response.data)
}

useEffect(()=>{
getData()
},[])

  return (
    <div className='bg-black h-screen w-full p-5 flex flex-col '>
    {/* <button className='py-1 px-4 flex justify-center text-white w-fit bg-emerald-700 rounded ' onClick={getData}>Get Data</button> */}

<div className='flex flex-wrap rounder gap-2 justify-center'>
{allData.map(function(elem,idx){
  return <div key={idx}>
    <UserCard author={elem.author} />
  </div>
})}
</div>
  
    </div>

  );
};

export default App;