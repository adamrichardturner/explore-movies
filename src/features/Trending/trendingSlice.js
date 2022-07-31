import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';

export const getTrendingMovies = createAsyncThunk(
    'trending/movies',
    async (thunkAPI) => {
        const response = await Tmdb.getTrendingMovies();
        return response;
    }
);

const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        movies: [],
        loading: true
    },
    reducers: {
        updateTrendingMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
    extraReducers: {
        [getTrendingMovies.pending]: (state) => {
            state.loading = true;
        },
        [getTrendingMovies.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.movies = payload;
        },
        [getTrendingMovies.rejected]: (state) => {
            state.loading = false;
        }
    }
});

export const { updateTrendingMovies } = trendingSlice.actions;
export default trendingSlice.reducer;