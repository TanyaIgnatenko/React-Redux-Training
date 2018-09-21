import {ADD_POST, EDIT_POST, FETCH_POSTS, REMOVE_POST, TOGGLE_LIKE} from './actionTypes';

const initialState = {
    isFetching: false,
    posts: [],
    error: null
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST.SUCCESS:
            return {
                ...state,
                posts: [
                    action.post,
                    ...state.posts
                ]
            };
        case EDIT_POST.SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.id ? action.post : post)
            };
        case REMOVE_POST.SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };
        case FETCH_POSTS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_POSTS.SUCCESS:
            return {
                isFetching: false,
                posts: action.posts
            };
        case FETCH_POSTS.ERROR:
            return {
                ...state,
                isFetching: false,
                posts: [],
                error: action.error
            };
        case ADD_POST.ERROR:
            return {
                ...state,
                error: action.error
            };
        case EDIT_POST.ERROR:
            return {
                ...state,
                error: action.error
            };
        case REMOVE_POST.ERROR:
            return {
                ...state,
                error: action.error
            };
        case TOGGLE_LIKE.SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.post.id ? action.post : post)
            };
        case TOGGLE_LIKE.ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
