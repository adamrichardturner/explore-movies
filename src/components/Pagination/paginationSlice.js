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
        }
    }
});

export const { incrementPage, decrementPage } = paginationSlice.actions;
export default paginationSlice.reducer;