import React from 'react';
import './App.css';
import MiniDrawer  from '../features/AppBar/AppBar';
import { Home } from '../features/Home/Home';

const App = () => {
  return (
    <div className="App">
        <MiniDrawer />
        <Home/>
    </div>
  );
}

export default App;
