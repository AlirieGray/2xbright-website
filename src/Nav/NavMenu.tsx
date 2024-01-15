import React from 'react';
import './NavMenu.css';
import {Link, useLocation} from 'react-router-dom';

function NavMenu() {
    const location = useLocation()
    return (
        <div className="navButtons">
            <ul>
                <li className={location.pathname == '/' ? 'activeRoute' : ''}>
                    <Link to="/">About</Link>
                </li>
                <li className={location.pathname == '/games' ? 'activeRoute' : ''}>
                    <Link to="/games">Conduit of the Miracle</Link>
                </li>
                <li className={location.pathname == '/contact' ? 'activeRoute' : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavMenu;
