import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    currentBmw: null,
  },
  reducers: {
    setCurrentBmw: (state, action) => {
      state.currentBmw = action.payload;
    },
  },
});

export const { setCurrentBmw } = popupSlice.actions;
export default popupSlice.reducer;
