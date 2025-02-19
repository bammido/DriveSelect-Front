import axios from "axios";

const url = import.meta.env.VITE_DRIVESELECT_API_URL

console.log(url)

export const driveSelect = axios.create({
    baseURL: url
})