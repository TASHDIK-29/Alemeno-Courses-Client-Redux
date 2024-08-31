import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import CourseDetails from "../pages/details/CourseDetails";
import Register from "../pages/login-register/Register";
import Login from "../pages/login-register/Login";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../pages/dashboard/profile/UserProfile";
import EnrollCourses from "../pages/dashboard/EnrollCourses";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/course/:id',
            element: <CourseDetails />
        },
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children:[
        {
          path: "profile",
          element: <UserProfile />
        },
        {
          path: "allCourses",
          element: <EnrollCourses />
        },
      ]
    }
  ]);