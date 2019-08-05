import { firebase, googleAuthProvider } from '../db/firebase'

const login = () => {
  return firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
}

const logout = () => {
  return firebase.auth().signOut()
}

export {
  login,
  logout
}
