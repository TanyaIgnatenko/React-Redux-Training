const ADD_POST = {
    REQUEST: '@@posts/ADD_POST_REQUEST',
    SUCCESS: '@@posts/ADD_POST_SUCCESS',
    ERROR: '@@posts/ADD_POST_ERROR'
};

const EDIT_POST = {
    REQUEST: '@@posts/EDIT_POST_REQUEST',
    SUCCESS: '@@posts/EDIT_POST_SUCCESS',
    ERROR: '@@posts/EDIT_POST_ERROR'
};

const REMOVE_POST = {
    REQUEST: '@@posts/REMOVE_POST_REQUEST',
    SUCCESS: '@@posts/REMOVE_POST_SUCCESS',
    ERROR: '@@posts/REMOVE_POST_ERROR'
};

const FETCH_POSTS = {
    REQUEST: '@@posts/FETCH_POSTS_REQUEST',
    SUCCESS: '@@posts/FETCH_POSTS_SUCCESS',
    ERROR: '@@posts/FETCH_POSTS_ERROR'
};

const TOGGLE_LIKE = {
    REQUEST: '@@posts/TOGGLE_LIKE_REQUEST',
    SUCCESS: '@@posts/TOGGLE_LIKE_SUCCESS',
    ERROR: '@@posts/TOGGLE_LIKE_ERROR'
};

export {
    ADD_POST,
    EDIT_POST,
    REMOVE_POST,
    FETCH_POSTS,
    TOGGLE_LIKE
};

