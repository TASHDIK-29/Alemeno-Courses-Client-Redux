import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCourses = createAsyncThunk('courses/fetchCourse', async () =>{
    const res = await axios.get('http://localhost:5000/allCourse');

    return res.data;
})

export const fetchCourseDetails = createAsyncThunk('courses/fetchCourseDetails', async (courseId) => {
    const response = await axios.get(`/api/courses/${courseId}`);
    return response.data;
  });


const initialState = {
    list: [],
    details:{},
    status: 'idle',
    error: null
}

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCourses.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCourses.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchCourses.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchCourseDetails.fulfilled, (state, action) => {
            state.details = action.payload;
          })
    }
})


export default coursesSlice.reducer;