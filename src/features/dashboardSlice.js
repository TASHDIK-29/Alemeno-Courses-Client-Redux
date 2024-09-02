import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEnrolledCourses = createAsyncThunk('dashboard/fetchEnrolledCourses', async (email) => {
  const response = await axios.get(`https://alemeno-course-server.vercel.app/course/${email}`);
  return response.data;
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    enrolledCourses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
