import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import LoginLogoutButton from './LoginLogoutButton'

const LoginPage = () => (
  <div className="login-page">
    <Container>
      <Col sm={ { span: 6, offset: 3 } }>
        <Card className="text-center pt-3 pb-3 bg-semi-transparent">
          <Card.Body>
            <h2>
              Timesheet
            </h2>
            <LoginLogoutButton />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  </div>
)

export default LoginPage
