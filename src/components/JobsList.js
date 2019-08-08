import React, { useEffect, useContext } from 'react'
import { Container, Card, ListGroup } from 'react-bootstrap'
import Context from '../context/context'
import ListGroupItem from './ListGroupItem'
import { getJobs } from '../actions/jobs'

const JobsList = () => {
  const { uid, state, dispatch } = useContext(Context)

  // Populate jobs on page load
  useEffect(() => {
    getJobs()(dispatch)(uid)
  }, [])

  return (
    <Container className="mb-3">
      <Card className="mt-3">
        <Card.Header>Jobs</Card.Header>
        <ListGroup variant="flush">
          {
            state && state.map(job => (
              <ListGroupItem key={ job.id } { ...job } />
            ))
          }
        </ListGroup>
      </Card>
    </Container>
  )
}

export default JobsList
