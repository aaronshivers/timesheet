import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const NewJobPage = () => {
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')

  return (
    <Container>
      <h1>New Job</h1>
      <Form>
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
          Add Job
        </Button>
      </Form>
    </Container>
  )
}

export default NewJobPage
