import {all, call, take} from 'redux-saga/effects';
import {watchAuthRequests} from './auth/sagas';
import {watchPostRequests} from './posts/sagas';
import appSaga from './app/sagas';

export default function* rootSaga() {
    yield all([
        call(appSaga),
        call(watchAuthRequests),
        call(watchPostRequests)
    ]);
}

