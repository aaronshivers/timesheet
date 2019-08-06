import database from '../db/firebase'

const addJob = (jobData = {}) => dispatch => ({ uid }) => {
  const { customer, description, timeIn, timeOut } = jobData

  const job = {
    customer,
    description,
    timeIn: timeIn.toISOString(),
    timeOut: timeOut.toISOString(),
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

const updateJob = (id, job) => dispatch => ({ uid }) => {
  return database
    .ref(`users/${ uid }/jobs/${ id }`)
    .update(job)
    .then(() => dispatch({ type: 'UPDATE_JOB', id, job }))
}

export {
  addJob,
  getJobs,
  deleteJob,
  updateJob
}
