import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/AdminPages/ManageClasses/ManageClasses";
import AddClass from "../Pages/InstructorPages/AddClass/AddClass";
import MyClass from "../Pages/InstructorPages/MyClass/MyClass";
import MyEnrolledClass from "../Pages/StudentPages/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../Pages/StudentPages/MySelectedClass/MySelectedClass";
import ApprovedClasses from "../Pages/ApprovedClasses/ApprovedClasses";
import Instructors from "../Pages/Instructors/Instructors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import History from "../Pages/StudentPages/History/History";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: 'approvedClasses',
                element: <ApprovedClasses></ApprovedClasses>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {path: 'manageUsers',
            element: <ManageUsers></ManageUsers>

            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://fluentfun-server.vercel.app/classesCarts/${params.id}`)
               

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
            {
                path: 'paymentHistory',
                element: <History></History>
            }
            
        ]
    }
])