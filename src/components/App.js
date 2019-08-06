import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import Context from '../context/context'
import Navigation from './Navigation'
import JobsList from './JobsList'

const App = () => {
  const { uid } = useContext(Context)

  return (
    <>
      <Navigation />
      <Container>
        <Link
          to="/newjob"
          className="btn btn-primary btn-lg"
        >
          New Job
        </Link>
        <JobsList />
      </Container>
    </>
  )
}

export default App
