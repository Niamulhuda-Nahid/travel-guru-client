import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CardPlace from "../page/Home/CardPlace/CardPlace";
import Booking from "../page/Booking/Booking";
import Login from "../page/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import HotelLayout from "../layout/HotelLayout";
import Hotel from "../page/Hotel/Hotel";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <CardPlace></CardPlace>,
                loader: ()=> fetch(`https://travel-guru-server-murex-psi.vercel.app/place`)
            },
            {
                path: 'booking',
                element: <Booking></Booking>
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
    },
    {
        path: '/hotel',
        element: <HotelLayout></HotelLayout>,
        children: [
            {
                path: '/hotel',
                element: <PrivateRoute><Hotel></Hotel></PrivateRoute>,
                loader: ()=> fetch(`https://travel-guru-server-murex-psi.vercel.app/hotel`)
            }
        ]
    }
])

export default router;