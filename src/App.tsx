import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import NavMenu from './Nav/NavMenu';


function App() {
  return (
    <div className="App-wrapper">
      <div className="container">
        <header>
          <h1>
            Twice as Bright Games
          </h1>
          <NavMenu />
        </header>
        <div className="contentWrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
