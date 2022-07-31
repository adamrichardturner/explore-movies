import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';
import {store} from '../../app/store';

export const getMovieDetails = createAsyncThunk(
    'selectedMovie/selectedMovieData',
    async (movieId, thunkAPI) => {
        const response = await Tmdb.getMovieDetails(movieId);
        return response[0];
    }
);

const movieDetailSlice = createSlice({
    name: "selectedMovie",
    initialState: {
        selectedMovieId: '',
        selectedMovieData: []
    },
    reducers: {
        updateSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        }
    },
    extraReducers: {
        [getMovieDetails.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.selectedMovieData = action.payload;
        },
        [getMovieDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const { updateSelectedMovieId } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;