import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    id: nanoid(6),
    favourites: [],
    orders: [],
    isAdmin: false,
    user: {
      name: "Alex",
      surname: "User",
      phone: "06000000000",
      email: "user1@gmail.com",
      password: "12345",
    },
  },
  reducers: {
    addCurrentUser(state, action) {
      state = action;
    },

    addToOrders(state, { payload }) {
      state.orders = [...state.orders, payload];
      return state;
    },

    addToFavourites(state, { payload }) {
      state.favourites = [...state.favourites, payload];
      return state;
    },
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter((el) => el !== action.payload);
      return state;
    },
  },
});

const persistConfig = {
  key: "currentUser",
  storage,
};

export const currentUserReducer = persistReducer(
  persistConfig,
  currentUserSlice.reducer
);

export const {
  addCurrentUser,
  addToFavourites,
  removeFromFavourites,
  addToOrders,
} = currentUserSlice.actions;
