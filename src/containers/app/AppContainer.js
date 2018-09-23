import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import PropTypes from 'prop-types';

import LoginPageContainer from '../login/LoginPageContainer';
import SignupPageContainer from '../signup/SignupPageContainer';
import NavBarContainer from '../Common/NavBarContainer';
import PostsPageContainer from '../posts/PostsPageContainer';
import CreatePostPageContainer from '../posts/post/add/CreatePostPageContainer';
import EditPostPageContainer from '../posts/post/edit/EditPostPageContainer';
import PrivateRoute from '../Common/PrivateRoute';
import {ConnectedRouter} from 'connected-react-router';
import {selectIsInitialised} from '../../ducks/app/selectors';

function AppContainer({history, isInitialised}) {
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
    history: PropTypes.object.isRequired,
    isInitialised: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isInitialised: selectIsInitialised(state)
});

export default AppContainer;

