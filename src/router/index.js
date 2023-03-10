import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, SignIn, SignUp, ForgotPassword } from '../pages';

import NavRoute from './NavRoute';

const Router = () => {
    return (
        <Routes>
            <Route path="" element={<NavRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/menu-1" element={<Home />} />
                <Route path="/menu-2" element={<Home />} />
                <Route path="/contact" element={<Home />} />
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>
    )
};

export default Router;
