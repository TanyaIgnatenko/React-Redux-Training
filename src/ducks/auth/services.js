import {instance as API, removeTokenFromRequestHeader, setTokenIntoRequestHeader} from 'api';
import {SERVER_END_POINT} from '../../config';

const API_TOKEN_KEY = 'api_token';

const login = credentials => API.post(SERVER_END_POINT.LOGIN, credentials);

const register = credentials => API.post(SERVER_END_POINT.REGISTER, credentials);

const fetchUser = () => API.get(SERVER_END_POINT.FETCH_USER);

const findApiToken = () => localStorage.getItem(API_TOKEN_KEY);

const setApiToken = token => {
    localStorage.setItem(API_TOKEN_KEY, token);
    setTokenIntoRequestHeader(token);
};

const removeApiToken = () => {
    localStorage.removeItem(API_TOKEN_KEY);
    removeTokenFromRequestHeader();
};

export {
    login,
    register,
    fetchUser,
    findApiToken,
    setApiToken,
    removeApiToken
};
