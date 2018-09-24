import {all, call, take} from 'redux-saga/effects';
import {watchAuthRequests} from '../ducks/auth/sagas';
import {watchPostRequests} from '../ducks/posts/sagas';
import appSaga from '../ducks/app/sagas';

export default function* rootSaga() {
    yield all([
        call(appSaga),
        call(watchAuthRequests),
        call(watchPostRequests)
    ]);
}

