import {LOGIN, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_SUCCESS} from './actionTypes';

const login = (email, password) => ({
    type: LOGIN,
    credentials: {
        email,
        password
    }
});

const loginSuccess = (role) => ({
    type: LOGIN_SUCCESS,
    role
});

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

const signupSuccess = (role) => ({
    type: SIGN_UP_SUCCESS,
    role
});
