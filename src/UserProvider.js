import React from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({children}) => {

    const user = {
        name : "sunil",
        age : "28"
    }
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider