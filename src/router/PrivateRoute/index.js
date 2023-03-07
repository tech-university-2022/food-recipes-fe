import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/auth'

const PrivateRoute = ({ path = "/signin"}) => {
    const { auth } = useAuth();
    return auth ? 
            <Outlet/>
        : 
            <Navigate to={path} />;
};

export default PrivateRoute