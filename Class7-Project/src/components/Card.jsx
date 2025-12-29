import React from 'react'

const Card = (props) => {
 
  return (
    <div  className=' w-[19vw] h-80 bg-white rounded-xl flex items-center flex-col gap-4 p-5 text-black'>
    <img className='h-15 w-15 rounded-full object-center object-cover' src={props.elem.imageURL} alt="" /> 

   <h1 className='text-xl font-semibold'>{props.elem.userName}</h1>
   <h5 className='text-base font-semibold text-blue-500'>{props.elem.userRole}</h5>
   <p className='text-sm font-medium leading-tight text-center'>{props.elem.userdesc}</p>
   <button onClick={()=>{
    props.deleteHandler(props.idx)
   }} className='px-4 py-1 bg-red-600 rounded font-semibold active:scale-95'>RemoveUser</button>
   
 </div>
  )
}

export default Card
