const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case "favourites/add":
      state = [...state, action.payload];
      return state;
    case "favourites/remove":
      state = state.filter((el) => el !== action.payload);
      return state;
    default:
      return state;
  }
};

export default favouritesReducer;
