import {all, call} from 'redux-saga/effects';
import {watchAuthRequests} from './auth/saga';
import {watchCardRequests} from './cards/saga';

export default function* rootSaga() {
    yield all([
        call(watchAuthRequests),
        call(watchCardRequests)
    ]);
}

