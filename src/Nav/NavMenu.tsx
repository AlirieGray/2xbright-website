import React from 'react';
import './NavMenu.css';

function NavMenu() {
    return (
        <div className="navButtons">
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href='#conduit'>Games</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul> 
        </div>
    );
}

export default NavMenu;
