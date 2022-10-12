import axios from "axios";

const API = axios.create({
    baseURL: "https://picsum.photos/"
})
export default API;