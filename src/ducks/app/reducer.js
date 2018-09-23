import {INIT_APP} from './actionTypes';

const initialState = {
    isInitialised: false
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP:
            return {
                ...state,
                isInitialised: true
            };
        default:
            return state;
    }
};
