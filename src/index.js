import React from 'react';
import {render} from 'react-dom';

import Card from './components/Card/Card';

const mountNode = document.getElementById('root');
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco.`;
render(<Card title='Card1' description={description} editHandler={() => {}}/>, mountNode);
