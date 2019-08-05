import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import AppRouter from './routers/AppRouter'
import LoginPage from './components/LoginPage'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const jsx = !user ?
    <LoginPage /> :
    <AppRouter uid={ { uid: user.uid } } />

  render(jsx, document.getElementById('app'))
})
