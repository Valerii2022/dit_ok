import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  addUser,
  fetchCurrentUser,
  fetchUsers,
  // updateUser,
} from "./operations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users.push(payload);
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // .addCase(updateUser.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateUser.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   console.log(payload);
    // })
    // .addCase(updateUser.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});

const persistConfig = { key: "users", storage };

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
