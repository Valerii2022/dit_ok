import { createSlice } from "@reduxjs/toolkit";
import reviews from "./feedback";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviews,
  reducers: {
    allReviews(state) {
      return state;
    },
  },
});

const persistConfig = { key: "reviews", storage };

export const { allReviews } = reviewsSlice.actions;

export const reviewsReducer = persistReducer(
  persistConfig,
  reviewsSlice.reducer
);
