import request from 'helpers/request';

const login = (credentials) => request.post('/login', credentials);

const register = (credentials) => request.post('/register', credentials);

export default {
    login,
    register
};
