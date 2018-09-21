import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import PropTypes from 'prop-types';

import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';
import NavBarContainer from '../NavBarContainer/NavBarContainer';
import PostsPageContainer from '../PostsPageContainer/PostsPageContainer';
import PostCreationPageContainer from '../PostCreationPageContainer/PostCreationPageContainer';
import PostEditionPageContainer from '../PostEditionPageContainer/PostEditionPageContainer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import {ConnectedRouter} from 'connected-react-router';

function AppContainer({history}) {
    return (
        <ConnectedRouter history={history}>
            <Fragment>
                <NavBarContainer/>
                <Switch>
                    <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                    <Route path={Routes.SIGN_UP} component={SignUpPageContainer}/>
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

