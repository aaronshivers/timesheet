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

      <div className="bg-light pt-3 pb-3">
        <Container>
          <Link
            to="/newjob"
            className="btn btn-primary btn-lg"
          >
            New Job
          </Link>
        </Container>
      </div>

      <Container>
        <JobsList />
      </Container>
    </>
  )
}

export default App
