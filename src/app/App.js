import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ScrollToTop } from './ScrollToTop';
import MiniDrawer  from '../features/AppBar/AppBar';
import { Home } from '../features/Home/Home';
import { MovieDetail } from '../features/MovieDetail/MovieDetail';
import { Trending } from '../features/Trending/Trending';
import { Favourites } from '../features/Favourites/Favourites';
import { Search } from '../features/Search/Search';
import { SearchFailure } from '../features/Search/SearchFailure';

const App = () => {
  return (
    <div className="App" style={{height: '100vh'}}>
      <nav>
        <MiniDrawer />
      </nav>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search/404" element={<SearchFailure />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
