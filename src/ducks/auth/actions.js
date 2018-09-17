import {LOGIN, LOGOUT, SIGN_UP} from './actionTypes';

const login = (email, password) => ({
    type: LOGIN,
    credentials: {
        email,
        password
    }
})

const logout = () => ({
    type: LOGOUT
});

const signup = (email, password) => ({
    type: SIGN_UP,
    credentials: {
        email,
        password
    }
});
