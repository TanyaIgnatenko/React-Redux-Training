import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch} from 'react-router-dom';
import {Routes} from '../../constants';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';

import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';
import NavBarContainer from './NavBarContainer';
import CreatePostPage from '../posts/CreatePostPage';
import EditPostPage from '../posts/EditPostPage';
import PrivateRoute from '../routes/PrivateRoute';
import Loading from '../../components/common/Loading/Loading';
import PostsPageContainer from '../posts/PostsPageContainer';
import {selectIsInitialised} from '../../ducks/app/selectors';
import {selectIsAuth, selectIsAdmin} from '../../ducks/auth/selectors';

import {history} from '../../store/store';

function App({isInitialised, isAuth, isAdmin}) {
    return (
        isInitialised ?
            <ConnectedRouter history={history}>
                <Fragment>
                    <NavBarContainer/>
                    <Switch>
                        <PrivateRoute
                            exact path={Routes.LOGIN}
                            component={LoginPage}
                            hasAccess={!isAuth}
                            redirectTo={Routes.POSTS}
                        />

                        <PrivateRoute
                            exact path={Routes.SIGN_UP}
                            component={SignupPage}
                            hasAccess={!isAuth}
                            redirectTo={Routes.POSTS}
                        />

                        <PrivateRoute
                            exact path={Routes.CREATE_POST}
                            component={CreatePostPage}
                            hasAccess={isAdmin}
                            redirectTo={Routes.LOGIN}
                        />

                        <PrivateRoute
                            exact path={Routes.EDIT_POST}
                            component={EditPostPage}
                            hasAccess={isAdmin}
                            redirectTo={Routes.LOGIN}
                        />

                        <PrivateRoute
                            exact path={Routes.POSTS}
                            component={PostsPageContainer}
                            hasAccess={isAuth}
                            redirectTo={Routes.LOGIN}
                        />

                        <Redirect to={Routes.POSTS}/>
                    </Switch>
                </Fragment>
            </ConnectedRouter> :
            <Loading/>
    );
}

App.propTypes = {
    isInitialised: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isInitialised: selectIsInitialised(state),
    isAuth: selectIsAuth(state),
    isAdmin: selectIsAdmin(state)

});

export default connect(mapStateToProps)(App);

