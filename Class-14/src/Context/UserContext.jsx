import React, { createContext } from 'react'


export const UserContextData = createContext()

const data = "Gilman"

const UserContext = ({children}) => {
  return (
    <div>
      <UserContextData.Provider value={data}>
   {children}
      </UserContextData.Provider>
      </div>
  )
}

export default UserContext