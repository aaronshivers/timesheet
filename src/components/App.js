import React, { useContext, useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import Navigation from './Navigation'
import JobSummary from './JobSummary'
import JobsList from './JobsList'

const App = () => (
  <>
    <Navigation />
    <JobSummary />
    <JobsList />
  </>
)

export default App
