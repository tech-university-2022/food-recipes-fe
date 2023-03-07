import React from 'react'
import { Navigate } from 'react-router-dom'


const RedirectRoute = ({ path }) => {
    return <Navigate to={path} />;
};

export default RedirectRoute