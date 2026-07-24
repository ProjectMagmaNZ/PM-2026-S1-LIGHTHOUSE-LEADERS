import axios from "axios";



const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  withCredentials: true,
});

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
export default api;