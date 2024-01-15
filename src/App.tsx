import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import NavMenu from './Nav/NavMenu';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className='App-wrapper'>
        <div className='container'>
          <div className='sideBarContainer'>
              <h1>
                Twice as Bright Games
              </h1>
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
