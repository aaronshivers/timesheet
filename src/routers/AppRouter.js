import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Context from '../context/context'
import jobsReducer from '../reducers/jobs'
import App from '../components/App'
import NewJobPage from '../components/NewJobPage'

const AppRouter = ({ uid }) => {
  const [ state, dispatch ] = useReducer(jobsReducer, [])

  return (
    <Context.Provider value={ { uid, state, dispatch } }>
      <Router>
        <Route path="/" exact component={ App } />
        <Route path="/newjob" component={ NewJobPage } />
      </Router>
    </Context.Provider>
  )
}

export default AppRouter
