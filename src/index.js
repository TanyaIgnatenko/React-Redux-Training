import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// import AppContainer from './containers/app/App';
// import {store} from './store/store';

import './index.scss';
import Pagination from './components/common/Pagination/Pagination';


const mountNode = document.getElementById('root');
//
// render(
//     <Provider store={store}>
//         <AppContainer/>
//     </Provider>,
//     mountNode
// );

render(
    <Pagination pageCount={6} activePage={1} onPageClick={() => {}}/>,
    mountNode
);
