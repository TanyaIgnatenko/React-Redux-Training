import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App/App';

import './index.css';

const mountNode = document.getElementById('root');

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), mountNode);
