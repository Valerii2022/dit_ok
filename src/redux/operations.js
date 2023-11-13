import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  fetchingCurrentSuccess,
} from "./advertsSlice";

axios.defaults.baseURL = "https://653a0e10e3b530c8d9e91220.mockapi.io";

export const fetchAdverts = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/images");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const fetchCurrentAdvert = (id) => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(`/images/${id}`);
    dispatch(fetchingCurrentSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
