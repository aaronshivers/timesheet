import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'
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
          state && state.map(({ id, customer, description, hoursWorked }) => (
            <ListGroup.Item key={ id }>
              <Link
                to={ {
                  pathname: `/editjob/${ id }`,
                  state: { id }
                } }
              >
                <h5>Customer: { customer }</h5>
                <h6>Job Description: { description }</h6>
                <span className="text-break align-middle">
                  Hours Worked: { hoursWorked }
                </span>
              </Link>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>
  )
}

export default JobsList
