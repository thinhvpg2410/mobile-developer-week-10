export const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const ADD_JOB_FAILURE = 'ADD_JOB_FAILURE';

export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';

export const addJobRequest = (job) => ({type: ADD_JOB_REQUEST, payload: job})
export const getJobsRequest = () => ({type: GET_JOBS_REQUEST})