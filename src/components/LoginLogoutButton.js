import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { login, logout } from '../actions/auth'

const LoginLogoutButton = uid => {
  const [ loggedIn, setLoggedIn ] = useState(false)

  useEffect(() => {
    setLoggedIn(Object.keys(uid).length !== 0)
  }, [])

  return (
    <Button
      size="lg"
      variant={ loggedIn ? "outline-primary" : "primary" }
      onClick={ loggedIn ? logout : login }
    >
      {
        loggedIn ? 'Logout' : 'Login'
      }
    </Button>
  )
}

export default LoginLogoutButton
