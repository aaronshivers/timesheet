export default (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return [ ...state, action.job ]
    case 'DELETE_JOB':
      return state.filter(({ id }) => id !== action.id)
    case 'POPULATE_JOBS':
      return action.jobs
    case 'UPDATE_JOB':
      return state.map(job => {
        if (job.id === action.id) {
          return {
            ...job,
            ...action.job
          }
        } else {
          return job
        }
      })
    default:
      return state
  }
}
