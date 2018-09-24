import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
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

function AppContainer({history, isInitialised}) {
    return (
        isInitialised ?
            <ConnectedRouter history={history}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <Route path={Routes.LOGIN} component={LoginPageContainer}/>
                        <Route path={Routes.SIGN_UP} component={SignupPageContainer}/>
                        <UserRoute exact path={Routes.POSTS} component={PostsPageContainer}/>
                        <AdminRoute path={Routes.CREATE_POST} component={CreatePostPage}/>
                        <AdminRoute path={Routes.EDIT_POST} component={EditPostPage}/>
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

