import { createSlice } from '@reduxjs/toolkit';

const circularSpeedDialSlice = createSlice({
    name: "dial",
    initialState: {
        selectedItem: ''
    },
    reducers: {
        updateSelectedDialItem: (state, action) => {
            state.selectedItem = action.payload;
        }
    }
});

export const { updateSelectedDialItem } = circularSpeedDialSlice.actions;
export default circularSpeedDialSlice.reducer;