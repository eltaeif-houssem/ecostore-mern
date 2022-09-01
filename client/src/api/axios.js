import axios from "axios";

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "https://ecostore-web-app.herokuapp.com/api",
});

export default instance;
