import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const advertsSlice = createSlice({
  name: "adverts",
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

const persistConfig = { key: "adverts", storage };

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  fetchingCurrentSuccess,
} = advertsSlice.actions;

export const advertsReducer = persistReducer(
  persistConfig,
  advertsSlice.reducer
);
