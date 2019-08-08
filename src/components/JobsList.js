import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'
import Context from '../context/context'
import DeleteButton from './DeleteButton'
import ListGroupItem from './ListGroupItem'
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
          state && state.map(
            ({ id, ...job }) => {
              return (
                <ListGroupItem key={ id } id={ id } job={ job } />
              )
            }
          )
        }
      </ListGroup>
    </Card>
  )
}

export default JobsList
