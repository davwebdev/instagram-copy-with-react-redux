import React from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineCompass} from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { BiLogIn, BiUserCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import './NavbarIcon.css'
import { useDispatch, useSelector } from 'react-redux';
import { delInitialUser, selectUsers } from '../../store/slices/usersSlice/usersSlice';

function NavbarIcon() {
    const dipsatch = useDispatch()
    const users = useSelector(selectUsers)

    return(
        <div className='navbarIcon'>
            <NavLink to='/inst/'><AiOutlineHome /></NavLink>
            <NavLink to='chat'><AiOutlineMessage /></NavLink>
            <NavLink to='addPost'><BsPlusSquare /></NavLink>
            <NavLink to='*'><FiHeart /></NavLink>
            <NavLink to='profile'><BiUserCircle /></NavLink>
            <NavLink to='/' onClick={() => dipsatch(delInitialUser())}><BiLogIn /></NavLink>
        </div>
    )
}

export default NavbarIcon