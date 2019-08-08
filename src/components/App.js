import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import Context from '../context/context'
import Navigation from './Navigation'
import JobsList from './JobsList'

const App = () => {
  const { uid, state } = useContext(Context)
  const [ totalHours, setTotalHours ] = useState('')

  const getTotalHours = async () => {
    const hours = await state.map(({ hoursWorked }) => {
      return parseFloat(hoursWorked)
    }).reduce((a, b) => a + b)

    setTotalHours(hours)
  }

  useEffect(() => {
    if (state.length > 0) getTotalHours()
  }, [state])

  return (
    <>
      <Navigation />

      <div className="bg-light pt-3 pb-3">
        <Container>
          <h3>
            Viewing { state.length } jobs totalling { totalHours } hours
          </h3>
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
