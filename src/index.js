import React from 'react';
import {render} from 'react-dom';

import AppContainer from './containers/AppContainer/AppContainer';

import './index.scss';

const mountNode = document.getElementById('root');

render(<AppContainer/>, mountNode);
