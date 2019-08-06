import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, ListGroup } from 'react-bootstrap'
import Context from '../context/context'
import DeleteButton from './DeleteButton'
import { getJobs } from '../actions/jobs'

const JobsList = () => {
  const { uid, state, dispatch } = useContext(Context)

  // Populate jobs on page load
  useEffect(() => {
    getJobs()(dispatch)(uid)
  }, [])

  return (
    <Card className="mt-3">
      <Card.Header>Jobs</Card.Header>
      <ListGroup variant="flush">
        {
          state && state.map(({ id, customer, description }) => (
            <ListGroup.Item key={ id }>
              <Link to={ `/editjob/${ id }` }>
                <h3>Customer</h3>
                <span className="text-break align-middle">{ customer }</span>
                <h4>Job Description</h4>
                <span className="text-break align-middle">{ description }</span>
              </Link>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>
  )
}

export default JobsList
