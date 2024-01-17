import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import NavMenu from './Nav/NavMenu';
import { HashRouter } from 'react-router-dom'
import candle from './images/candle.png'

function App() {
  return (
    <HashRouter>
      <div className='App-wrapper'>
        <div className='appHeader'>
          <div className='logoContainer'>
            <img src={candle} width={90}/>
            <h1 className='company'>Twice as Bright Games </h1>
          </div>
        </div>
        <div className='container'>
          <div className='sideBarContainer'>
              <NavMenu />
          </div>
          <div className='contentWrapper'>
            <AppRouter />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
