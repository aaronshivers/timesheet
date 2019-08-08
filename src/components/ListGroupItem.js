import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const ListGroupItem = ({ id, job }) => {

  return (
    <ListGroup.Item key={ id }>
      <Link
        to={ {
          pathname: `/editjob/${ id }`,
          state: { id }
        } }
      >
        <h5>Customer: { job.customer }</h5>
        <h6>Job Description: { job.description }</h6>
        <span className="text-break align-middle">
          Hours Worked: { job.hoursWorked }
        </span>
      </Link>
    </ListGroup.Item>
  )
}

export default ListGroupItem
