import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/App/App';

import './index.css';

const mountNode = document.getElementById('root');
const history = createHistory();

render((
    <BrowserRouter>
        <App history={history}/>
    </BrowserRouter>
), mountNode);
