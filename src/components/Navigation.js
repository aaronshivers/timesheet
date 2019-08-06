import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Context from '../context/context'
import LoginLogoutButton from './LoginLogoutButton'

const Navigation = () =>{
  const { uid } = useContext(Context)

  return (
    <Navbar>
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            <h3>
              Timesheet
            </h3>
          </Link>
        </Navbar.Brand>
      <LoginLogoutButton uid={ uid } />
    </Navbar>
  )
}

export default Navigation
