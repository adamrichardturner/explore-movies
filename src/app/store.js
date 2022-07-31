import { configureStore } from '@reduxjs/toolkit';
import appBarSlice from '../features/AppBar/appBarSlice';
import favouritesSlice from '../features/Favourites/favouritesSlice';
import homeSlice from '../features/Home/homeSlice';
import movieDetailSlice from '../features/MovieDetail/movieDetailSlice';

export const store = configureStore({
  reducer: {
    nav: appBarSlice,
    favourites: favouritesSlice,
    home: homeSlice,
    selectedMovie: movieDetailSlice
  }
});