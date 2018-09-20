import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import AppContainer from './containers/AppContainer/AppContainer';
import rootSaga from './ducks/sagas';

import rootReducer from './ducks/reducers';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const mountNode = document.getElementById('root');

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    mountNode
);
