import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AppContainer from './containers/AppContainer/AppContainer';

import './index.css';

const mountNode = document.getElementById('root');
const history = createHistory();

render((
    <BrowserRouter>
        <AppContainer history={history}/>
    </BrowserRouter>
), mountNode);
