import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const JobItem = ({ id, customer, description }) => (
  <Link to={ `/editjob/${ id }` }>
    <div>
      <span className="text-break align-middle">{ customer }</span>
      <span className="text-break align-middle">{ description }</span>
    </div>
  </Link>
)

export default JobItem
