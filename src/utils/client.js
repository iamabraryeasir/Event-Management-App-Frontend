import axios from "axios";

const Client = axios.create({
  baseURL: "https://event-management-app-abrar-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Client;
