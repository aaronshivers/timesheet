import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Context from '../context/context'
import LoginLogoutButton from './LoginLogoutButton'

const Navigation = () =>{
  const { uid } = useContext(Context)

  return (
    <Navbar>
      <Navbar.Brand className="mr-auto" href="/">
        <h3>
          Timesheet
        </h3>
      </Navbar.Brand>
      <LoginLogoutButton uid={ uid } />
    </Navbar>
  )
}

export default Navigation
