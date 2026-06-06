import axios from "axios";

const api = axios.create({
    baseURL: "https://rrs-w5.onrender.com/api"
});

export default api;