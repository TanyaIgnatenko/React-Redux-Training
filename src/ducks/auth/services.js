import request from 'helpers/request';

const login = (credentials) => request.post('/login', credentials);

const register = (credentials) => request.post('/register', credentials);

const fetchUser = () => request.get('/user');

export {
    login,
    register,
    fetchUser
};
