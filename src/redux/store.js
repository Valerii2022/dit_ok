import { advertsReducer } from "./advertsSlice";
import { usersReducer } from "./usersSlice";
import { reviewsReducer } from "./reviewsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { subscriptionReducer } from "./subscriptionsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    filters: filtersReducer,
    subscriptions: subscriptionReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
