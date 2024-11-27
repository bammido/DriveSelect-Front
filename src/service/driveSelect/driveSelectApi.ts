import axios from "axios";

export const driveSelect = axios.create({
    baseURL: 'http://localhost:8080'
})