import axios from "axios"
import { baseURL } from "./ApiUrl";

export let Axiosinstance=axios.create({
    baseURL:baseURL
})
