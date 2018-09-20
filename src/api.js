import axios from 'axios';
import {API_URL} from 'config';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Application-Key': 'ZRwQWMEdLbmC84tULS9T25yms57wSoWbEHgm6Sdr'
    }
});

const setTokenIntoRequestHeader = (token) => instance.defaults.headers['Authorization'] = `Bearer ${token}`;

const removeTokenFromRequestHeader = () => delete instance.defaults.headers['Authorization'];

export {instance, setTokenIntoRequestHeader, removeTokenFromRequestHeader};
