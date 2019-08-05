import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'
import NewJobPage from '../components/NewJobPage'

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={ App } />
    <Route path="/newjob" component={ NewJobPage } />
  </Router>
)

export default AppRouter
