import axios from "axios";

export const BACKEND_URL =
  "https://365commercial-portal.sootsoft.hu/banners/szeged";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
