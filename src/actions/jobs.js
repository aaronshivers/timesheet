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

export {
  addJob,
}
