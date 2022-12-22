import axios from "axios";
export const baseURL = "https://server-sites-production.up.railway.app/api";
export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
