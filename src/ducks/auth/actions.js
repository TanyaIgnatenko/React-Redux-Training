import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGN_UP_REQUEST, SIGN_UP_SUCCESS} from './actionTypes';

const loginRequest = (email, password) => ({
    type: LOGIN_REQUEST,
    credentials: {
        email,
        password
    }
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});

const loginError = (message) => ({
    type: LOGIN_REQUEST,
    message
});

const logout = () => ({
    type: LOGOUT
});

const signupRequest = (email, password) => ({
    type: SIGN_UP_REQUEST,
    credentials: {
        name,
        email,
        password
    }
});

const signupSuccess = (user) => ({
    type: SIGN_UP_SUCCESS
});

const signupError = (message) => ({
    type: SIGN_UP_SUCCESS,
    message
});

export default {
    loginRequest,
    loginSuccess,
    loginError,
    signupRequest,
    signupSuccess,
    signupError,
    logout
};
