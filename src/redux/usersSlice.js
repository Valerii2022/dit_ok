import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  id: nanoid(6),
  favourites: [],
  orders: [],
  isAdmin: false,
  isLoggedIn: false,
  user: {
    name: "Valerii",
    surname: "Author",
    phone: "06000000000",
    email: "author@gmail.com",
    password: "12345",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, action) {
      console.log(state, action);
    },
    setUserStatus(state, { payload }) {
      if (
        payload.emailLogIn === state.user.email &&
        payload.passLogIn === state.user.password
      ) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
        alert("Невірний логін чи пароль");
      }

      return state;
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
  key: "users",
  storage,
};

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);

export const {
  getUser,
  setUserStatus,
  addToFavourites,
  removeFromFavourites,
  addToOrders,
} = usersSlice.actions;
