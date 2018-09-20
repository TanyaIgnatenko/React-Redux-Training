import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ADD_CARD, EDIT_CARD, FETCH_CARDS, REMOVE_CARD, TOGGLE_LIKE} from './actionTypes';
import * as services from './services';
import {
    addCardError,
    addCardSuccess,
    editCardError,
    editCardSuccess,
    fetchCardsError,
    fetchCardsSuccess,
    removeCardError,
    removeCardSuccess,
    toggleLikeError,
    toggleLikeSuccess
} from './actions';


function* addCardSaga({card}) {
    try {
        const {post} = yield call(services.addCard, card);
        yield put(addCardSuccess(post));
    } catch (e) {
        yield put(addCardError(e));
    }
}

function* editCardSaga({id, card}) {
    try {
        yield call(services.editCard, id, card);
        yield put(editCardSuccess(id, card));
    } catch (e) {
        yield put(editCardError(e));
    }
}

function* removeCardSaga({id}) {
    try {
        yield call(services.removeCard, id);
        yield put(removeCardSuccess(id));
    } catch (e) {
        yield put(removeCardError(e));
    }
}

function* fetchCardsSaga() {
    try {
        const {posts} = yield call(services.fetchCards);
        yield put(fetchCardsSuccess(posts));
    } catch (e) {
        yield put(fetchCardsError(e));
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

export function* watchCardRequests() {
    yield all([
        takeLatest(ADD_CARD.REQUEST, addCardSaga),
        takeLatest(EDIT_CARD.REQUEST, editCardSaga),
        takeLatest(REMOVE_CARD.REQUEST, removeCardSaga),
        takeLatest(FETCH_CARDS.REQUEST, fetchCardsSaga),
        takeEvery(TOGGLE_LIKE.REQUEST, toggleLikeSaga)
    ]);
}
