import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://653a0e10e3b530c8d9e91220.mockapi.io";

export const fetchAdverts = createAsyncThunk("images/fetchAll", async () => {
  const response = await axios.get("/images");
  return response.data;
});

export const fetchCurrentAdvert = createAsyncThunk("images", async (id) => {
  const response = await axios.get(`/images/${id}`);
  return response.data;
});

export const fetchUsers = createAsyncThunk("products/fetchAll", async () => {
  const response = await axios.get("/products");
  return response.data;
});

export const fetchCurrentUser = createAsyncThunk("products", async (id) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
});
