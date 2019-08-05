import database from '../db/firebase'

const addJob = jobData => dispatch => ({ uid }) => {
// console.log(jobData, dispatch, uid)
  const { customer, description } = jobData

  const job = {
    customer,
    description,
    createdAt: Date.now()
  }

  return database
    .ref(`users/${ uid }/jobs`)
    .push(job)
    .then(
      ref => dispatch({
        type: 'ADD_JOB', job: {
          id: ref.key,
          ...job
        }
      })
    )
}

const getJobs = () => dispatch => ({ uid }) => {

  return database
    .ref(`users/${ uid }/jobs`)
    .once('value')
    .then(snapshot => {
      const jobs = []

      snapshot.forEach(childSnapshot => {
        jobs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      return jobs
    }).then(
      jobs => dispatch({ type: 'POPULATE_JOBS', jobs })
    )
}

const deleteJob = id => dispatch => ({ uid }) => {
  return database
    .ref(`users/${ uid }/jobs/${ id }`)
    .remove()
    .then(() => dispatch({ type: 'DELETE_JOB', id }))
}

export {
  addJob,
  getJobs,
  deleteJob
}
