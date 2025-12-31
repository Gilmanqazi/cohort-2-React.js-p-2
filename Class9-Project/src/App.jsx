import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './components/Country';

const App = () => {
  
const [allCountry, setAllCountry] = useState([])
const [search, setSearch] = useState("")

  async function apiHandle(){
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
  setAllCountry(response.data)

  }
  useEffect(()=>{
    apiHandle()
  },[])


  const filteredCountry = allCountry.filter((country) =>
    country.name.official
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  

  return (
    <div className='h-full w-full bg-black text-white flex py-6 flex-col' >
     

     <div className='flex justify-center mb-6 text-white '>
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='px-4 py-2 rounded text-white  border-2 w-72'
        />
      </div>



      <div className='flex flex-wrap gap-4 justify-center'>
        {filteredCountry.map((elem, idx) => (
          <Country
            key={idx}
            flags={elem.flags.png}
            countryName={elem.name.official}
          />
        ))}
      </div>
       {filteredCountry.length === 0 && (
        <p className="text-center mt-6">No country found</p>

       )}
    </div>
  );
};

export default App;