import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <div className='nav-container'>
            <header>THIS IS NAV</header>
            <Link to="/">HOME</Link><br></br>
            <Link to="/Statistics">Statistics</Link>
        </div>
    );
};

export default Nav;