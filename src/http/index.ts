import axios from "axios";

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const baseURL = import.meta.env.VITE_TMDB_BASE_URL;

const config = {
  baseURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_key}`,
  },
};

const request = axios.create(config);

export default request;
