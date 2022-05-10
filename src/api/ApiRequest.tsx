import axios from "axios";
export const reqResApi = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/list'

});