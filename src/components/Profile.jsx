import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const user = useSelector((state) => state.user.value)
    console.log(user)
  return (
    <div>
        <h1>Profile</h1>
        <h3>Name : {user?.name}</h3>
        <h3>Age : {user?.age}</h3>
        <h3>Mail : {user?.mail}</h3>
    </div>
  )
}
