import {LOGIN, LOGOUT, REGISTER, SET_USER} from './actionTypes';
import {Status} from '../../constants';
import {changeStatus} from './helpers';


const initialState = {
    status: {
        login: Status.IDLE,
        register: Status.IDLE
    },
    user: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, login: Status.IN_PROGRESS})
            };
        case LOGIN.SUCCESS:
            return {
                ...state,
                status: changeStatus({status: state.status, login: Status.SUCCESS})
            };
        case LOGIN.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, login: Status.ERROR})
            };
        case REGISTER.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, register: Status.IN_PROGRESS})
            };
        case REGISTER.SUCCESS:
            return {
                ...state,
                status: changeStatus({status: state.status, register: Status.SUCCESS})
            };
        case REGISTER.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, register: Status.ERROR})
            };
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case LOGOUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};
