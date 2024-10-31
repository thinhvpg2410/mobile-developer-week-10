import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const API_ADDRESS = 'https://671088d7a85f4164ef2e43ad.mockapi.io/todolist'
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await axios.get(API_ADDRESS);
    return response.data;
});
export const addJob = createAsyncThunk('jobs/addJob', async (job) => {
    const response = await axios.post(API_ADDRESS, job);
    return response.data;
});

const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addJob.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addJob.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs.push(action.payload);
            })
            .addCase(addJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default jobSlice.reducer;