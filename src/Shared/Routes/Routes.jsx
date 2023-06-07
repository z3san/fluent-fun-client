import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";



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
            }
        ]

    }
])