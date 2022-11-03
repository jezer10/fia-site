import axios from "axios";
export const baseURL = "https://server-sites.herokuapp.com/api";
export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
