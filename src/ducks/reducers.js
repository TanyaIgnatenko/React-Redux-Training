import {combineReducers} from 'redux';
import {auth} from './auth/reducer';
import {posts} from './posts/reducer';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    auth,
    posts,
    router: routerReducer
});

