import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://653a0e10e3b530c8d9e91220.mockapi.io";

// const RESERVE_URL = "";

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

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user, thunkAPI) => {
    console.log(user);
    try {
      const response = await axios.put(`/users/${user.id}`, user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addAdvert = createAsyncThunk(
  "adverts/addAdvert",
  async (advert, thunkAPI) => {
    try {
      const response = await axios.post("/adverts", advert);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteAdvert = createAsyncThunk(
  "adverts/deleteAdvert",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/adverts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const cloudinaryUpload = async (image) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "ml_default");

//     const response = await fetch(
//       `https://api.cloudinary.com/v1_1/dqyjr9t6r/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     return await response.json();
//   } catch (error) {
//     console.error("Error uploading image:", error);
//   }
// };
