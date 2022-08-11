import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1
    },
    reducers: {
        incrementPage: (state, action) => {
            if(state.page !== 1000) {
                state.page++;
            }
        },
        decrementPage: (state, action) => {
            if(state.page !== 1) {
                state.page--;
            }
        },
        resetPage: (state, action) => {
            state.page = 1;
        }
    }
});

export const { incrementPage, decrementPage, resetPage } = paginationSlice.actions;
export default paginationSlice.reducer;