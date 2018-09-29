const API_URL = 'http://rest-api.noveogroup.com/api/v1';
const X_Application_Key = 'ZRwQWMEdLbmC84tULS9T25yms57wSoWbEHgm6Sdr';

const SERVER_END_POINT = {
    LOGIN: '/login',
    REGISTER: '/register',
    FETCH_USER: '/user',
    DELETE_POST: '/posts/:id',
    EDIT_POST: '/posts/:id',
    ADD_POST: '/posts',
    FETCH_POSTS: '/posts?per_page=:perPage&page=:page',
    FETCH_POST: '/posts/:id',
    TOGGLE_LIKE: '/posts/:id/like'
};

export {
    API_URL,
    X_Application_Key,
    SERVER_END_POINT
};
