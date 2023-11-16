import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const statusSlice = createSlice({
  name: "status",
  initialState: { isAdmin: false, isLoggedIn: false, token: null },
  reducers: {
    setUserStatus(state, { payload }) {
      state.isLoggedIn = payload;
      return state;
    },
  },
});

const persistConfig = { key: "status", storage };

export const { setUserStatus } = statusSlice.actions;

export const statusReducer = persistReducer(persistConfig, statusSlice.reducer);
