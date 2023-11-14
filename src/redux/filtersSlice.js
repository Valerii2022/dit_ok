import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { category: "", advert: "" },
  reducers: {
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    setAdvertFilter(state, action) {
      state.advert = action.payload;
    },
  },
});

const persistConfig = { key: "filters", storage };

export const { setCategoryFilter, setAdvertFilter } = filtersSlice.actions;

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
