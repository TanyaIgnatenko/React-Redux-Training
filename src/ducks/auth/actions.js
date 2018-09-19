import {LOGIN, LOGOUT, SIGN_UP, FETCH_USER} from './actionTypes';

const loginRequest = (email, password) => ({
    type: LOGIN.REQUEST,
    credentials: {
        email,
        password
    }
});

const loginSuccess = () => ({
    type: LOGIN.SUCCESS
});

const loginError = (error) => ({
    type: LOGIN.REQUEST,
    error
});

const fetchUserRequest = () => ({
    type: FETCH_USER.REQUEST
});

const fetchUserSuccess = (user) => ({
    type: FETCH_USER.SUCCESS,
    user
});

const fetchUserError = (error) => ({
    type: FETCH_USER.ERROR,
    error
});

const logout = () => ({
    type: LOGOUT
});

const signupRequest = (email, password) => ({
    type: SIGN_UP.REQUEST,
    credentials: {
        name,
        email,
        password
    }
});

const signupSuccess = (user) => ({
    type: SIGN_UP.SUCCESS
});

const signupError = (error) => ({
    type: SIGN_UP.ERROR,
    error
});

export default {
    loginRequest,
    loginSuccess,
    loginError,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserError,
    signupRequest,
    signupSuccess,
    signupError,
    logout
};
