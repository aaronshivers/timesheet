import React, { useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import Context from '../context/context'
// import DeleteButton from './DeleteButton'
import { getJobs } from '../actions/jobs'

const JobsList = () => {
  const { uid, state, dispatch } = useContext(Context)

  // Populate jobs on page load
  useEffect(() => {
    getJobs()(dispatch)(uid)
  }, [])

  return (
    <Table striped hover className="mt-3">
      <thead className="table-secondary">
        <tr>
          <th>Customer</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          state && state.map(({ id, customer, description }) => (
            <tr key={ id }>
              <td className="text-break align-middle">{ customer }</td>
              <td className="text-break align-middle">{ description }</td>
              <td>
                {/*<DeleteButton id={ id } />*/}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default JobsList
