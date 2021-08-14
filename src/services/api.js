import axios from "axios";
// import { API_URL } from "react-native-dotenv";
// console.warn(API_URL);
const api = axios.create({
  baseURL: "https://www.reddit.com", //API_URL,
});

export default api;
