import {loginError, loginSuccess, registerError, registerSuccess, setUser} from './actions';
import {call, put, race, take} from 'redux-saga/effects';
import {LOGIN, LOGOUT, REGISTER} from './actionTypes';
import * as services from './services';


function* fetchUserSaga() {
    const response = yield call(services.fetchUser);
    const {user} = response;
    yield put(setUser(user));
}

function* loginSaga({credentials}) {
    try {
        const response = yield call(services.login, credentials);
        const {token} = response;
        yield call(services.setApiToken, token);
        yield call(fetchUserSaga);
        yield put(loginSuccess());
    } catch (e) {
        yield call(services.removeApiToken);
        yield put(loginError(e));
        throw e;
    }
}

function* registerSaga({credentials}) {
    try {
        const response = yield call(services.register, credentials);
        const {user, token} = response;
        yield call(services.setApiToken, token);
        yield put(setUser(user));
        yield put(registerSuccess());
    } catch (e) {
        yield put(registerError(e.message));
        throw e;
    }
}

function* initSaga() {
    const apiToken = yield call(services.findApiToken);
    if (apiToken) {
        try {
            yield call(services.setApiToken, apiToken);
            yield call(fetchUserSaga);
            yield take(LOGOUT);
        } finally {
            yield call(services.removeApiToken);
        }
    }
}

export function* watchAuthRequests() {
    yield call(initSaga);
    while (true) {
        const {login, register} = yield race({
            login: take(LOGIN.REQUEST),
            register: take(REGISTER.REQUEST)
        });

        try {
            if (login) {
                yield call(loginSaga, login);
            } else {
                yield call(registerSaga, register);
            }
        } catch (e) {
            continue;
        }

        yield take(LOGOUT);
        yield call(services.removeApiToken);
    }
}
