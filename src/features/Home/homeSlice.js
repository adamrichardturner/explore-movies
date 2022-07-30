import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';

export const getHomeMovies = createAsyncThunk(
    'home/movies',
    async (thunkAPI) => {
        const response = await Tmdb.getPopularMovies();
        return response;
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState: {
        movies: []
    },
    reducers: {
        updateHomeMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
    extraReducers: {
        [getHomeMovies.pending]: (state) => {
            state.loading = true;
        },
        [getHomeMovies.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.movies = payload;
        },
        [getHomeMovies.rejected]: (state) => {
            state.loading = false;
        }
    }
});

export const { updateHomeMovies} = homeSlice.actions;
export default homeSlice.reducer;