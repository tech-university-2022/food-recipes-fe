import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import "./style.css"

const Navbar = () => {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(0)
    
    const handleMenu = useCallback((menu, id) => {
        setMenu(id == menu ? 0 : id)
    }, [])

    const handleNavigate = useCallback(async (route) => {
        setMenu(0)
        navigate(route)
    }, [])

    return (
        <div 
            id="navbar"
        >
            <img 
                src={logo}
                alt="Logo"
                onClick={() => navigate("/")}
            />
            <div className="navbar-item">
                <div 
                    className="navbar-title"
                    onClick={() => handleMenu(menu, 1)}
                >
                    Category
                </div>
                {menu == 1 ? (
                    <div className="menu">
                        <div 
                            className="item"
                            onClick={() => handleNavigate("/menu-1")}
                        >
                            Menu 1
                        </div>
                        <div 
                            className="item"
                            onClick={() => handleNavigate("/menu-2")}
                        >
                            Menu 2
                        </div>
                    </div>
                ) : null}
            </div>
            <div 
                className="navbar-item navbar-title"
                onClick={() => handleNavigate("/contact")}
            >
                Contact
            </div>
        </div>
    )
}

export default memo(Navbar)