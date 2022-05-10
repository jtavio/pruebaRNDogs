import axios from "axios";
export const resBreet = axios.create({
    baseURL: 'https://dog.ceo/api/breed'

});