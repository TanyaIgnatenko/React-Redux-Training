import {LOGIN, LOGOUT, SET_USER, REGISTER, RESET_LOGIN_STATUS, RESET_REGISTER_STATUS} from './actionTypes';

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

const loginError = () => ({
    type: LOGIN.ERROR
});

const logout = () => ({
    type: LOGOUT
});

const registerRequest = (email, password) => ({
    type: REGISTER.REQUEST,
    credentials: {
        name,
        email,
        password
    }
});

const registerSuccess = () => ({
    type: REGISTER.SUCCESS
});

const registerError = () => ({
    type: REGISTER.ERROR
});

const setUser = (user) => ({
    type: SET_USER,
    user
});

const resetLoginStatus = () => ({
    type: RESET_LOGIN_STATUS
});

const resetRegisterStatus = () => ({
    type: RESET_REGISTER_STATUS
});

export {
    loginRequest,
    loginSuccess,
    loginError,
    registerRequest,
    registerSuccess,
    registerError,
    setUser,
    logout,
    resetLoginStatus,
    resetRegisterStatus
};
