import {LOGIN, LOGOUT, SIGN_UP} from './actionTypes';

const auth = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                email: action.credentials.email,
                password: action.credentials.password
            };
        case SIGN_UP:
            return {
                email: action.credentials.email,
                password: action.credentials.password
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
