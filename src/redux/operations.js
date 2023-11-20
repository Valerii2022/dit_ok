import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://653a0e10e3b530c8d9e91220.mockapi.io";

export const fetchAdverts = createAsyncThunk("adverts/fetchAll", async () => {
  const response = await axios.get("/adverts");
  return response.data;
});

export const fetchCurrentAdvert = createAsyncThunk("adverts", async (id) => {
  const response = await axios.get(`/adverts/${id}`);
  return response.data;
});

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const response = await axios.get("/users");
  return response.data;
});

export const fetchCurrentUser = createAsyncThunk("users", async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users", user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   "users/updateUser",
//   async (id, user, thunkAPI) => {
//     try {
//       const response = await axios.put(`/users/${id}`, user);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
