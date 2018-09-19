import {LOGIN, LOGOUT, REGISTER} from './actionTypes';

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
                isRequesting: false,
                user: action.user
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
