import React from 'react';
import img from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={img} alt="" />
            <div className='nav-bar-link-div'>
                <a className='hover-text' href="/home">Home</a>
                <a className='hover-text' href="/about">About</a>
                <a className='hover-text' href="/contact">Contact</a>
                <a className='hover-text' href="/service">Service</a>
            </div>
        </nav>
    );
};

export default Header;