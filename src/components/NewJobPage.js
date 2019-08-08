import React, { useState, useEffect, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Datetime from 'react-datetime'
import moment from 'moment'
import Context from '../context/context'
import Navigation from './Navigation'
import { addJob } from '../actions/jobs'

const NewJobPage = ({ history }) => {
  const { uid, state, dispatch } = useContext(Context)
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ timeIn, setTimeIn ] = useState(moment())
  const [ timeOut, setTimeOut ] = useState(moment().add(1, 'hour'))

  const handleFormSubmit = e => {
    e.preventDefault()
    addJob({ customer, description, timeIn, timeOut })(dispatch)(uid)

    history.push('/')
  }

  return (
    <>
      <Navigation />
      <div className="bg-light pt-3 pb-3">
        <Container>
          <h1>New Job</h1>
        </Container>
      </div>

      <Container className="mt-3">
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
          <Form.Group controlId="timeIn">
            <Form.Label>Time In</Form.Label>
            <br />
            <Datetime
              value={ timeIn }
              onChange={ time => setTimeIn(time) }
            />
          </Form.Group>
          <Form.Group controlId="timeIn">
            <Form.Label>Time Out</Form.Label>
            <br />
            <Datetime
              value={ timeOut }
              onChange={ time => setTimeOut(time) }
            />
          </Form.Group>
          <Button
            type="submit"
            size="lg"
            className="mt-1"
          >
            Add Job
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default NewJobPage
