/*
pasta services
serve para qualquer tipo de servicos que faz uma comunicação externa
*/
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;

