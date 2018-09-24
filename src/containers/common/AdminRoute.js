import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Routes} from '../../config';
import {connect} from 'react-redux';
import {selectIsAdmin} from '../../ducks/auth/selectors';

const PrivateRoute = ({component: Component, isAdmin, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAdmin ? <Component {...props} /> : <Redirect to={Routes.POSTS}/>
    )}/>
);

const mapStateToProps = state => ({
    isAdmin: selectIsAdmin(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
