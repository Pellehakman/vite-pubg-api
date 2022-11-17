import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-popup'></div>

            <div className='nav-links'>
            <NavLink className='nav-item' to="/">HOME</NavLink>
            <NavLink className='nav-item' to="/Statistics">STATISTICS</NavLink>
            <NavLink className='nav-item' to="/Statistics">LEADERBOARD</NavLink>
            <NavLink className='nav-item' to="/Statistics">EPSCORE</NavLink>

            </div>
            
            
        </nav>
    );
};

export default Nav;