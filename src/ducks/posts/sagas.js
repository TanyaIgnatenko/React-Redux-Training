import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {push} from 'connected-react-router';

import {ADD_POST, EDIT_POST, FETCH_POST, FETCH_POSTS, REMOVE_POST, TOGGLE_LIKE} from './actionTypes';
import * as services from './services';

import {
    addPostError,
    addPostSuccess,
    editPostError,
    editPostSuccess,
    fetchPostError,
    fetchPostsError,
    fetchPostsSuccess,
    fetchPostSuccess,
    removePostError,
    removePostSuccess,
    toggleLikeError,
    toggleLikeSuccess
} from './actions';
import {Routes} from '../../config';


function* addPostSaga({post}) {
    try {
        const {post: addedPost} = yield call(services.addPost, post);
        yield put(addPostSuccess(addedPost));
        yield put(push(Routes.POSTS));
    } catch (e) {
        yield put(addPostError(e));
        yield put(push(Routes.POSTS));
    }
}

function* editPostSaga({id, post}) {
    try {
        yield call(services.editPost, id, post);
        yield put(editPostSuccess(id, post));
    } catch (e) {
        yield put(editPostError(e));
    } finally {
        yield put(push(Routes.POSTS));
    }
}

function* removePostSaga({id}) {
    try {
        yield call(services.deletePost, id);
        yield put(removePostSuccess(id));
    } catch (e) {
        yield put(removePostError(e));
    } finally {
        yield put(push(Routes.POSTS));
    }
}

function* fetchPostsSaga({page, perPage}) {
    try {
        const {posts, meta} = yield call(services.fetchPosts, {page, perPage});
        yield put(fetchPostsSuccess(posts, meta));
    } catch (e) {
        yield put(fetchPostsError(e));
    }
}

function* fetchPostSaga({id}) {
    try {
        const {post} = yield call(services.fetchPost, id);
        yield put(fetchPostSuccess(post));
    } catch (e) {
        yield put(fetchPostError(e));
    }
}

function* toggleLikeSaga({id}) {
    try {
        const {post} = yield call(services.toggleLike, id);
        yield put(toggleLikeSuccess(post));
    } catch (e) {
        yield put(toggleLikeError(e));
    }
}

export function* watchPostRequests() {
    yield all([
        takeLatest(ADD_POST.REQUEST, addPostSaga),
        takeLatest(EDIT_POST.REQUEST, editPostSaga),
        takeLatest(REMOVE_POST.REQUEST, removePostSaga),
        takeLatest(FETCH_POSTS.REQUEST, fetchPostsSaga),
        takeLatest(FETCH_POST.REQUEST, fetchPostSaga),
        takeEvery(TOGGLE_LIKE.REQUEST, toggleLikeSaga)
    ]);
}
