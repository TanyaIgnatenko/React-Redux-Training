import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ADD_POST, EDIT_POST, FETCH_POSTS, REMOVE_POST, TOGGLE_LIKE} from './actionTypes';
import * as services from './services';

import {
    addPostError,
    addPostSuccess,
    editPostError,
    editPostSuccess,
    fetchPostsError,
    fetchPostsSuccess,
    removePostError,
    removePostSuccess,
    toggleLikeError,
    toggleLikeSuccess
} from './actions';
import {Routes} from '../../config';
import {push} from 'connected-react-router';


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

function* fetchPostsSaga() {
    try {
        const {posts} = yield call(services.fetchPosts);
        yield put(fetchPostsSuccess(posts));
    } catch (e) {
        yield put(fetchPostsError(e));
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
        takeEvery(TOGGLE_LIKE.REQUEST, toggleLikeSaga)
    ]);
}
