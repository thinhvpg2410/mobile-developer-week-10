import {ADD_JOB_SUCCESS, GET_JOBS_SUCCESS} from "./actions";

const initialState = {
    jobs: [],
};
export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case GET_JOBS_SUCCESS:
            return {...state, jobs: action.payload}
        case ADD_JOB_SUCCESS:
            return {...state, jobs: [...state.jobs, action.payload]}
        default:
            return state
    }
}