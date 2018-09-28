import {all, call, put, takeLatest} from 'redux-saga/effects';

import {loginError, loginSuccess, registerError, registerSuccess, setUser} from './actions';
import {LOGIN, LOGOUT, REGISTER} from './actionTypes';
import * as services from './services';


export function* fetchUserSaga() {
    const response = yield call(services.fetchUser);
    const {user} = response;
    yield put(setUser(user));
}

function* loginSaga({credentials}) {
    try {
        const response = yield call(services.login, credentials);
        const {token} = response;
        yield call(services.setApiTokenIntoRequestHeader, token);
        yield call(services.saveApiToken, token);
        yield call(fetchUserSaga);
        yield put(loginSuccess());
    } catch (e) {
        yield call(services.removeApiToken);
        yield put(loginError());
    }
}

function* registerSaga({credentials}) {
    try {
        const response = yield call(services.register, credentials);
        const {user, token} = response;
        yield call(services.setApiTokenIntoRequestHeader, token);
        yield call(services.saveApiToken, token);
        yield put(setUser(user));
        yield put(registerSuccess());
    } catch (e) {
        yield put(registerError());
    }
}

function* logoutSaga() {
    yield call(services.removeApiToken);
}


export function* watchAuthRequests() {
    yield all([
        takeLatest(LOGIN.REQUEST, loginSaga),
        takeLatest(REGISTER.REQUEST, registerSaga),
        takeLatest(LOGOUT, logoutSaga)
    ]);
}
