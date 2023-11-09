import { createSlice } from "@reduxjs/toolkit";
import reviews from "./feedback";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviews,
  reducers: {
    allReviews(state, action) {
      console.log(state, action);
    },
  },
});

export const { allReviews } = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;
