import React, { useState, useEffect, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Context from '../context/context'
import Navigation from './Navigation'
import { getJobs, updateJob } from '../actions/jobs'

const EditJobPage = () => {
  const { uid, state, dispatch } = useContext(Context)
  const [ id, setID ] = useState('')
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    updateJob(id, { customer, description })(dispatch)(uid)
  }

  // Populate jobs on page load
  useEffect(() => {
    getJobs()(dispatch)(uid)
  }, [])

  useEffect(() => {
    if (state[0]) {
      setID(state[0].id)
      setCustomer(state[0].customer)
      setDescription(state[0].description)
    }
  }, [state[0]])

  return (
    <>
      <Navigation />
      <Container>
        <h1>Edit Job</h1>
        <Form onSubmit={ handleFormSubmit }>
          <Form.Group controlId="customer">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer..."
              value={ customer }
              onChange={ e => setCustomer(e.target.value) }
            >
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description..."
              value={ description }
              onChange={ e => setDescription(e.target.value) }
            >
            </Form.Control>
          </Form.Group>
          <Button
            type="submit"
            size="lg"
          >
            Update Job
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default EditJobPage
