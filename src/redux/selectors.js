export const getAdverts = (state) => state.adverts;
export const getUsers = (state) => state.users.users;
export const getFavourites = (state) => state.currentUser.favourites;
export const getOrders = (state) => state.currentUser.orders;
export const getCurrentUser = (state) => state.currentUser;
export const getUserStatus = (state) => state.status.isLoggedIn;
export const getReviews = (state) => state.reviews;
export const getCategoryFilter = (state) => state.filters.category;
export const getAdvertFilter = (state) => state.filters.advert;
