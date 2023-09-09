import axios from "axios"

const API_URL = 'https://my.api.mockaroo.com/';

export const $api = axios.create({
    baseURL: API_URL,
});