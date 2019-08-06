import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Context from '../context/context'
import jobsReducer from '../reducers/jobs'
import App from '../components/App'
import NewJobPage from '../components/NewJobPage'
import EditJobPage from '../components/EditJobPage'

const AppRouter = ({ uid }) => {
  const [ state, dispatch ] = useReducer(jobsReducer, [])

  return (
    <Context.Provider value={ { uid, state, dispatch } }>
      <Router>
        <Route path="/" exact component={ App } />
        <Route path="/newjob" component={ NewJobPage } />
        <Route path="/editjob/:id" component={ EditJobPage } />
      </Router>
    </Context.Provider>
  )
}

export default AppRouter
