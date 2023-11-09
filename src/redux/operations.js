import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./advertsSlice";

axios.defaults.baseURL = "https://653a0e10e3b530c8d9e91220.mockapi.io";
export const fetchAdverts = () => async (dispatch) => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/images");
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
