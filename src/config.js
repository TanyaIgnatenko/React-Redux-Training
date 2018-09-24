const API_URL = 'http://rest-api.noveogroup.com/api/v1';
const X_Application_Key = 'ZRwQWMEdLbmC84tULS9T25yms57wSoWbEHgm6Sdr';

const SERVER_END_POINT = {
    LOGIN: '/login',
    REGISTER: '/register',
    FETCH_USER: '/user',
    DELETE_POST: '/posts/:id',
    EDIT_POST: '/posts/:id',
    ADD_POST: '/posts',
    FETCH_POSTS: '/posts',
    TOGGLE_LIKE: '/posts/:id/like'
};

const Routes = {
    ROOT: '/',
    POSTS: '/',
    CREATE_POST: '/create',
    EDIT_POST: '/edit/:id',
    LOGIN: '/login',
    SIGN_UP: '/register'
};

export {
    API_URL,
    X_Application_Key,
    SERVER_END_POINT,
    Routes
};
