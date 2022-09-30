import React from 'react'
import { NavLink } from 'react-router-dom'
import navbarLogo from '../../images/navbarLogo'
import './NavbarLogo.css'

function NavbarLogo() {
    return(
        <div className='navbarLogo'>
            <NavLink to='/'><img src={navbarLogo.navbarLogo} alt=''/></NavLink>
        </div>
    )
}

export default NavbarLogo