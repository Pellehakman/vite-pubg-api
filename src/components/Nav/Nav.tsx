import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <div className='nav-container'>
            
            <Link className='nav-item' to="/">Home</Link><br></br>
            <Link className='nav-item' to="/Statistics">Statistics</Link>
        </div>
    );
};

export default Nav;