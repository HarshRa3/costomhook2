import axios from "axios";
const instance = axios.create({
  baseURL: "https://etechpolltesting.onrender.com/",
});
export default instance
