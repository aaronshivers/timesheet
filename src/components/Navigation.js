import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Context from '../context/context'
import LoginLogoutButton from './LoginLogoutButton'

const Navigation = () => {
  const { uid } = useContext(Context)

  return (
    <Navbar bg="primary" variant="primary">
      <Container>
        <Navbar.Brand className="mr-auto">
          <Link to="/" className="text-decoration-none">
            <h3 className="text-white">
              Timesheet
            </h3>
          </Link>
        </Navbar.Brand>
        <LoginLogoutButton uid={ uid } />
      </Container>
    </Navbar>
  )
}

export default Navigation
