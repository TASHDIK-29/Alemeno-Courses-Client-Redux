import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk('auth/createUser', async (userInfo) =>{
    const res = await axios.post(`http://localhost:5000/register`, userInfo);

    return res.data;
})

export const loginUser = createAsyncThunk('auth/loginUser', async (userInfo) =>{
    const res = await axios.post(`http://localhost:5000/login`, userInfo);

    return res.data;
})


const initialState = {
    loginInfo: {},
    registerInfo: {}
}


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearLoginInfo: (state) => {
            state.loginInfo = {}; // Reset loginInfo state
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            state.registerInfo = action.payload
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loginInfo = action.payload
        })
    }
})

export const { clearLoginInfo } = authSlice.actions;
export default authSlice.reducer;