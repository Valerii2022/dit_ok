import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    currentAdvert: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.adverts = action.payload;
    },
    fetchingCurrentSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentAdvert = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  fetchingCurrentSuccess,
} = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
