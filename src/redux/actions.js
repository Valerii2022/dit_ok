export const allItems = (value) => {
  return { type: "items/get", payload: value };
};

export const allUsers = (value) => {
  return { type: "users/get", payload: value };
};

export const addToFavourites = (value) => {
  return { type: "users/add", payload: value };
};

export const removeFromFavourites = (value) => {
  return { type: "users/remove", payload: value };
};

export const allReviews = (value) => {
  return { type: "reviews/get", payload: value };
};
