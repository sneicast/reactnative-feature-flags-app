import { API_TOKEN, API_URL } from '@env';
import axios from 'axios';

const movieDB = axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_TOKEN,
        language: 'es-ES'
    }
})

export default movieDB;