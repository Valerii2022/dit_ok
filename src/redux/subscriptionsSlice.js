import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState: { subscriptions: [] },
  reducers: {
    addToSubscriptions(state, { payload }) {
      if (!state.subscriptions.includes(payload)) {
        state.subscriptions = [...state.subscriptions, payload];
      }
      return state;
    },
  },
});

const persistConfig = { key: "subscriptins", storage };

export const { addToSubscriptions } = subscriptionsSlice.actions;

export const subscriptionReducer = persistReducer(
  persistConfig,
  subscriptionsSlice.reducer
);
