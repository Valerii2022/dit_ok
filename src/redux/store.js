import { itemsReducer } from "./advertsSlice";
import { usersReducer } from "./usersSlice";
import { reviewsReducer } from "./reviewsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
  },
});
