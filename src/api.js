import axios from 'axios';
import {API_URL} from 'config';
import humps from 'humps';
import {X_Application_Key} from './config';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Application-Key': X_Application_Key
    }
});

instance.interceptors.request.use(function (request) {
    request.data = humps.decamelizeKeys(request.data);
    return request;
});

instance.interceptors.response.use(function (response) {
    return humps.camelizeKeys(response.data.data);
});

const setTokenIntoRequestHeader = (token) => instance.defaults.headers['Authorization'] = `Bearer ${token}`;

const removeTokenFromRequestHeader = () => delete instance.defaults.headers['Authorization'];

export {instance, setTokenIntoRequestHeader, removeTokenFromRequestHeader};
