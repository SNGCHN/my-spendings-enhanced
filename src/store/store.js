import { configureStore } from "@reduxjs/toolkit";
import spendingSlice from "./slices/spendingSlice";

export const store = configureStore({
  reducer: {
    spending: spendingSlice,
  },
});
