import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const ListGroupItem = ({ id, customer, description, hoursWorked }) => (
  
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
)

export default ListGroupItem
