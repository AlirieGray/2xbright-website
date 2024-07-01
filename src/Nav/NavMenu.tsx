import React from 'react';
import './NavMenu.css';

function NavMenu() {
    return (
        <div className="navButtons">
            <ul>
                <li>
                    <a href="#about">Games</a>
                </li>
                <li>
                    <a href='#contributors'>About Us</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul> 
        </div>
    );
}

export default NavMenu;
