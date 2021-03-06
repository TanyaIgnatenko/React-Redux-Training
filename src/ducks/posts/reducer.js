import {
    ADD_POST,
    EDIT_POST,
    FETCH_POST,
    FETCH_POSTS,
    REMOVE_POST,
    RESET_STATUS,
    SELECT_PAGE,
    TOGGLE_LIKE
} from './actionTypes';
import {Status} from '../../constants';
import * as arrayHelpers from '../../helpers/arrayHelpers';
import {changeStatus} from './helpers';

const initialState = {
    status: {
        fetchPosts: Status.IDLE,
        fetchPost: Status.IDLE,
        addPost: Status.IDLE,
        editPost: Status.IDLE,
        deletePost: Status.IDLE,
        toggleLike: Status.IDLE
    },
    posts: null,
    selectedPage: 1,
    selectedPost: null,
    pageCount: 1
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
                status: changeStatus({status: state.status, fetchPosts: Status.SUCCESS}),
                selectedPage: action.meta.currentPage,
                pageCount: action.meta.lastPage
            };
        case FETCH_POSTS.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPosts: Status.ERROR})
            };
        case FETCH_POST.REQUEST:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPost: Status.IN_PROGRESS})
            };
        case FETCH_POST.SUCCESS:
            return {
                ...state,
                selectedPost: action.post,
                status: changeStatus({status: state.status, fetchPost: Status.SUCCESS})
            };
        case FETCH_POST.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPost: Status.ERROR})
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
                status: changeStatus({status: state.status, deletePost: Status.IN_PROGRESS})
            };
        case REMOVE_POST.SUCCESS:
            return {
                ...state,
                posts: arrayHelpers.removeItem(state.posts, action.id),
                status: changeStatus({status: state.status, deletePost: Status.SUCCESS})
            };
        case REMOVE_POST.ERROR:
            return {
                ...state,
                status: changeStatus({status: state.status, deletePost: Status.ERROR})
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
        case RESET_STATUS.FETCH_POSTS:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPosts: Status.IDLE})
            };
        case RESET_STATUS.FETCH_POST:
            return {
                ...state,
                status: changeStatus({status: state.status, fetchPost: Status.IDLE})
            };
        case RESET_STATUS.ADD_POST:
            return {
                ...state,
                status: changeStatus({status: state.status, addPost: Status.IDLE})
            };
        case RESET_STATUS.EDIT_POST:
            return {
                ...state,
                status: changeStatus({status: state.status, editPost: Status.IDLE})
            };
        case RESET_STATUS.REMOVE_POST:
            return {
                ...state,
                status: changeStatus({status: state.status, deletePost: Status.IDLE})
            };
        case RESET_STATUS.TOGGLE_LIKE:
            return {
                ...state,
                status: changeStatus({status: state.status, toggleLike: Status.IDLE})
            };
        case SELECT_PAGE:
            return {
                ...state,
                posts: null,
                selectedPage: action.page
            };
        default:
            return state;
    }
};
