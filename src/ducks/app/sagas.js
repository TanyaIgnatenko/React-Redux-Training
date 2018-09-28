import {call, put} from 'redux-saga/effects';

import * as services from '../auth/services';
import {fetchUserSaga} from '../auth/sagas';
import {initApp} from './actions';

function* initSaga() {
    const apiToken = yield call(services.findApiToken);
    if (apiToken) {
        yield call(services.setApiTokenIntoRequestHeader, apiToken);
        yield call(fetchUserSaga);
    }
    yield put(initApp());
}

export default function* appSaga() {
    yield call(initSaga);
}
