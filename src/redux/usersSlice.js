import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  users: [
    {
      id: nanoid(6),
      favourites: [],
      orders: [],
      isAdmin: false,
      user: {
        name: "Alex",
        surname: "User",
        phone: "06000000000",
        email: "uauthor@gmail.com",
        password: "12345",
      },
    },
    {
      id: nanoid(6),
      favourites: [],
      orders: [],
      isAdmin: false,
      user: {
        name: "Valerii",
        surname: "User",
        phone: "06000000000",
        email: "author@gmail.com",
        password: "12345",
      },
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addToUsers(state, { payload }) {
      const user = {
        id: nanoid(6),
        favourites: [],
        orders: [],
        isAdmin: false,
        user: payload,
      };
      state.users = [...state.users, user];
      return state;
    },
  },
});

const persistConfig = { key: "users", storage };

export const { addToUsers } = usersSlice.actions;

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
