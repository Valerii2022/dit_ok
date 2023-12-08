import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  fetchAdverts,
  fetchCurrentAdvert,
  addAdvert,
  deleteAdvert,
} from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    currentAdvert: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentAdvert.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentAdvert.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentAdvert = action.payload;
      })
      .addCase(fetchCurrentAdvert.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addAdvert.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAdvert.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.adverts.push(payload);
      })
      .addCase(addAdvert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteAdvert.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAdvert.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteAdvert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const persistConfig = { key: "adverts", storage };

export const advertsReducer = persistReducer(
  persistConfig,
  advertsSlice.reducer
);
