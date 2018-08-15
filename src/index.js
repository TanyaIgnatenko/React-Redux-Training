import React from 'react';
import {render} from 'react-dom';

import Card from './components/Card/Card';
import Page from './components/Page/Page';

const mountNode = document.getElementById('root');
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco.`;
const pageContent = <Card title='Card1' description={description} editHandler={() => {}}/>;
render(<Page title='Card List' content={pageContent}/>, mountNode);
