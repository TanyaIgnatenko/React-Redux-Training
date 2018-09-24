import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../ducks/reducers';
import rootSaga from '../ducks/sagas';


const history = createBrowserHistory();
const navigationMiddleware = routerMiddleware(history);


const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, navigationMiddleware))
);

sagaMiddleware.run(rootSaga);

export {
    history,
    store
};

