import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authToggle } from '../feature/auth'

const LoginButton = () => {
    const isAuth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(authToggle())
    }

  return (
    <div>
        <button onClick = {handleClick}>{isAuth?"Logout":"Login"}</button>
        </div>
  )
}

export default LoginButton