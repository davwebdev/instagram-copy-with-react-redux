import React from "react";
import NavbarLogo from '../NavbarLogo/NavbarLogo'
import NavbarSearch from '../NavbarSearch/NavbarSearch'
import NavbarIcon from '../NavbarIcon/NavbarIcon'
import './Navbar.css'
function Navbar() {
    return(
        <div className="navbar">
            <NavbarLogo />
            <NavbarSearch />
            <NavbarIcon />
        </div> 
    )
}

export default Navbar