import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import Context from './context/context'
import AppRouter from './routers/AppRouter'
import LoginPage from './components/LoginPage'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const jsx = !user ?
    <LoginPage /> :
    <Context.Provider value={ { uid: user.uid } }>
      <AppRouter />
    </Context.Provider>

  render(jsx, document.getElementById('app'))
})
