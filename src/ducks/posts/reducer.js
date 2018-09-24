import {
    ADD_POST, EDIT_POST, FETCH_POSTS, REMOVE_POST, RESET_ADD_POST_STATUS, RESET_EDIT_POST_STATUS,
    RESET_FETCH_POSTS_STATUS, RESET_REMOVE_POST_STATUS, RESET_TOGGLE_LIKE_STATUS, SELECT_PAGE,
    TOGGLE_LIKE
} from './actionTypes';
import {Status} from '../../constants';
import * as arrayHelpers from '../../helpers/arrayHelpers';
import {changeStatus} from './helpers';

const initialState = {
    status: {
        fetchPosts: Status.IDLE,
        addPost: Status.IDLE,
        editPost: Status.IDLE,
        deletePost: Status.IDLE,
        toggleLike: Status.IDLE
    },
    posts: [],
    selectedPage: 1
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPosts: Status.IN_PROGRESS})
            };
        case FETCH_POSTS.SUCCESS:
            return {
                ...state,
                posts: action.posts,
                status: changeStatus({status: state.status, fetchPosts: Status.SUCCESS})
            };
        case FETCH_POSTS.ERROR:
            return {
                ...state,
                posts: [],
                status: changeStatus({status: state.status, fetchPosts: Status.ERROR})
            };
        case ADD_POST.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, addPost: Status.IN_PROGRESS})
            };
        case ADD_POST.SUCCESS:
            return {
                ...state,
                posts: arrayHelpers.addItem(state.posts, action.post),
                status: changeStatus({status: state.status, addPost: Status.SUCCESS})
            };
        case ADD_POST.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, addPost: Status.ERROR})
            };
        case EDIT_POST.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, editPost: Status.IN_PROGRESS})
            };
        case EDIT_POST.SUCCESS:
            return {
                ...state,
                posts: arrayHelpers.replaceItem(state.posts, action.post.id, action.post),
                status: changeStatus({status: state.status, editPost: Status.SUCCESS})
            };
        case EDIT_POST.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, editPost: Status.ERROR})
            };
        case REMOVE_POST.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, removePost: Status.IN_PROGRESS})
            };
        case REMOVE_POST.SUCCESS:
            return {
                ...state,
                posts: arrayHelpers.removeItem(state.posts, action.id),
                status: changeStatus({status: state.status, removePost: Status.SUCCESS})
            };
        case REMOVE_POST.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, removePost: Status.ERROR})
            };
        case TOGGLE_LIKE.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, toggleLike: Status.IN_PROGRESS})
            };
        case TOGGLE_LIKE.SUCCESS:
            return {
                ...state,
                posts: arrayHelpers.replaceItem(state.posts, action.post.id, action.post),
                status: changeStatus({status: state.status, toggleLike: Status.SUCCESS})
            };
        case TOGGLE_LIKE.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, toggleLike: Status.ERROR})
            };
        case RESET_FETCH_POSTS_STATUS:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPosts: Status.IDLE})
            };
        case RESET_ADD_POST_STATUS:
            return {
                ...state,
                status: changeStatus({status: state.status, addPost: Status.IDLE})
            };
        case RESET_EDIT_POST_STATUS:
            return {
                ...state,
                status: changeStatus({status: state.status, editPost: Status.IDLE})
            };
        case RESET_REMOVE_POST_STATUS:
            return {
                ...state,
                status: changeStatus({status: state.status, removePost: Status.IDLE})
            };
        case RESET_TOGGLE_LIKE_STATUS:
            return {
                ...state,
                status: changeStatus({status: state.status, toggleLike: Status.IDLE})
            };
        case SELECT_PAGE:
            return {
                ...state,
                selectedPage: action.page
            };
        default:
            return state;
    }
};
