import axios from "axios";

let BASEURL = null;
if (process.env.NODE_ENV === "production") {
  BASEURL = "https://api-incov-19.herokuapp.com";
} else {
  BASEURL = "http://localhost:8000";
}

const axiosInstance = axios.create({
  baseURL: BASEURL,
});

export default axiosInstance;
