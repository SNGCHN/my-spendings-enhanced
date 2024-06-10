import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spending: [],
  month: 1,
};
export const spendingSlice = createSlice({
  name: "spending",
  initialState,
  reducers: {
    addSpending: (state, action) => {
      state.spending = [...state.spending, action.payload];
    },
    editSpending: (state, action) => {
      state.spending = state.spending.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteSpending: (state, action) => {
      state.spending = state.spending.filter((item) => {
        return item.id !== action.payload;
      });
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { addSpending, setMonth, deleteSpending, editSpending } = spendingSlice.actions;
export default spendingSlice.reducer;
