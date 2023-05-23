import axios from "axios";

const api = axios.create({
    // baseURL:"http://192.168.100.3:8000/api"
    // baseURL:"http://192.168.169.200:8000/api"
    baseURL:"https://ganilson.pythonanywhere.com/api"
    // baseURL:"https://ganilson.pythonanywhere.com/api"
})
api.apiUrl = "https://ganilson.pythonanywhere.com/api";

export default api;
