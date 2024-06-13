import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spending: [],
  month: 1,
};
export const spendingSlice = createSlice({
  name: "spending",
  initialState,
  reducers: {
    setMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { setMonth } = spendingSlice.actions;
export default spendingSlice.reducer;
