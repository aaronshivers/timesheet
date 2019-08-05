import React from 'react'
import { Container, Col } from 'react-bootstrap'
import LoginLogoutButton from './LoginLogoutButton'

const LoginPage = () => (
  <div className="login-page">
    <Container>
    <Col xs={ { span: 6, offset: 3 } }>
      <div className="text-center">
        <h1>
          Login
        </h1>
        <LoginLogoutButton />
      </div>
    </Col>
    </Container>
  </div>
)

export default LoginPage
