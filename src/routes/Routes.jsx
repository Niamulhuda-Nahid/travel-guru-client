import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CardPlace from "../page/Home/CardPlace/CardPlace";
import Booking from "../page/Booking/Booking";
import Login from "../page/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <CardPlace></CardPlace>,
                loader: ()=> fetch(`http://localhost:5000/place`)
            },
            {
                path: 'booking',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element:<Login></Login>
            },
            
        ]
    },
    {
        path: '/register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;