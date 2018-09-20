import {LOGIN, LOGOUT, REGISTER, SET_USER} from './actionTypes';

const initialState = {
    isRequesting: false,
    user: null,
    error: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.REQUEST:
            return {
                ...state,
                isRequesting: true
            };
        case LOGIN.SUCCESS:
            return {
                ...state,
                isRequesting: false
            };
        case LOGIN.ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.error
            };
        case REGISTER.REQUEST:
            return {
                ...state,
                isRequesting: true
            };
        case REGISTER.SUCCESS:
            return {
                ...state,
                isRequesting: false
            };
        case REGISTER.ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.error
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: null
            };
        default:
            return state;
    }
};
