import { createSlice } from "@reduxjs/toolkit";

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

export const { setCategoryFilter, setAdvertFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
