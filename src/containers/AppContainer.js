import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from '../config';
import PropTypes from 'prop-types';

import LoginPageContainer from './LoginPageContainer/LoginPageContainer';
import SignupPageContainer from './SignupPageContainer/SignupPageContainer';
import NavBarContainer from './Common/NavBarContainer';
import PostsPageContainer from './PostsPageContainer/PostsPageContainer';
import CreatePostPageContainer from './CreatePostPageContainer/CreatePostPageContainer';
import EditPostPageContainer from './EditPostPageContainer/EditPostPageContainer';
import PrivateRoute from './Common/PrivateRoute';
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
                    <PrivateRoute path={Routes.CREATE_POST} component={CreatePostPageContainer}/>
                    <PrivateRoute path={Routes.EDIT_POST} component={EditPostPageContainer}/>
                </Switch>
            </Fragment>
        </ConnectedRouter>
    );
}

AppContainer.propTypes = {
    history: PropTypes.object
};

export default AppContainer;

