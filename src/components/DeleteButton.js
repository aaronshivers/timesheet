import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Context from '../context/context'
import { deleteJob } from '../actions/jobs'

const DeleteButton = ({ id, history }) => {
  const { uid, dispatch } = useContext(Context)

  const handleDeleteJob = () => {
    deleteJob(id)(dispatch)(uid)

    history.push('/')
  }

  return (
    <Button
      variant="danger"
      size="lg"
      onClick={ handleDeleteJob }
    >
      Delete Job
    </Button>
  )
}

export default DeleteButton
