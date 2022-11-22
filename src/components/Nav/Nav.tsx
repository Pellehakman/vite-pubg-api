import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-popup'></div>

            <div className='nav-links'>
            <NavLink className={({isActive}) => (isActive ? 'nav-item' : 'ina-nav-item')} to="/">HOME</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'nav-item' : 'ina-nav-item')} to="/statistics">STATISTICS</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'nav-item' : 'ina-nav-item')} to="/leaderboard">LEADERBOARD</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'nav-item' : 'ina-nav-item')} to="/epscore">EPSCORE</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'nav-item' : 'ina-nav-item')} to="/account">ACCOUNT</NavLink>

            </div>
            
            
        </nav>
    );
};

export default Nav;