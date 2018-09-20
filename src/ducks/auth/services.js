import {instance as API, removeTokenFromRequestHeader, setTokenIntoRequestHeader} from 'api';

const API_TOKEN_KEY = 'api_token';

const login = (credentials) => API.post('/login', credentials);

const register = (credentials) => API.post('/register', credentials);

const fetchUser = () => API.get('/user');

const findApiToken = () => localStorage.getItem(API_TOKEN_KEY);

const setApiToken = (token) => {
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
