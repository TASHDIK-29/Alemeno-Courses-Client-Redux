import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCourses = createAsyncThunk('courses/fetchCourse', async (search = '') => {
    const res = await axios.get(`https://alemeno-course-server.vercel.app/allCourse?search=${search}`);

    return res.data;
})

export const fetchCourseDetails = createAsyncThunk('courses/fetchCourseDetails', async (id) => {
    const response = await axios.get(`https://alemeno-course-server.vercel.app/courses/${id}`);
    return response.data;
});


// Thunk for updating course likes
export const updateCourseLikes = createAsyncThunk('courses/updateCourseLikes', async (courseId) => {
    const response = await axios.patch(`https://alemeno-course-server.vercel.app/course/like/${courseId}`);
    return response.data;
  });


const initialState = {
    list: [],
    details: {},
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
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCourseDetails.fulfilled, (state, action) => {
                state.details = action.payload;
            })
            .addCase(updateCourseLikes.fulfilled, (state, action) => {
                const updatedCourse = action.payload;
                const existingCourse = state.list.find(course => course._id === updatedCourse._id);
                if (existingCourse) {
                  existingCourse.likes = updatedCourse.likes;
                }
              });
    }
})


export default coursesSlice.reducer;