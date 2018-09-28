import {instance as API, removeTokenFromRequestHeader, setTokenIntoRequestHeader} from '../../api';
import {SERVER_END_POINT} from '../../config';
import {API_TOKEN_LOCAL_STORAGE_KEY} from '../../constants';

const login = credentials => API.post(SERVER_END_POINT.LOGIN, credentials);

const register = credentials => API.post(SERVER_END_POINT.REGISTER, credentials);

const fetchUser = () => API.get(SERVER_END_POINT.FETCH_USER);

const findApiToken = () => localStorage.getItem(API_TOKEN_LOCAL_STORAGE_KEY);

const saveApiToken = token => localStorage.setItem(API_TOKEN_LOCAL_STORAGE_KEY, token);

const setApiTokenIntoRequestHeader = token => setTokenIntoRequestHeader(token);

const removeApiToken = () => {
    localStorage.removeItem(API_TOKEN_LOCAL_STORAGE_KEY);
    removeTokenFromRequestHeader();
};

export {
    login,
    register,
    fetchUser,
    findApiToken,
    saveApiToken,
    setApiTokenIntoRequestHeader,
    removeApiToken
};
