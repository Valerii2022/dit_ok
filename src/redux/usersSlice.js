const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "users/get":
      console.log(state, "type:", action.type);
      return state;
    default:
      return state;
  }
};

export default usersReducer;
