import axios from "axios";

const instance = axios.create({
  baseURL: "https://testingnode-hvci.onrender.com/api",
  withCredentials: false,
});

export default instance;
