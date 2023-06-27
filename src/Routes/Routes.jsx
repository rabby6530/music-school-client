import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Clasess/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AddClasses from "../pages/Dashboard/Instructors/AddClasses";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import SelectedClass from "../pages/Dashboard/Students/SelectedClass";
import EnrollClasses from "../pages/Dashboard/Students/EnrollClasses";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
        ]
    },

     {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path:"manageClasses",
                element:<ManageClasses></ManageClasses>
            },
           
            {
                path:"manageUsers",
                element:<ManageUsers></ManageUsers>
            },
            {
                path:"allUsers",
                element:<AllUsers></AllUsers>
            },
            {
                path:"addClass",
                element:<AddClasses></AddClasses>
            },
           
            {
                path:"myClasses",
                element:<MyClasses></MyClasses>
            },
            {
                path:"selectedClass",
                element:<SelectedClass></SelectedClass>
            },
            {
                path:"enrollClass",
                element:<EnrollClasses></EnrollClasses>
            },
           
        ]
    }
]);

export default router;