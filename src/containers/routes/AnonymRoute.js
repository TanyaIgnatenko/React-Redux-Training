import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectIsAuth} from '../../ducks/auth/selectors';
import {Routes} from '../../config';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
    <Route {...rest} render={(props) => (
        !isAuth ? <Component {...props} /> : <Redirect to={Routes.POSTS}/>
    )}/>
);

const mapStateToProps = state => ({
    isAuth: selectIsAuth(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
