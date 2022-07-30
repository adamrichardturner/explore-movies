import { configureStore } from '@reduxjs/toolkit';
import appBarSlice from '../features/AppBar/appBarSlice';
import circularSpeedDialSlice from '../features/CircularSpeedDial/circularSpeedDialSlice';
import favouritesSlice from '../features/Favourites/favouritesSlice';
import homeSlice from '../features/Home/homeSlice';

export const store = configureStore({
  reducer: {
    nav: appBarSlice,
    dial: circularSpeedDialSlice,
    favourites: favouritesSlice,
    home: homeSlice
  }
});

console.log(store.getState())