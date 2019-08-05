import React, { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import Context from '../context/context'
import LoginLogoutButton from './LoginLogoutButton'

const App = () => {
  const { uid } = useContext(Context)

  return (
    <div>
      <Container>
        <h1 className="display-1 text-center">timesheet-v2</h1>
        <LoginLogoutButton uid={ uid } />
        <Button href="/newjob">New Job</Button>
      </Container>
    </div>
  )
}
export default App
