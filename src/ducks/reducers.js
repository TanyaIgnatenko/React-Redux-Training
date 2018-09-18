import {combineReducers} from 'redux';
import {auth} from './auth/reducer';
import {cards} from './cards/reducer';

export default combineReducers({
    auth,
    cards
});

