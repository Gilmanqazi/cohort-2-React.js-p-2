import React, { useState } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [usrname, setUsrname] = useState('Gilman')

 const getuserName = (name)=>{
setUsrname(name)
 }
  return (
    <div>
      <Hero usrname={usrname} getuserName={getuserName}  />
    </div>
  );
};

export default App;