import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import CourseDetails from "../pages/details/CourseDetails";
import Register from "../pages/login-register/Register";
import Login from "../pages/login-register/Login";


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
  ]);