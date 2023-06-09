import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Student from "../Pages/Dashboard/Student";
import Admin from "../Pages/Dashboard/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructor from "../Pages/Dashboard/Instructor";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/AdminPages/ManageClasses/ManageClasses";
import AddClass from "../Pages/InstructorPages/AddClass/AddClass";
import MyClass from "../Pages/InstructorPages/MyClass/MyClass";
import MyEnrolledClass from "../Pages/StudentPages/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../Pages/StudentPages/MySelectedClass/MySelectedClass";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/',
            element: <Home></Home>

            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {path: 'manageUsers',
            element: <ManageUsers></ManageUsers>

            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'addaClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'myenrolledclass',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            
        ]
    }
])