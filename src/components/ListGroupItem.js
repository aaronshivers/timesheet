import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Row, Col } from 'react-bootstrap'

const ListGroupItem = ({ id, customer, description, hoursWorked }) => (

  <ListGroup.Item key={ id }>
    <Link
      to={ {
        pathname: `/editjob/${ id }`,
        state: { id }
      } }
    >
      <Row>
        <Col className="border-bottom border-light">
          <span>Customer:</span> <span className="text-break">{ customer }</span>
        </Col>
      </Row>
      <Row>
        <Col className="border-bottom border-light">
          <span>Job Description:</span> <span className="text-break">{ description }</span>
        </Col>
      </Row>
      <Row>
        <Col className="border-bottom border-light">
          <span>Hours Worked:</span> <span>{ hoursWorked }</span>
        </Col>
      </Row>
    </Link>
  </ListGroup.Item>
)

export default ListGroupItem
