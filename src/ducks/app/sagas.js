import {call} from 'redux-saga/effects';
import * as services from '../auth/services';
import {fetchUserSaga} from '../auth/sagas';

function* initSaga() {
    const apiToken = yield call(services.findApiToken);
    if (apiToken) {
        yield call(services.setApiToken, apiToken);
        yield call(fetchUserSaga);
    }
}

export default function* appSaga() {
    yield call(initSaga);
}
