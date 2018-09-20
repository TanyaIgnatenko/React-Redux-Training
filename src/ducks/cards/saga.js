import {all} from 'redux-saga/effects';
import {ADD_CARD, EDIT_CARD, FETCH_CARDS, REMOVE_CARD} from './actionTypes';
import {takeLatest, takeEvery, call, put} from 'redux-saga/effects';
import * as services from './services';


function* addCardSaga({card}) {
    try {
        yield call(services.addCard, card);
        yield put(ADD_CARD.SUCCESS, card);
    } catch (e) {
        yield put(ADD_CARD.ERROR, e);
    }
}

function* editCardSaga({id, card}) {
    try {
        yield call(services.editCard, id, card);
        yield put(EDIT_CARD.SUCCESS, id, card);
    } catch (e) {
        yield put(EDIT_CARD.ERROR, e);
    }
}

function* removeCardSaga({id}) {
    try {
        yield call(services.removeCard, id);
        yield put(REMOVE_CARD.SUCCESS, id);
    } catch (e) {
        yield put(REMOVE_CARD.ERROR, e);
    }
}

function* fetchCardsSaga() {
    try {
        console.log('fetchCardsSaga hello:');
        const response = yield call(services.fetchCards);
        const cards = response.data.data;
        console.log('response: ', response);
        console.log('cards: ', cards);
        yield put(FETCH_CARDS.SUCCESS, cards);
    } catch (e) {
        yield put(FETCH_CARDS.ERROR, e);
    }
}

export function* watchCardRequests() {
    console.log('watchCardsRequestsSaga: ');
    yield all([
        takeLatest(ADD_CARD.REQUEST, addCardSaga),
        takeLatest(EDIT_CARD.REQUEST, editCardSaga),
        takeLatest(REMOVE_CARD.REQUEST, removeCardSaga),
        takeLatest(FETCH_CARDS.REQUEST, fetchCardsSaga)
    ]);
}
