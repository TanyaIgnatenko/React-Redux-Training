import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectIsAdmin} from '../../ducks/auth/selectors';
import {Routes} from '../../config';

const PrivateRoute = ({component: Component, hasAccess, redirectTo, ...rest}) => (
    <Route {...rest} render={(props) => (
        hasAccess ? <Component {...props} /> : <Redirect to={redirectTo}/>
    )}/>
);

export default PrivateRoute;
