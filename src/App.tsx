import React from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu'
import NavMenu from './Nav/NavMenu';
import candle from './images/candle_square_small.png'
import MainPage from './MainPage/MainPage';
import Conduit from './Conduit/Conduit';
import Contact from './Contact/Contact';

function App() {
  return (
    // <HashRouter>
      <div className='App-wrapper'>
        <div className='appHeader'>
          <div className='logoContainer'>
            <img className='candle' src={candle} width={90}/>
            <h1 className='company'>Twice as Bright Games </h1>
          </div>
          <div className='hamburger'>
              <Menu right>
                <a id='menuAbout' className='menu-item' href='#about'> Games </a>
                <a id='menuGames' className='menu-item' href='#contributors'> About Us </a>
                <a id='menuContact' className='menu-item' href='#contact'> Contact </a>
              </Menu>
            </div>
        </div>
        <div className='container'>
          <div className='contentWrapper'>
            {/* <AppRouter /> */}
            <MainPage />
            <Conduit />
            <Contact />
          </div>
          <div className='sideBarContainer'>
              <NavMenu />
          </div>
        </div>
      </div>
    /* </HashRouter> */
  );
}

export default App;
