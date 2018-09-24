import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectIsAdmin} from '../../ducks/auth/selectors';
import {Routes} from '../../config';

const PrivateRoute = ({component: Component, isAdmin, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAdmin ? <Component {...props} /> : <Redirect to={Routes.POSTS}/>
    )}/>
);

const mapStateToProps = state => ({
    isAdmin: selectIsAdmin(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
