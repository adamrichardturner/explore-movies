import React from 'react';
import './App.css';
import MiniDrawer  from '../features/AppBar/AppBar';
import { Home } from '../features/Home/Home';
import CircularSpeedDial from '../features/CircularSpeedDial/CircularSpeedDial'

function App() {
  return (
    <div className="App">
      <MiniDrawer />
      <Home />
      <CircularSpeedDial />
    </div>
  );
}

export default App;
