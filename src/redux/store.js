import { advertsReducer } from "./advertsSlice";
import { currentUserReducer } from "./currentUserSlice";
import { reviewsReducer } from "./reviewsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { subscriptionReducer } from "./subscriptionsSlice";
import { usersReducer } from "./usersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { statusReducer } from "./statusSlice";

export const store = configureStore({
  reducer: {
    status: statusReducer,
    currentUser: currentUserReducer,
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
