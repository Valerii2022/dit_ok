import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import itemsReducer from "./itemsSlice";
import usersReducer from "./usersSlice";
import favouritesReducer from "./favouritesSlice";
import reviewsReducer from "./reviewsSlice";

const reducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
  favourites: favouritesReducer,
  reviews: reviewsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
