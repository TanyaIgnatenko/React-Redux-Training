import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import PropTypes from 'prop-types';

import LoginPageContainer from '../login/LoginPageContainer';
import SignupPageContainer from '../signup/SignupPageContainer';
import NavBarContainer from '../Common/NavBarContainer';
import PostsPageContainer from '../posts/PostsPageContainer';
import CreatePostPage from '../posts/post/add/CreatePostPage';
import EditPostPage from '../posts/post/edit/EditPostPage';
import {ConnectedRouter} from 'connected-react-router';
import {selectIsInitialised} from '../../ducks/app/selectors';
import {connect} from 'react-redux';
import UserRoute from '../common/UserRoute';
import AdminRoute from '../common/AdminRoute';
import Loader from '../../components/common/Loader/Loader';
import AnonymRoute from '../common/AnonymRoute';

function AppContainer({history, isInitialised}) {
    return (
        isInitialised ?
            <ConnectedRouter history={history}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <AnonymRoute exact path={Routes.LOGIN} component={LoginPageContainer}/>
                        <AnonymRoute exact path={Routes.SIGN_UP} component={SignupPageContainer}/>
                        <AdminRoute exact path={Routes.CREATE_POST} component={CreatePostPage}/>
                        <AdminRoute exact path={Routes.EDIT_POST} component={EditPostPage}/>
                        <UserRoute exact path={Routes.POSTS} component={PostsPageContainer}/>
                        <Redirect to={Routes.POSTS}/>
                    </Switch>
                </Fragment>
            </ConnectedRouter> :
            <Loader/>
    );
}

AppContainer.propTypes = {
    history: PropTypes.object.isRequired,
    isInitialised: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isInitialised: selectIsInitialised(state)
});

export default connect(mapStateToProps)(AppContainer);

