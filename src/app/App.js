import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import MiniDrawer  from '../features/AppBar/AppBar';
import { Home } from '../features/Home/Home';
import { MovieDetail } from '../features/MovieDetail/MovieDetail';
import { Trending } from '../features/Trending/Trending';
import { Favourites } from '../features/Favourites/Favourites';

const App = () => {
  return (
    <div className="App">
      <nav>
        <MiniDrawer />
      </nav>
      <main>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
