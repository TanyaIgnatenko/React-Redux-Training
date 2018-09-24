import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch} from 'react-router-dom';
import {Routes} from '../../config';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';

import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';
import NavBarContainer from './NavBarContainer';
import PostsPage from '../posts/PostsPage';
import CreatePostPage from '../posts/CreatePostPage';
import EditPostPage from '../posts/EditPostPage';
import {selectIsInitialised} from '../../ducks/app/selectors';
import UserRoute from '../routes/UserRoute';
import AdminRoute from '../routes/AdminRoute';
import Loader from '../../components/common/Loader/Loader';
import AnonymRoute from '../routes/AnonymRoute';

import {history} from '../../store/store';

function AppContainer({isInitialised}) {
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
                        <UserRoute exact path={Routes.POSTS} component={PostsPage}/>
                        <Redirect to={Routes.POSTS}/>
                    </Switch>
                </Fragment>
            </ConnectedRouter> :
            <Loader/>
    );
}

AppContainer.propTypes = {
    isInitialised: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isInitialised: selectIsInitialised(state)
});

export default connect(mapStateToProps)(AppContainer);

