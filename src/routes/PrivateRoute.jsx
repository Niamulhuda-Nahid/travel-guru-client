import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <span className="loading loading-spinner text-warning"></span>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    }
};

export default PrivateRoute;