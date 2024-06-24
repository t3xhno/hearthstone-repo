import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BE_URL || "http://localhost:5000",
});

export default apiClient;
