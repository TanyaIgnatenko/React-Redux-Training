import {all, call} from 'redux-saga/effects';
import {watchAuthRequests} from './auth/saga';

export default function* rootSaga() {
    yield all([
        call(watchAuthRequests)
    ]);
}

