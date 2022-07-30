import { configureStore } from '@reduxjs/toolkit';
import appBarSlice from '../features/AppBar/appBarSlice';
import circularSpeedDialSlice from '../features/CircularSpeedDial/circularSpeedDialSlice';
import favouritesSlice from '../features/Favourites/favouritesSlice';
export const store = configureStore({
  reducer: {
    nav: appBarSlice,
    dial: circularSpeedDialSlice,
    favourites: favouritesSlice,
  }
});