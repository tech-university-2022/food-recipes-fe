import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, SignIn } from '../pages';

import NavRoute from './NavRoute';

const Router = () => {
    return (
        <Routes>
            <Route path="" element={<NavRoute />}>
                <Route path="/" element={<Home/>} />
                <Route path="/menu-1" element={<Home/>} />
                <Route path="/menu-2" element={<Home/>} />
                <Route path="/contact" element={<Home/>} />
            </Route>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
    )
};

export default Router;
