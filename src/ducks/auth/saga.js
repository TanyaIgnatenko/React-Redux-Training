import * as actions from './actions';
import * as actionTypes from './actionTypes';
import {takeLatest} from 'redux-saga';
import * as services from './services';
import {all, call, put} from 'redux-saga/effects';

function* loginSaga(action) {
    try {
        const user = yield call(services.login, action.credentials);
        yield put(actions.loginSuccess(user));
    } catch (e) {
        yield put(actions.loginError(e));
    }
}

function* signupSaga(action) {
    try {
        const user = yield call(services.signup, action.credentials);
        yield put(actions.signupSuccess(user));
    } catch (e) {
        yield put(actions.signupError(e.message));
    }
}

export function* watchAuthRequests() {
    yield all([
        yield takeLatest(actionTypes.LOGIN_REQUEST, loginSaga),
        yield takeLatest(actionTypes.SIGN_UP_REQUEST, signupSaga)
    ]);
}
