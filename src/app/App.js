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
import { Head } from 'react-static';

const App = () => {
  const openGraphData = {
    title: 'Explore Movies | TMdb movie explorer app',
    description:
      'TMdb app for browsing popular and trending movies worldwide',
    url: 'https://exploremovies.app/',
    image:
      '%PUBLIC_URL%/explore-movies-social.jpg',
  }
  return (
    <div className="App" style={{height: '100vh'}}>
      <Head>
        <meta property="og:title" content={openGraphData.title} />
        <meta property="og:description" content={openGraphData.description} />
        <meta property="og:url" content={openGraphData.url} />
        <meta property="og:image" content={openGraphData.image} />
        <meta name="twitter:card" content="summary" />
      </Head>
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
