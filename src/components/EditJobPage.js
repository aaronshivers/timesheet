import React, { useState, useEffect, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Datetime from 'react-datetime'
import moment from 'moment'
import Context from '../context/context'
import { getJob, updateJob } from '../actions/jobs'
import Navigation from './Navigation'
import DeleteButton from './DeleteButton'

const EditJobPage = ({ history }) => {
  const { uid, state, dispatch } = useContext(Context)
  const [ job, setJob ] = useState({})
  const [ id, setID ] = useState('')
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ timeIn, setTimeIn ] = useState('')
  const [ timeOut, setTimeOut ] = useState('')
  const [ hoursWorked, setHoursWorked ] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()

    updateJob(
      id,
      {
        customer,
        description,
        timeIn: moment(timeIn).format(),
        timeOut: moment(timeOut).format(),
        hoursWorked
      }
    )(dispatch)(uid)
    
    history.push('/')
  }

  // Populate jobs on page load
  useEffect(() => {

    getJob(history.location.state.id)(uid)
      .then(({ id, customer, description, timeIn, timeOut, hoursWorked }) => {
        setID(id)
        setCustomer(customer)
        setDescription(description)
        setTimeIn(moment(timeIn))
        setTimeOut(moment(timeOut))
        setHoursWorked((hoursWorked))
      })
  }, [])

  useEffect(() => {
    setHoursWorked(((timeOut - timeIn) / 1000 / 60 / 60).toFixed(2))

  }, [timeIn, timeOut])

  return (
    <>
      <Navigation />
      <div className="bg-light pt-3 pb-3">
        <Container>
          <h1>Edit Job</h1>
          <span>Hours Worked: { hoursWorked }</span>
        </Container>
      </div>

      <Container className="mt-3 mb-3">
        <Form onSubmit={ handleFormSubmit }  className="mb-3">
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
          >
            Update Job
          </Button>
        </Form>
        <DeleteButton id={ id } history={ history } />
      </Container>
    </>
  )
}

export default EditJobPage
