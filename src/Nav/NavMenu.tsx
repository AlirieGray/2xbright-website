import React from 'react';
import './NavMenu.css';

function NavMenu() {
  return (
    <div className="navButtons">
        <ul>
            <li>
                <a href="http://localhost:3000/">About</a>
            </li>
            <li>
                <a href="http://localhost:3000/games">Conduit of the Miracle</a>
            </li>
            <li>
                <a href="http://localhost:3000/contact">Contact</a>
            </li>
        </ul>
    </div>
  );
}

export default NavMenu;
