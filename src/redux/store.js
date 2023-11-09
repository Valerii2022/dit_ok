import { itemsReducer } from "./advertsSlice";
import { usersReducer } from "./usersSlice";
import { reviewsReducer } from "./reviewsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    filters: filtersReducer,
  },
});
