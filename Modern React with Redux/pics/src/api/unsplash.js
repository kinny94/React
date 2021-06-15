import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID Co5j0XbQT-XS5uR5eoohK-yT0njJxLNW2vbKL8P7Yac',
    }
});