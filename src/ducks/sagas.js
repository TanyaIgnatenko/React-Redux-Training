import {all, call} from 'redux-saga/effects';
import {watchAuthRequests} from './auth/saga';
import {watchPostRequests} from './posts/saga';

export default function* rootSaga() {
    yield all([
        call(watchAuthRequests),
        call(watchPostRequests)
    ]);
}

