// src/lib/axios.js
import axios from "axios";

const api = axios.create({
    baseURL: "https://node-stripe-deploy-30.onrender.com",
    timeout: 200000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
