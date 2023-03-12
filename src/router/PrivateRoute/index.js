import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/auth'

const PrivateRoute = ({ path = '/signin'}) => {
	const { token } = useAuth()
	return token ? 
		<Outlet/>
		: 
		<Navigate to={path} />
}

export default PrivateRoute