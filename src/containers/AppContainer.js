import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from '../config';
import PropTypes from 'prop-types';

import LoginPageContainer from './LoginPageContainer';
import SignupPageContainer from './SignupPageContainer';
import NavBarContainer from './NavBarContainer';
import PostsPageContainer from './PostsPageContainer';
import PostCreationPageContainer from './PostCreationPageContainer';
import PostEditionPageContainer from './PostEditionPageContainer';
import PrivateRoute from './PrivateRoute';
import {ConnectedRouter} from 'connected-react-router';

function AppContainer({history}) {
    return (
        <ConnectedRouter history={history}>
            <Fragment>
                <NavBarContainer/>
                <Switch>
                    <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                    <Route path={Routes.SIGN_UP} component={SignupPageContainer}/>
                    <Route exact path={Routes.POSTS} component={PostsPageContainer}/>
                    <PrivateRoute path={Routes.CREATE_POST} component={PostCreationPageContainer}/>
                    <PrivateRoute path={Routes.EDIT_POST} component={PostEditionPageContainer}/>
                </Switch>
            </Fragment>
        </ConnectedRouter>
    );
}

AppContainer.propTypes = {
    history: PropTypes.object
};

export default AppContainer;

