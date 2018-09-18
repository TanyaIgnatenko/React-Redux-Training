import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppContainer from './containers/AppContainer/AppContainer';
import rootReducer from './ducks/reducers';

import './index.scss';

const store = createStore(rootReducer);
const mountNode = document.getElementById('root');

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    mountNode
);
