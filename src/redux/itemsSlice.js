import images from "./images";

const itemsReducer = (state = images, action) => {
  switch (action.type) {
    case "items/get":
      console.log(state, "type:", action.type);
      return state;

    default:
      return state;
  }
};

export default itemsReducer;
