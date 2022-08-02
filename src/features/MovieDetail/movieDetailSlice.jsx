import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tmdb } from '../../util/Tmdb';

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
        selectedMovieData: [],
        isLoading: true
    },
    reducers: {
        updateSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        },
        clearSelectedMovieData: (state, action) => {
            state.selectedMovieData = []
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

export const { updateSelectedMovieId, clearSelectedMovieData } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;