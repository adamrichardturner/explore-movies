import { createSlice } from '@reduxjs/toolkit';

const appBarSlice = createSlice({
    name: "nav",
    initialState: {
        selectedItem: ''
    },
    reducers: {
        updateSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        }
    }
});

export const { updateSelectedItem } = appBarSlice.actions;
export default appBarSlice.reducer;