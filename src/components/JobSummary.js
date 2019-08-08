import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Context from '../context/context'

const JobSummary = () => {
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
  )
}

export default JobSummary
