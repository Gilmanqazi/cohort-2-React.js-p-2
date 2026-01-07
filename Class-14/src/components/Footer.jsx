import React, { useContext } from 'react'
import {UserContextData} from '../Context/UserContext.jsx'


const Footer = () => {
const data = useContext(UserContextData)
  return (
    <div className='h-20 bg-blue-600'>Footer {data} </div>
  )
}

export default Footer