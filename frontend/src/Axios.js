import axios from "axios"

const instance = axios.create({
    baseURL: "https://backendappp-ums8.onrender.com/"
})
export default instance;
