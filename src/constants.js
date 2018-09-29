const API_TOKEN_LOCAL_STORAGE_KEY = 'api_token';

const Status = {
    IDLE: 'Status::IDLE',
    IN_PROGRESS: 'Status::IN_PROGRESS',
    SUCCESS: 'Status::SUCCESS',
    ERROR: 'Status::ERROR'
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
    Status,
    API_TOKEN_LOCAL_STORAGE_KEY,
    Routes
};
