import {all, call} from 'redux-saga/effects';
import {watchCardRequests} from './cards/saga';
import {watchAuthRequests} from './auth/saga';

export default function* rootSaga() {
    yield all([
        call[watchAuthRequests],
        call[watchCardRequests]
    ]);
}

