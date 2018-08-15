import React from 'react';
import {render} from 'react-dom';

import LikeButton from './components/LikeButton/LikeButton';

const mountNode = document.getElementById('root');
render(<LikeButton/>, mountNode);
