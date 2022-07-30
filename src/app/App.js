import React, { useEffect } from 'react';
import './App.css';
import MiniDrawer  from '../features/AppBar/AppBar';
import { Home } from '../features/Home/Home';
import CircularSpeedDial from '../features/CircularSpeedDial/CircularSpeedDial'
import { Tmdb } from '../util/Tmdb';

function App() {
  useEffect(() => {
    Tmdb.getPopularMovies()
  }, [])
  
  return (
    <div className="App">
        <MiniDrawer />
        <Home />
        <CircularSpeedDial />
    </div>
  );
}

export default App;
