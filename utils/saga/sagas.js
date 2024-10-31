import axios from "axios";
import {call, put, takeLatest} from 'redux-saga/effects';
import {
    ADD_JOB_FAILURE,
    ADD_JOB_REQUEST,
    ADD_JOB_SUCCESS,
    GET_JOBS_FAILURE,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS
} from "./actions";


const API_ADDRESS = 'https://671088d7a85f4164ef2e43ad.mockapi.io/todolist'

function* getJobs() {
    try {
        const response = yield call(axios.get, API_ADDRESS)
        yield put({type: GET_JOBS_SUCCESS, payload: response.data})
    } catch (error) {
        yield put({type: GET_JOBS_FAILURE, error})
    }
}

function* addJobs(action) {
    try {
        const response = yield call(axios.post, API_ADDRESS, action.payload); // Replace with actual API URL
        yield put({type: ADD_JOB_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: ADD_JOB_FAILURE, error})
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_JOBS_REQUEST, getJobs);
    yield takeLatest(ADD_JOB_REQUEST, addJobs);
}