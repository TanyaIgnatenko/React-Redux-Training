import {all} from 'redux-saga/effects';
import {ADD_CARD, EDIT_CARD, FETCH_CARDS, REMOVE_CARD} from './actionTypes';
import {takeLatest, call, put} from 'redux-saga/effects';
import { API } from './services';


function* addCardSaga({card}) {
    try {
        yield call(API.addCard, card);
        yield put(ADD_CARD.SUCCESS, card);
    } catch (e) {
        yield put(ADD_CARD.ERROR, e);
    }
}

function* editCardSaga({id, card}) {
    try {
        yield call(API.editCard, id, card);
        yield put(EDIT_CARD.SUCCESS, id, card);
    } catch (e) {
        yield put(EDIT_CARD.ERROR, e);
    }
}

function* removeCardSaga({id}) {
    try {
        yield call(API.removeCard, id);
        yield put(REMOVE_CARD.SUCCESS, id);
    } catch (e) {
        yield put(REMOVE_CARD.ERROR, e);
    }
}

function* fetchCardsSaga() {
    try {
        const cards = yield call(API.fetchCards);
        yield put(FETCH_CARDS.SUCCESS, cards);
    } catch (e) {
        yield put(FETCH_CARDS.ERROR, e);
    }
}

export function* watchCardRequests() {
    yield all([
        takeLatest(ADD_CARD.REQUEST, addCardSaga),
        takeLatest(EDIT_CARD.REQUEST, editCardSaga),
        takeLatest(REMOVE_CARD.REQUEST, removeCardSaga),
        takeLatest(FETCH_CARDS.REQUEST, fetchCardsSaga)
    ]);
}
