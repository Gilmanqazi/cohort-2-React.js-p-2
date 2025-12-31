import React from 'react'

const Country = (props) => {

  return (
    <div className='h-[30vh] w-[20vw] rounded'>
    <div className='h-35 w-full '>
<img className='h-full w-full overflow-hidden rounded object-cover' src={props.flags} alt="" />
    </div>
    <h1 className='text-center font-semibold py-2'>{props.countryName}</h1>
      
    </div>
  )
}

export default Country
