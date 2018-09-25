import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';

import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';
import NavBarContainer from './NavBarContainer';
import PostsPage from '../../components/posts/PostsPage/PostsPage';
import CreatePostPage from '../posts/CreatePostPage';
import EditPostPage from '../posts/EditPostPage';
import {selectIsInitialised} from '../../ducks/app/selectors';
import UserRoute from '../routes/UserRoute';
import AdminRoute from '../routes/AdminRoute';
import Loader from '../../components/common/Loader/Loader';
import AnonymRoute from '../routes/AnonymRoute';
import PostsPageContainer from '../posts/PostsPageContainer';

import {history} from '../../store/store';

function App({isInitialised}) {
    return (
        isInitialised ?
            <ConnectedRouter history={history}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <AnonymRoute exact path={Routes.LOGIN} component={LoginPage}/>
                        <AnonymRoute exact path={Routes.SIGN_UP} component={SignupPage}/>
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

App.propTypes = {
    isInitialised: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isInitialised: selectIsInitialised(state)
});

export default connect(mapStateToProps)(App);

