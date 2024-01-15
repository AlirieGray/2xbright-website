import React from 'react';
import './NavMenu.css';
import {Link} from 'react-router-dom';

function NavMenu() {
  return (
    <div className="navButtons">
        <ul>
            <li>
                <a href="http://localhost:3000">About</a>
            </li>
            <li>
                <Link to="/games">Conduit of the Miracle</Link>
            </li>
            <li>
                <a href="http://localhost:3000/contact">Contact</a>
            </li>
        </ul>
    </div>
  );
}

export default NavMenu;
