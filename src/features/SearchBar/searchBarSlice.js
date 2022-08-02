import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';

export const getSearchQueryMovies = createAsyncThunk(
    'search/movies',
    async (searchTerm, thunkAPI) => {
        const response = await Tmdb.getMovieFromSearch(searchTerm);
        return response[0];
    }
);

const searchBarSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: '',
        movies: [],
        isLoading: true
    },
    reducers: {
        updateSearchMovies: (state, action) => {
            state.movies = action.payload;
        },
        clearSearchTerm: (state, action) => {
            state.searchTerm = ''
        },
        clearSelectedMovieData: (state, action) => {
            state.selectedMovieData = []
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: {
        [getSearchQueryMovies.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getSearchQueryMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.movies = action.payload;
        },
        [getSearchQueryMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const { updateSearchMovies, clearSelectedMovieData, clearSearchTerm, updateSearchTerm } = searchBarSlice.actions;
export default searchBarSlice.reducer;