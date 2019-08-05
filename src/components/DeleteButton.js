import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Context from '../context/context'
import { deleteJob } from '../actions/jobs'

const DeleteButton = ({ id }) => {
  const { uid, dispatch } = useContext(Context)

  return (
    <Button
      variant="danger"
      onClick={ () => deleteJob(id)(dispatch)(uid) }
    >
      X
    </Button>
  )
}

export default DeleteButton
