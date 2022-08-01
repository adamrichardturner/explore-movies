import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';

export const getFavouriteMovieDetails = createAsyncThunk(
    'favourites/selectedMovieData',
    async (movieId, thunkAPI) => {
        const response = await Tmdb.getMovieDetails(movieId);
        return response[0];
    }
);

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        movies: [],
        selectedMovieData: []
    },
    reducers: {
        updateFavourites: (state, action) => {
            state.movies.push(action.payload);
        },
        removeFavourites: (state, action) => {
            state.movies = state.movies.filter(e => e !== action.payload);
            state.selectedMovieData = state.selectedMovieData.filter(e => e.id.toString() !== action.payload);
        }
    },
    extraReducers: {
        [getFavouriteMovieDetails.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getFavouriteMovieDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.selectedMovieData.push(action.payload)
        },
        [getFavouriteMovieDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const { updateFavourites, removeFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;