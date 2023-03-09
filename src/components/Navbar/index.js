import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets"; 
import "./style.css"
import { navbarCategories } from "../../constants";

const Navbar = () => {
    const navigate = useNavigate()
    
    return (
        <div 
            id="navbar"
        >
            <img 
                src={Logo}
                alt="Logo"
                onClick={() => navigate("/")}
            />
            <div className="category">
                {navbarCategories?.map(item => (
                    <div 
                        className="navbar-title"
                        onClick={() => navigate(item.endpoint)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Navbar)