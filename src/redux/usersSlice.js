import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(6),
    favourites: [],
    isAdmin: true,
    isAuth: false,
    user: {
      name: "Valerii",
      surname: "Author",
      phone: "06000000000",
      email: "author@gmail.com",
    },
  },
];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/get":
      console.log(state, "type:", action.type);
      return state;
    case "users/add":
      state[0].favourites = [...state[0].favourites, action.payload];
      console.log(state[0].favourites);
      return state;
    case "users/remove":
      state[0].favourites.filter((el) => el !== action.payload);
      console.log(state[0].favourites);
      return state;
    default:
      return state;
  }
};

export default usersReducer;
