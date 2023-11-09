import reviews from "./feedback";

const reviewsReducer = (state = reviews, action) => {
  switch (action.type) {
    case "reviews/get":
      console.log(state.reviews);
      return state;
    default:
      return state;
  }
};

export default reviewsReducer;
