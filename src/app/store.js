import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/coursesSlice";
import authReducer from "../features/authSlice";
import dashboardReducer from "../features/dashboardSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        auth: authReducer,
        dashboard: dashboardReducer,
        user: userReducer,
    }
})

export default store;