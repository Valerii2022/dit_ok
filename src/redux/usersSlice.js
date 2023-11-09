import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: nanoid(6),
  favourites: [],
  isAdmin: true,
  user: {
    name: "Valerii",
    surname: "Author",
    phone: "06000000000",
    email: "author@gmail.com",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, action) {
      console.log(state, action);
    },
    addToFavourites(state, action) {
      state.favourites = [...state.favourites, action.payload];
      return state;
    },
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter((el) => el !== action.payload);
      return state;
    },
  },
});

export const { getUser, addToFavourites, removeFromFavourites } =
  usersSlice.actions;

export const usersReducer = usersSlice.reducer;
