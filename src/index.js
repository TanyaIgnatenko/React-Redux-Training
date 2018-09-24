import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import AppContainer from './containers/app/App';
import {store} from './store/store';

import './index.scss';


const mountNode = document.getElementById('root');

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    mountNode
);
