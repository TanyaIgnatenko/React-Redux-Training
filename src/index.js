import React from 'react';
import {render} from 'react-dom';

import AppContainer from './containers/AppContainer/AppContainer';

import './index.css';

const mountNode = document.getElementById('root');

render(<AppContainer/>, mountNode);
