import { configureStore } from '@reduxjs/toolkit';
import appBarSlice from '../features/AppBar/appBarSlice';
import favouritesSlice from '../features/Favourites/favouritesSlice';
import homeSlice from '../features/Home/homeSlice';
import movieDetailSlice from '../features/MovieDetail/movieDetailSlice';
import trendingSlice from '../features/Trending/trendingSlice';
import searchBarSlice from '../features/SearchBar/searchBarSlice';
import paginationSlice from '../components/Pagination/paginationSlice';

export const store = configureStore({
  reducer: {
    nav: appBarSlice,
    favourites: favouritesSlice,
    home: homeSlice,
    selectedMovie: movieDetailSlice,
    trending: trendingSlice,
    search: searchBarSlice,
    pagination: paginationSlice
  }
});