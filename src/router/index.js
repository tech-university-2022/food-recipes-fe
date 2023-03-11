import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, SignIn } from '../pages'

import { SignUp } from '../pages'
import NavRoute from './NavRoute'

const Router = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
            
			<Route path="" element={<NavRoute />}>
				<Route path="/menu-1" element={<Home />} />
				<Route path="/menu-2" element={<Home />} />
				<Route path="/contact" element={<Home />} />
			</Route>
		</Routes>
	)
}

export default Router
