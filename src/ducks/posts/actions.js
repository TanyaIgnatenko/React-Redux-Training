import {
    ADD_POST, EDIT_POST, FETCH_POSTS, REMOVE_POST, RESET_ADD_POST_STATUS, RESET_EDIT_POST_STATUS,
    RESET_FETCH_POSTS_STATUS,
    RESET_REMOVE_POST_STATUS, RESET_TOGGLE_LIKE_STATUS,
    TOGGLE_LIKE
} from './actionTypes';
import {RESET_LOGIN_STATUS} from '../auth/actionTypes';

const addPostRequest = (post) => ({
    type: ADD_POST.REQUEST,
    post
});

const addPostSuccess = (post) => ({
    type: ADD_POST.SUCCESS,
    post
});

const addPostError = (error) => ({
    type: ADD_POST.ERROR,
    error
});

const editPostRequest = (id, post) => ({
    type: EDIT_POST.REQUEST,
    id,
    post
});

const editPostSuccess = (id, post) => ({
    type: EDIT_POST.SUCCESS,
    id,
    post
});

const editPostError = (error) => ({
    type: EDIT_POST.ERROR,
    error
});

const removePostRequest = (id) => ({
    type: REMOVE_POST.REQUEST,
    id
});

const removePostSuccess = (id) => ({
    type: REMOVE_POST.SUCCESS,
    id
});

const removePostError = (error) => ({
    type: REMOVE_POST.ERROR,
    error
});

const fetchPostsRequest = () => ({
    type: FETCH_POSTS.REQUEST
});

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS.SUCCESS,
    posts
});

const fetchPostsError = (error) => ({
    type: FETCH_POSTS.ERROR,
    error
});

const toggleLikeRequest = (id) => ({
    type: TOGGLE_LIKE.REQUEST,
    id
});

const toggleLikeSuccess = (post) => ({
    type: TOGGLE_LIKE.SUCCESS,
    post
});

const toggleLikeError = (error) => ({
    type: TOGGLE_LIKE.ERROR,
    error
});

const resetFetchPostsStatus = () => ({
    type: RESET_FETCH_POSTS_STATUS
});

const resetAddPostStatus = () => ({
    type: RESET_ADD_POST_STATUS
});

const resetEditPostStatus = () => ({
    type: RESET_EDIT_POST_STATUS
});

const resetRemovePostStatus = () => ({
    type: RESET_REMOVE_POST_STATUS
});

const resetToggleLikeStatus = () => ({
    type: RESET_TOGGLE_LIKE_STATUS
});

export {
    addPostRequest,
    addPostSuccess,
    addPostError,
    editPostRequest,
    editPostSuccess,
    editPostError,
    removePostRequest,
    removePostSuccess,
    removePostError,
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsError,
    toggleLikeRequest,
    toggleLikeSuccess,
    toggleLikeError,
    resetFetchPostsStatus,
    resetAddPostStatus,
    resetEditPostStatus,
    resetRemovePostStatus,
    resetToggleLikeStatus
};

