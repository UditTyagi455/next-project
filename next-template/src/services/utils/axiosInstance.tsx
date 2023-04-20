import axios from 'axios';
import { BASE_URL } from "../utils/defines";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use((config) => {
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    
    return Promise.reject(error?.response?.data);
  }
);
export default axiosInstance;