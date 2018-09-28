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

const fetchPostsRequest = (perPage, page) => ({
    type: FETCH_POSTS.REQUEST,
    perPage,
    page
});

const fetchPostsSuccess = (posts, meta) => ({
    type: FETCH_POSTS.SUCCESS,
    posts,
    meta
});

const fetchPostsError = (error) => ({
    type: FETCH_POSTS.ERROR,
    error
});

const fetchPostRequest = (id) => ({
    type: FETCH_POST.REQUEST,
    id
});

const fetchPostSuccess = (post) => ({
    type: FETCH_POST.SUCCESS,
    post
});

const fetchPostError = (error) => ({
    type: FETCH_POST.ERROR,
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
    type: RESET_STATUS.FETCH_POSTS
});

const resetFetchPostStatus = () => ({
    type: RESET_STATUS.FETCH_POST
});

const resetAddPostStatus = () => ({
    type: RESET_STATUS.ADD_POST
});

const resetEditPostStatus = () => ({
    type: RESET_STATUS.EDIT_POST
});

const resetRemovePostStatus = () => ({
    type: RESET_STATUS.REMOVE_POST
});

const resetToggleLikeStatus = () => ({
    type: RESET_STATUS.TOGGLE_LIKE
});

const selectPage = page => ({
    type: SELECT_PAGE,
    page
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
    fetchPostRequest,
    fetchPostSuccess,
    fetchPostError,
    toggleLikeRequest,
    toggleLikeSuccess,
    toggleLikeError,
    resetFetchPostsStatus,
    resetFetchPostStatus,
    resetAddPostStatus,
    resetEditPostStatus,
    resetRemovePostStatus,
    resetToggleLikeStatus,
    selectPage
};

