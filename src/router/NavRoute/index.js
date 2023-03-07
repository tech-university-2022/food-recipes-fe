import Navbar from "../../components/Navbar"
import React from 'react'
import { Outlet } from 'react-router-dom'

const NavRoute = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default NavRoute