import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, SignIn, ForgotPassword, RecipeDetail, MyRecipes } from '../pages'

import { SignUp } from '../pages'
import NavRoute from './NavRoute'

const Router = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/reset-password" element={<ForgotPassword />} />
            
			<Route path="" element={<NavRoute />}>
				<Route path="/recipe/:id" element={<RecipeDetail />} />
				<Route path="/me/recipes" element={<MyRecipes />} />
			</Route>
		</Routes>
	)
}

export default Router
