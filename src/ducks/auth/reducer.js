import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGN_UP_REQUEST, SIGN_UP_SUCCESS} from './actionTypes';

const initialState = {
    isRequesting: false,
    name: '',
    email: '',
    password: '',
    user: null,
    error: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isRequesting: true,
                email: action.credentials.email,
                password: action.credentials.password
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                user: action.user
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.error
            };
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isRequesting: true,
                name: action.name,
                email: action.credentials.email,
                password: action.credentials.password
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isRequesting: false
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};
