import axios from "axios";

const url = import.meta.env.DRIVESELECT_API_URL

export const driveSelect = axios.create({
    baseURL: url
})