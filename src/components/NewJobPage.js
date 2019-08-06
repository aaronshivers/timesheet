import React, { useState, useEffect, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TimePicker from 'rc-time-picker'
import moment from 'moment'
import Context from '../context/context'
import Navigation from './Navigation'
import { addJob } from '../actions/jobs'
import 'rc-time-picker/assets/index.css'

const NewJobPage = ({ history }) => {
  const { uid, state, dispatch } = useContext(Context)
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ timeIn, setTimeIn ] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    addJob({ customer, description, timeIn })(dispatch)(uid)

    history.push('/')
  }

  const handleTimeInChange = value => {
    setTimeIn(value && value.toISOString())
  }

  useEffect(() => console.log(timeIn), [timeIn])

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
            <TimePicker
              showSecond={ false }
              minuteStep={ 15 }
              defaultValue={ moment() }
              onChange={ handleTimeInChange }
              use12Hours
            />
          </Form.Group>
          <Button
            type="submit"
            size="lg"
          >
            Add Job
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default NewJobPage
