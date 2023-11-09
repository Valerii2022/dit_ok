import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import images from "./images";
import reviews from "./feedback";

const itemsReducer = (state = images, action) => {
  switch (action.type) {
    case "items/get":
      console.log(state, "type:", action.type);
      return state;

    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "users/get":
      console.log(state, "type:", action.type);
      return state;
    default:
      return state;
  }
};

const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case "favourites/add":
      state = [action.payload];
      return state;
    case "favourites/remove":
      return state;
    default:
      return state;
  }
};

const reviewsReducer = (state = reviews, action) => {
  switch (action.type) {
    case "reviews/get":
      console.log(state.reviews);
      return state;
    default:
      return state;
  }
};

export const allItems = (value) => {
  return { type: "items/get", payload: value };
};

export const allUsers = (value) => {
  return { type: "users/get", payload: value };
};

export const addToFavourites = (value) => {
  return { type: "favourites/add", payload: value };
};

export const removeFromFavourites = (value) => {
  return { type: "favourites/remove", payload: value };
};

export const allReviews = (value) => {
  return { type: "reviews/get", payload: value };
};

const reducer = combineReducers({
  items: itemsReducer,
  users: usersReducer,
  favourites: favouritesReducer,
  reviews: reviewsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
