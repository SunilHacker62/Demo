import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const Home = () => {
    const user = useContext(UserContext)
  return (
    <>
    <div>Home Page</div>
    <div>{user.name}|{user.age}</div>
    </>
  )
}

export default Home