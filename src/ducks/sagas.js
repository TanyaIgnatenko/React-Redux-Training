import {all, call, take} from 'redux-saga/effects';
import {watchAuthRequests} from './auth/saga';
import {watchPostRequests} from './posts/saga';
import appSaga from './app/saga';

export default function* rootSaga() {
    yield all([
        call(appSaga),
        call(watchAuthRequests),
        call(watchPostRequests)
    ]);
}

