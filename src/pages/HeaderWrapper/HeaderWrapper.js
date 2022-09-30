import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


function HeaderWrapper() {
    return(
        <div className=''>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default HeaderWrapper