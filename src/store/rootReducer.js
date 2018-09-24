import {combineReducers} from 'redux';
import {auth} from '../ducks/auth/reducer';
import {posts} from '../ducks/posts/reducer';
import {app} from '../ducks/app/reducer';

export default combineReducers({
    app,
    auth,
    posts
});

