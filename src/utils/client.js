import axios from "axios";

const Client = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Client;
