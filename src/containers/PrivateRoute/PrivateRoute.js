import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Routes} from '../../config';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route {...rest} render={(props) => (
        isLoggedIn ? <Component {...props} /> : <Redirect to={Routes.LOGIN}/>
    )}/>
);

const mapStateToProps = state => ({
    isLoggedIn: state.user !== null
});

export default connect(mapStateToProps, null)(PrivateRoute);
