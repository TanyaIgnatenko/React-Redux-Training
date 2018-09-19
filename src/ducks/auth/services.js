import API from 'api';

const login = (credentials) => API.post('/login', credentials);

const register = (credentials) => API.post('/register', credentials);

const fetchUser = () => API.get('/user');

export {
    login,
    register,
    fetchUser
};
