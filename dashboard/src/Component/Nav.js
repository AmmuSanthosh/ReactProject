import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Nav() {
    const navStyle = {
        color: '#c9def0'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
