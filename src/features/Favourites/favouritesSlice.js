import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        movies: []
    },
    reducers: {
        updateFavourites: (state, action) => {
            state.movies = [...state, action.payload];
        }
    }
});

export const { updateFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;