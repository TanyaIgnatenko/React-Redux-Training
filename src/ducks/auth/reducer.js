import {LOGIN, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_SUCCESS} from './actionTypes';

export const auth = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                email: action.credentials.email,
                password: action.credentials.password
            };
        case LOGIN_SUCCESS:
            return {
                role: action.role
            };
        case SIGN_UP:
            return {
                email: action.credentials.email,
                password: action.credentials.password
            };
        case SIGN_UP_SUCCESS:
            return {
                role: action.role
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
