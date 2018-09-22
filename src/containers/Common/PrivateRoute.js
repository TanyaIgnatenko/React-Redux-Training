import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Routes} from '../../config';
import {connect} from 'react-redux';
import {selectIsAuth} from '../../ducks/auth/selectors';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAuth ? <Component {...props} /> : <Redirect to={Routes.LOGIN}/>
    )}/>
);

const mapStateToProps = state => ({
    isAuth: selectIsAuth(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
