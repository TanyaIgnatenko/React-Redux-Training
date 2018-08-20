import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import createHistory from 'history/createBrowserHistory';

import AppContainer from './containers/AppContainer/AppContainer';

import './index.css';

const mountNode = document.getElementById('root');
const history = createHistory();

render((
    <Router history={history}>
        <AppContainer history={history}/>
    </Router>
), mountNode);
