import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jobApi = 'http://localhost:5000/jobs';

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
    const res = await axios.get(jobApi);
    return res.data
})

export const fetchSingleJob = createAsyncThunk("jobs/fetchSingleJob", async (jobId) => {
    const res = await axios.get(`${jobApi}/${jobId}`);
    return res.data
})

export const updateJob = createAsyncThunk("jobs/updateJob", async (job) => {
    const res = await axios.patch(`${jobApi}/${job._id}`, job);
    console.log(res.data)
    return res.data
})

const initialState = {
    jobs: [],
    loading: false,
    error: null,
    singleJob: {}
}

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.jobs.find(post => post._id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.loading = false
            state.jobs = action.payload
        })
        builder.addCase(fetchJobs.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(fetchSingleJob.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSingleJob.fulfilled, (state, action) => {
            state.loading = false
            state.singleJob = action.payload
        })
        builder.addCase(fetchSingleJob.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(updateJob.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateJob.fulfilled, (state, action) => {
            state.loading = false
            state.singleJob = action.payload
        })
        builder.addCase(updateJob.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
    
})

// export const singleJobId = (state, id) => state.jobs.jobs.find(job => job._id === id)
// export const singleJobId = (state, id) => {
//     console.log(state)
//     return state.jobs.find(job => job._id === id)
// }

export const { reactionAdded } = jobsSlice.actions
// export const selectAllJobs = (state) => state.jobs;

export default jobsSlice.reducer